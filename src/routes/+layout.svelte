<script lang="ts">
	import '../app.css'
	import { AppRail, AppRailAnchor, AppRailTile } from '@skeletonlabs/skeleton'
	import { page } from '$app/stores'
	import IconGear from '$lib/components/icons/IconGear.svelte'
	import IconFlowArrow from '$lib/components/icons/IconFlowArrow.svelte'
	import IconBeerBottle from '$lib/components/icons/IconBeerBottle.svelte'

	let currentRoute = $page.url.pathname
</script>

<div class="container flex h-screen">
	<AppRail class="h-screen">
		<svelte:fragment slot="lead">
			<AppRailAnchor href="/">Huts</AppRailAnchor>
		</svelte:fragment>

		<AppRailAnchor href="/workflows" selected={$page.url.pathname === '/workflows'} title="Workflows">
			<svelte:fragment slot="lead"><IconFlowArrow /></svelte:fragment>
			<span>Workflows</span>
		</AppRailAnchor>

		<AppRailAnchor href="/producten" selected={$page.url.pathname === '/producten'} title="Producten">
			<svelte:fragment slot="lead"><IconBeerBottle /></svelte:fragment>
			<span>Producten</span>
		</AppRailAnchor>

		<AppRailAnchor
			href="/instellingen"
			selected={$page.url.pathname === '/instellingen'}
			title="Instellingen"
		>
			<svelte:fragment slot="lead"><IconGear /></svelte:fragment>
			<span>Instellingen</span>
		</AppRailAnchor>
	</AppRail>

	<!-- Main app content -->
	<div class="m-2 ml-4">
		<slot />
	</div>
</div>
