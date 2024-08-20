<script lang="ts">
	import { getModalStore, Modal } from '@skeletonlabs/skeleton';
	const modalStore = getModalStore();

	const formData = {
		home_team_name: localStorage.getItem('home_team') || '',
		away_team_name: ''
	};

	function onFormSubmit(): void {
		if ($modalStore[0].response) $modalStore[0].response(formData);
		modalStore.close();
	}
</script>

<div class="flex flex-col modal bg-surface-100-800-token shadow-xl p-4 space-y-3">
	<label class="label">
		<span>Home team name</span>
		<input
			class="input"
			type="text"
			placeholder="Kessel-Loco"
			bind:value={formData.home_team_name}
		/>
	</label>

	<label class="label">
		<span>Away team name</span>
		<input
			class="input"
			type="text"
			placeholder="Anderslecht"
			bind:value={formData.away_team_name}
		/>
	</label>

	<div class="w-full flex justify-end">
		<button
			type="button"
			value={formData.away_team_name}
			class="btn variant-filled-tertiary rounded-md"
			on:click={onFormSubmit}>Start</button
		>
	</div>
</div>
