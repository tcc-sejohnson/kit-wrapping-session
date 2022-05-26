import type { Writable } from "svelte/store" 
import { writable } from "svelte/store"

export type AlertsStore = Writable<Array<string>> & { create_alert: (alert: string) => void }

export const init = (alerts: Array<string>): AlertsStore => {
  const store = writable(alerts);
  const create_alert = (alert: string) => store.update((alerts) => {
    alerts.push(alert)
    return alerts;
  })
  
  return {
    ...store,
    create_alert
  }
}