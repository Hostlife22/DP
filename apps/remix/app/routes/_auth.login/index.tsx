import { Link, useSearchParams } from "@remix-run/react"
import { TRPCClientError } from "@trpc/client"
import type { ActionFunctionArgs, MetaFunction } from "@vercel/remix"
import { redirect } from "@vercel/remix"
import { z } from "zod"

import { Form, FormButton, FormError, FormField } from "~/components/Form"
import { formError, validateFormData } from "~/lib/form"
import { trpcSsrClient } from "~/lib/providers/TRPCProvider"

import { getUserSession } from "~/services/session/session.server"

export const meta: MetaFunction = () => {
  return [{ title: "Login" }, { name: "description", content: "Login to the boilerplate" }]
}
export const headers = () => {
  return {
    "Cache-Control": "max-age=3600, s-maxage=86400",
  }
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData()
  const loginSchema = z.object({
    email: z.string().min(3).email("Неверный адрес электронной почты"),
    password: z.string().min(8, "Must be at least 8 characters"),
    redirectTo: z.string().nullable().optional(),
  })
  const result = await validateFormData(loginSchema, formData)
  if (!result.success) return formError(result)
  const data = result.data
  try {
    const { manager } = await trpcSsrClient.auth.login.mutate(data)
    const { setUser } = await getUserSession(request)
    const headers = new Headers([["Set-Cookie", await setUser(manager.uuid)]])
    const redirectTo = data.redirectTo
    return redirect(redirectTo || "/", { headers })
  } catch (error) {
    if (error instanceof TRPCClientError) return formError({ formError: error.message })
    return formError({ formError: "Неправильный адрес электронной почты или пароль" })
  }
}

export default function Login() {
  const [params] = useSearchParams()
  return (
    <Form method="post" replace>
      <div className="stack">
        <h1 className="text-4xl">Авторизация</h1>
        <input type="hidden" name="redirectTo" value={params.get("redirectTo") || ""} />
        <FormField required label="Введите адрес" name="email" placeholder="jim@gmail.com" />
        <FormField required label="Пароль" name="password" type="password" placeholder="********" />
        <div>
          <FormButton className="w-full">Войти</FormButton>
          <FormError />
        </div>

        <div className="flex justify-between">
          <Link to="/register" className="hover:opacity-70">
            Регистрация
          </Link>
          <Link to="/forgot-password" className="hover:opacity-70">
            Забыли пароль?
          </Link>
        </div>
      </div>
    </Form>
  )
}
