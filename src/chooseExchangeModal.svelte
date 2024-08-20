<script lang="ts">
	import { getModalStore, Modal } from '@skeletonlabs/skeleton';
	const modalStore = getModalStore();

	const formData = {
		player_out: '',
		player_in: ''
	};

	function onFormSubmit(): void {
		if ($modalStore[0].response) $modalStore[0].response(formData);
		modalStore.close();
	}
</script>

<div class="flex flex-col modal bg-surface-100-800-token shadow-xl p-4 space-y-3">
	<label class="label">
		<span>Going out:</span>
		<input class="input" type="text" placeholder="Aku" bind:value={formData.player_out} />
	</label>

	<label class="label">
		<span>Going in:</span>
		<input class="input" type="text" placeholder="Aku" bind:value={formData.player_in} />
	</label>

	<div class="w-full flex justify-end">
		<button type="button" class="btn variant-filled-tertiary rounded-md" on:click={onFormSubmit}
			>Start</button
		>
	</div>
</div>
