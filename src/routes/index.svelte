<script lang="ts">
	import { page } from '$app/stores';
	let { alerts } = $page.stuff;
	let count = 4;

	const create_alert = () => {
		alerts.create_alert(`Alert ${count}`);
		count++;
	};
</script>

<button on:click={create_alert}>Create Alert {count}</button>
