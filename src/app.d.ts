/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
	// interface Locals {}
	// interface Platform {}
  interface Session {
    alerts: Array<string>;
  }
  interface Stuff {
    alerts: import('src/lib/stores/alerts').AlertsStore;
  }
}
