<script lang="ts">
	import '../app.postcss';
	import { initializeStores } from '@skeletonlabs/skeleton';
	import { Modal } from '@skeletonlabs/skeleton';


	initializeStores();
</script>

<Modal/>
<slot />
