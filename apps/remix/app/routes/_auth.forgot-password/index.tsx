import { Link } from "@remix-run/react"
import { redirect, type ActionFunctionArgs } from "@vercel/remix"
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
  const resetSchema = z.object({ email: z.string().email("Неверный адрес электронной почты") })
  const result = await validateFormData(resetSchema, formData)
  if (!result.success) return formError(result)
  const { createFlash } = await getFlashSession(request)
  const data = result.data
  try {
    await trpcSsrClient.auth.forgotPassword.mutate(data)
    return redirect("/login", {
      headers: { "Set-Cookie": await createFlash(FlashType.Info, "Ссылка для сброса отправлена ​​на ваш адрес электронной почты") },
    })
  } catch (error) {
    return badRequest(error, {
      headers: { "Set-Cookie": await createFlash(FlashType.Error, "Ошибка сброса пароля") },
    })
  }
}

export default function ForgotPassword() {
  return (
    <Form method="post">
      <div className="stack">
        <h1 className="text-4xl font-bold">Забыли пароль?</h1>
        <p>Введите свой адрес электронной почты ниже, чтобы получить инструкции по сбросу пароля.</p>
        <FormField required label="Введите адрес" name="email" placeholder="jim@gmail.com" />
        <FormError />
        <FormButton className="w-full">Отправить инструкции</FormButton>
        <Link to="/login">Логин</Link>
      </div>
    </Form>
  )
}
