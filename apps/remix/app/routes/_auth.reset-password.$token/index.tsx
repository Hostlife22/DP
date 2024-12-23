import { Link, useParams } from "@remix-run/react"
import { ActionFunctionArgs, LoaderFunctionArgs, redirect } from "@vercel/remix"
import { z } from "zod"

import { Form, FormButton, FormError, FormField } from "~/components/Form"
import { formError, validateFormData } from "~/lib/form"
import { trpcSsrClient } from "~/lib/providers/TRPCProvider"
import { badRequest } from "~/lib/remix"
import { FlashType, getFlashSession } from "~/services/session/flash.server"

export const headers = () => {
  return {
    "Cache-Control": "max-age=3600, s-maxage=86400",
  }
}
export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData()
  const resetPasswordSchema = z.object({
    token: z.string(),
    password: z.string().min(8, "Must be at least 8 characters"),
  })
  const result = await validateFormData(resetPasswordSchema, formData)
  if (!result.success) return formError(result)
  const data = result.data
  const { createFlash } = await getFlashSession(request)
  try {
    await trpcSsrClient.auth.resetPassword.mutate(data)
    return redirect("/login", {
      headers: { "Set-Cookie": await createFlash(FlashType.Info, "Password changed") },
    })
  } catch (error) {
    return badRequest(error, {
      headers: { "Set-Cookie": await createFlash(FlashType.Error, "Change password error") },
    })
  }
}

export default function ResetPassword() {
  const { token } = useParams()

  return (
    <Form method="post">
      <div className="stack">
        <div>
          <h1 className="text-4xl font-bold">Сбросить пароль</h1>
          <p>Введите новый пароль ниже.</p>
        </div>
        <input name="token" type="hidden" value={token} />
        <FormField required label="Пароль" name="password" type="password" placeholder="********" />
        <FormError />
        <FormButton className="w-full">Сбросить пароль</FormButton>
        <Link to="/login">Логин</Link>
      </div>
    </Form>
  )
}
