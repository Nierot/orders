<script lang="ts">
	import '../app.css'
	import { AppRail, AppRailAnchor, AppRailTile } from '@skeletonlabs/skeleton'
	import { page } from '$app/stores'

	let currentTile: number = 0
</script>

<div class="container grid h-screen auto-cols-auto">
	<AppRail class="h-screen">
		<svelte:fragment slot="lead">
			<AppRailAnchor href="/">Huts</AppRailAnchor>
		</svelte:fragment>

		<AppRailAnchor href="/" target="_blank" title="Account">(workflows icon)</AppRailAnchor>
		<AppRailAnchor href="/" target="_blank" title="Account">(producten icon)</AppRailAnchor>
		<AppRailAnchor href="/" target="_blank" title="Account">(settings icon)</AppRailAnchor>

		<svelte:fragment slot="trail">
			<AppRailAnchor href="/" target="_blank" title="Account">(icon)</AppRailAnchor>
		</svelte:fragment>
	</AppRail>

	<div>
		<slot />
	</div>
</div>
