<script lang="ts">
	import '../app.css'
	import { AppBar, AppRail, AppRailAnchor } from '@skeletonlabs/skeleton'
	import { page } from '$app/stores'
	import IconGear from '$lib/components/icons/IconGear.svelte'
	import IconFlowArrow from '$lib/components/icons/IconFlowArrow.svelte'
	import IconBeerBottle from '$lib/components/icons/IconBeerBottle.svelte'
	import { getTitle } from '$lib/title.svelte'
	import IconHelp from '$lib/components/icons/IconHelp.svelte'

	function help() {
		alert('lol wat dacht je zelf')
	}
</script>

<div class="container h-screen">
	<header class="w-screen shadow-xl">
		<AppBar
			gridColumns="grid-cols-3"
			background="bg-primary-50"
			slotDefault="place-self-center"
			slotTrail="place-content-end">
			<svelte:fragment slot="lead">
				<a href="/">(logo)</a>
			</svelte:fragment>
			<h1 class="h4">{getTitle()}</h1>
			<svelte:fragment slot="trail">
				<button on:click={help}>
					<IconHelp />
				</button>
			</svelte:fragment>
		</AppBar>
	</header>

	<aside class="h-screen w-min">
		<AppRail background="bg-primary-50">
			<AppRailAnchor
				href="/workflows"
				selected={$page.url.pathname === '/workflows'}
				title="Workflows">
				<svelte:fragment slot="lead"><IconFlowArrow /></svelte:fragment>
				<span>Workflows</span>
			</AppRailAnchor>
			<AppRailAnchor
				href="/producten"
				selected={$page.url.pathname === '/producten'}
				title="Producten">
				<svelte:fragment slot="lead"><IconBeerBottle /></svelte:fragment>
				<span>Producten</span>
			</AppRailAnchor>
			<AppRailAnchor
				href="/instellingen"
				selected={$page.url.pathname === '/instellingen'}
				title="Instellingen">
				<svelte:fragment slot="lead"><IconGear /></svelte:fragment>
				<span>Instellingen</span>
			</AppRailAnchor>
		</AppRail>
	</aside>

	<!-- Main app content -->
	<main class="m-2 ml-4">
		<slot />
	</main>

	<!-- Footer is only visible on mobile -->
	<footer class="w-screen">
		<AppBar
			gridColumns="grid-cols-3"
			slotDefault="place-self-center"
			slotTrail="place-content-end">
			1...2...3
		</AppBar>
	</footer>
</div>

<style lang="scss">
	.container {
		// Desktop
		@media (min-width: 768px) {
			display: grid;
			grid-template-columns: auto 1fr;
		}

		// Mobile
		@media (max-width: 768px) {
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: auto 1fr auto;
		}
	}

	header {
		grid-column: 1 / 3;

		@media (max-width: 768px) {
			height: min-content;
		}
	}

	footer {
		grid-column: 1 / 3;

		border-top: 1px solid rgba(var(--color-primary-500) / 0.3);

		@media (min-width: 768px) {
			display: none;
		}
	}

	aside {
		display: flex;
		flex-direction: column;

		border-right: 1px solid rgba(var(--color-primary-500) / 0.2);

		@media (max-width: 768px) {
			display: none;
		}
	}

	main {
		display: flex;
		flex-direction: column;
	}
</style>
