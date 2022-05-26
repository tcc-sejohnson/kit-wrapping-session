import type { GetSession } from "@sveltejs/kit";

export const getSession: GetSession = () => {
  return {
    alerts: [
      "Alert 1",
      "Alert 2",
      "Alert 3",
    ]
  }
}
