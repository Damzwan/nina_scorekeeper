<script lang="ts">
	import { getModalStore, Modal } from '@skeletonlabs/skeleton';
	const modalStore = getModalStore();

	const formData = {
		player_name: ''
	};

	function onFormSubmit(): void {
		if ($modalStore[0].response) $modalStore[0].response(formData);
		modalStore.close();
	}
</script>

<div class="flex flex-col modal bg-surface-100-800-token shadow-xl p-4 space-y-3">
	<label class="label">
		<span>Scorer:</span>
		<input class="input" type="text" placeholder="Aku" bind:value={formData.player_name} />
	</label>

	<div class="w-full flex justify-end">
		<button type="button" class="btn variant-filled-tertiary rounded-md" on:click={onFormSubmit}
			>Start</button
		>
	</div>
</div>
