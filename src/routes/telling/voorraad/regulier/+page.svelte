<script lang="ts">
	import { setTitle } from '$lib/title.svelte'
	import { onMount } from 'svelte'
	import type { PageData } from './$types'

	export let data: PageData

	onMount(() => {
		setTitle('Telling')
	})
</script>
