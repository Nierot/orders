import { initSettings } from '$lib/server/settings'

// This runs on startup
await (async () => {
	await initSettings()
})()
