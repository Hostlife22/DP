import type { ActionFunctionArgs } from "@vercel/remix"
import { redirect } from "@vercel/remix"

import { FlashType, getFlashSession } from "~/services/session/flash.server"
import { getUserSession } from "~/services/session/session.server"

export const action = async ({ request }: ActionFunctionArgs) => {
  const { destroy } = await getUserSession(request)
  const { createFlash } = await getFlashSession(request)
  const headers = new Headers([
    ["Set-Cookie", await destroy()],
    ["Set-Cookie", await createFlash(FlashType.Info, "Вышли из системы", "До скорой встречи")],
  ])
  return redirect("/", { headers })
}

export const loader = () => redirect("/login")
