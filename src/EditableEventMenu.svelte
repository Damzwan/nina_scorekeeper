<script lang="ts">
	import { football_actions, type FootBallEvent } from './types';

	export let football_events: FootBallEvent[] = [];
	export let home_team: string;
	export let away_team: string;
	export let home_score: number;
	export let away_score: number;

	let editMode = false;

	function updateEvent(index: number, field: keyof FootBallEvent, value: any) {
		football_events = football_events.map((event, i) =>
			i === index ? { ...event, [field]: value } : event
		);
	}

	function updateEventTime(index: number, minutes: number, seconds: number) {
		const time = minutes * 60 + seconds;
		updateEvent(index, 'time', time);
	}

	function deleteEvent(index: number) {
		if (football_events[index].action == 'goal')
			football_events[index].team == home_team ? home_score-- : away_score--;
		football_events = football_events.filter((_, i) => i !== index);
	}

	// Create a reversed array once for rendering purposes
	$: reversedFootballEvents = [...football_events].reverse();

	function toggleEditMode() {
		if (editMode) {
			// Sort the events by time when exiting edit mode
			football_events = football_events.sort((a, b) => a.time - b.time);
		}
		editMode = !editMode;
	}
</script>

<div class="w-full">
	<div class="w-full justify-center items-center flex flex-col mt-2 relative">
		<div class="w-full justify-start">
			<button on:click={toggleEditMode} type="button" class="btn-icon bg-initial btn-icon-sm">
				{#if editMode}
					<!-- Edit Mode Icon -->
					<svg
						class="w-6 h-6 text-gray-800 dark:text-white"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path d="M7 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Z" />
					</svg>
				{:else}
					<!-- View Mode Icon -->
					<svg
						class="w-6 h-6 text-gray-800 dark:text-white"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							fill-rule="evenodd"
							d="M11.32 6.176H5c-1.105 0-2 .949-2 2.118v10.588C3 20.052 3.895 21 5 21h11c1.105 0 2-.948 2-2.118v-7.75l-3.914 4.144A2.46 2.46 0 0 1 12.81 16l-2.681.568c-1.75.37-3.292-1.263-2.942-3.115l.536-2.839c.097-.512.335-.983.684-1.352l2.914-3.086Z"
							clip-rule="evenodd"
						/>
						<path
							fill-rule="evenodd"
							d="M19.846 4.318a2.148 2.148 0 0 0-.437-.692 2.014 2.014 0 0 0-.654-.463 1.92 1.92 0 0 0-1.544 0 2.014 2.014 0 0 0-.654.463l-.546.578 2.852 3.02.546-.579a2.14 2.14 0 0 0 .437-.692 2.244 2.244 0 0 0 0-1.635ZM17.45 8.721 14.597 5.7 9.82 10.76a.54.54 0 0 0-.137.27l-.536 2.84c-.07.37.239.696.588.622l2.682-.567a.492.492 0 0 0 .255-.145l4.778-5.06Z"
						/>
					</svg>
				{/if}
			</button>
		</div>

		{#if editMode}
			<!-- Edit Mode -->
			{#each reversedFootballEvents as event, i}
				<div class="flex flex-row items-center space-x-2 mb-2">
					<!-- Time Input -->
					<input
						type="number"
						min="0"
						value={Math.floor(event.time / 60)}
						class="input input-bordered w-10"
						placeholder="MM"
						on:change={(e) =>
							updateEventTime(football_events.length - i - 1, +e.target.value, event.time % 60)}
					/>
					:
					<input
						type="number"
						min="0"
						max="59"
						value={event.time % 60}
						class="input input-bordered w-12"
						placeholder="SS"
						on:change={(e) =>
							updateEventTime(
								football_events.length - i - 1,
								Math.floor(event.time / 60),
								+e.target.value
							)}
					/>

					<!-- Team Select -->
					<select
						bind:value={event.team}
						class="select select-bordered"
						on:change={(e) => updateEvent(football_events.length - i - 1, 'team', e.target.value)}
					>
						<option value={home_team}>{home_team}</option>
						<option value={away_team}>{away_team}</option>
					</select>

					<!-- Action Select -->
					<select
						bind:value={event.action}
						class="select select-bordered"
						on:change={(e) => updateEvent(football_events.length - i - 1, 'action', e.target.value)}
					>
						{#each football_actions as action}
							<option value={action}>{action}</option>
						{/each}
					</select>

					{#if event.player}
						<input
							type="string"
							value={event.player}
							class="input input-bordered w-20"
							placeholder="Aku"
							on:change={(e) =>
								updateEvent(football_events.length - i - 1, 'player', e.target.value)}
						/>
					{/if}

					{#if event.player_out}
						<input
							type="string"
							value={event.player_out}
							class="input input-bordered w-20"
							placeholder="Aku"
							on:change={(e) =>
								updateEvent(football_events.length - i - 1, 'player_out', e.target.value)}
						/>

						<input
							type="string"
							value={event.player_in}
							class="input input-bordered w-20"
							placeholder="Aku"
							on:change={(e) =>
								updateEvent(football_events.length - i - 1, 'player_in', e.target.value)}
						/>
					{/if}

					<button
						on:click={() => deleteEvent(football_events.length - i - 1)}
						type="button"
						class="btn-icon bg-initial btn-icon-sm"
					>
						<svg
							class="w-[36px] h-[36px] text-gray-800 dark:text-white"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="none"
							viewBox="0 0 24 24"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
							/>
						</svg>
					</button>
				</div>
			{/each}
		{:else}
			<!-- View Mode -->
			{#each reversedFootballEvents as event, i}
				<p>
					{Math.floor(event.time / 60)}:{String(event.time % 60).padStart(2, '0')} -
					{event.team.substring(0, 1).toUpperCase()}. {event.action}
					{event.player ? `(${event.player})` : ''}
					{event.player_out ? `(out: ${event.player_out}, in: ${event.player_in})` : ''}
				</p>
			{/each}
		{/if}
	</div>
</div>
