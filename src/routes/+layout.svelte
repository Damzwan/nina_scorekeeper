<script lang="ts">
	import '../app.postcss';
	import { initializeStores } from '@skeletonlabs/skeleton';
	import { Modal } from '@skeletonlabs/skeleton';

	export const ssr = false;

	initializeStores();
</script>

<Modal />
<slot />
