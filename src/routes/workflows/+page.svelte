<script lang="ts">
	import { setTitle } from '$lib/title.svelte'
	import type { PageData } from './$types'

	export let data: PageData

	setTitle('Workflows')
</script>

<h1 class="h1">Workflows</h1>
