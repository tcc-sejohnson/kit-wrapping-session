<script lang="ts" context="module">
	import type { Load } from './__types';
	import { init } from '../lib/stores/alerts';

	export const load: Load = ({ session }) => {
		const alerts = init(session.alerts);

		return {
			stuff: {
				alerts
			}
		};
	};
</script>

<script lang="ts">
	import { page } from '$app/stores';
	let { alerts } = $page.stuff;
</script>

<header>
	<span>Value in root layout is:</span>
	<span>{$alerts?.join(', ')}</span>
</header>

<slot />
