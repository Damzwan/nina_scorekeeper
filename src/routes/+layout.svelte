<script lang="ts">
	import '../app.postcss';
	import { initializeStores } from '@skeletonlabs/skeleton';
	import { Modal } from '@skeletonlabs/skeleton';

	import { pwaInfo } from 'virtual:pwa-info';

	$: webManifestLink = pwaInfo ? pwaInfo.webManifest.linkTag : '';

	initializeStores();
</script>

<svelte:head> 
 	{@html webManifestLink} 
</svelte:head>

<Modal />
<slot />
