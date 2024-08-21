<script lang="ts">
	import pkg from 'file-saver';
	import { browser } from '$app/environment';
	import sound from '../party.mp3';

	const { saveAs } = pkg;

	let home_team = (browser && localStorage.getItem('home_team')) || '';
	let away_team = (browser && localStorage.getItem('away_team')) || '';

	let football_events: FootBallEvent[] =
		browser && localStorage.getItem('football_events')
			? JSON.parse(localStorage.getItem('football_events') as any)
			: [];

	let forty_five_minutes = 2700;
	let remaining_time = forty_five_minutes; // 45 minutes in seconds
	let current_time = 0;
	let is_running = false;
	let is_second_half = false;
	let interval: any = null;

	let home_score = parseInt((browser && localStorage.getItem('home_team_score')) || '0');
	let away_score = parseInt((browser && localStorage.getItem('away_team_score')) || '0');

	let game_started = false;
	$: hasEvents = football_events.length != 0;

	function addFootballEvent(
		team: string,
		time: number,
		action: string,
		player?: string,
		player_out?: string,
		player_in?: string
	) {
		if (action == 'goal') team == home_team ? home_score++ : away_score++;
		football_events = [
			...football_events,
			{ team, time: time + (is_second_half ? forty_five_minutes : 0), action, player, player_out, player_in }
		];
	}

	function startOrPause() {
		if (is_running) {
			clearInterval(interval); // Pause the timer
		} else {
			interval = setInterval(() => {
				if (remaining_time > 0) {
					current_time++;
					remaining_time--;
				} else {
					clearInterval(interval); // Stop the timer when time runs out
				}
			}, 1000);
		}
		is_running = !is_running;
	}

	function setSecondHalf() {
		current_time = 0;
		is_second_half = true;
		remaining_time = forty_five_minutes;
	}

	function stopMatch() {
		is_running = false;
		is_second_half = false;
		current_time = 0;
		remaining_time = forty_five_minutes;
		game_started = false;

		localStorage.setItem('football_events', JSON.stringify(football_events));
		localStorage.setItem('home_team', home_team);
		localStorage.setItem('home_team_score', home_score.toString());
		localStorage.setItem('away_team', away_team);
		localStorage.setItem('away_team_score', away_score.toString());

		const audio = new Audio(sound);
		audio.play();
	}

	import ChooseTeamModalComponent from '../chooseTeamModal.svelte';
	import ChooseHomeScorerComponent from '../chooseHomeScorerModal.svelte';
	import ChooseExchangeModal from '../chooseExchangeModal.svelte';
	import { getModalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';
	import { football_actions, type FootBallEvent } from '../types';
	import EditableEventMenu from '../EditableEventMenu.svelte';

	const teamModalComponent: ModalComponent = { ref: ChooseTeamModalComponent };
	const ChoosePlayerModal: ModalComponent = { ref: ChooseHomeScorerComponent };
	const ChooseExchangeModalComponent: ModalComponent = { ref: ChooseExchangeModal };

	const chooseTeamModal: ModalSettings = {
		type: 'component',
		component: teamModalComponent,
		response: (v: any) => {
			if (!v) return;
			home_team = v.home_team_name;
			localStorage.setItem('home_team', home_team);
			away_team = v.away_team_name;
			game_started = true;
			home_score = 0;
			away_score = 0;
			football_events = [];
		}
	};

	const chooseScorerModal: ModalSettings = {
		type: 'component',
		component: ChoosePlayerModal,
		response: (v: any) => {
			if (!v) return;
			addFootballEvent(`${storedEvent.team}`, storedEvent.time, storedEvent.action, v.player_name);
		}
	};

	const chooseExchangerModal: ModalSettings = {
		type: 'component',
		component: ChooseExchangeModalComponent,
		response: (v: any) => {
			if (!v) return;
			addFootballEvent(
				`${storedEvent.team}`,
				storedEvent.time,
				storedEvent.action,
				undefined,
				v.player_out,
				v.player_in
			);
		}
	};
	const modalStore = getModalStore();

	function startMatch() {
		modalStore.trigger(chooseTeamModal);
	}

	let storedEvent: any = {};
	function openScorerModal(team: string, time: number, action: string) {
		storedEvent = { team, time, action };
		modalStore.trigger(chooseScorerModal);
	}

	function openExchangeModal(team: string, time: number, action: string) {
		storedEvent = { team, time, action };
		modalStore.trigger(chooseExchangerModal);
	}

	function createCSV() {
		// Create CSV headers
		let csvContent = 'Time,Team,Action\n';

		// Loop through the football events and add each row to the CSV content
		football_events.forEach((event) => {
			// Convert time to MM:SS format
			const minutes = Math.floor(event.time / 60);
			const seconds = String(event.time % 60).padStart(2, '0');
			const formattedTime = `${minutes}:${seconds}`;

			// Add the event data as a row
			csvContent += `${formattedTime},${event.team},${event.action}\n`;
		});

		// Create a Blob from the CSV content
		const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

		// Use file-saver to trigger the download
		saveAs(blob, 'football_events.csv');
	}
</script>

<div class="h-full w-full flex justify-center items-center flex-col">
	{#if game_started}
		<div class="p-4 w-full flex flex-col justify-center items-center">
			<div class="relative">
				<p class="text-3xl absolute right-0">
					{Math.floor(remaining_time / 60)}:{String(remaining_time % 60).padStart(2, '0')}
				</p>
				<p class="text-7xl pt-8 pb-3">
					{Math.floor(
						(is_second_half ? current_time + forty_five_minutes : current_time) / 60
					)}:{String(
						(is_second_half ? current_time + forty_five_minutes : current_time) % 60
					).padStart(2, '0')}
				</p>
			</div>

			<div class="w-4/5 flex justify-between items-center">
				<button
					on:click={stopMatch}
					type="button"
					class="btn-icon variant-filled-primary btn-icon-sm"
					disabled={!is_second_half || is_running}
				>
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
				</button>

				<button
					type="button"
					class="btn-icon variant-filled-primary btn-icon-xl"
					on:click={startOrPause}
				>
					{#if is_running}
						<svg
							class="w-[36px] h-[36px] text-gray-800 dark:text-white"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								fill-rule="evenodd"
								d="M8 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H8Zm7 0a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1Z"
								clip-rule="evenodd"
							/>
						</svg>
					{:else}
						<svg
							class="w-[36px] h-[36px] text-gray-800 dark:text-white"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								fill-rule="evenodd"
								d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z"
								clip-rule="evenodd"
							/>
						</svg>
					{/if}
				</button>

				<button
					on:click={setSecondHalf}
					type="button"
					class="btn-icon variant-filled-primary btn-icon-sm"
					disabled={is_second_half || is_running}
				>
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
							d="M13.09 3.294c1.924.95 3.422 1.69 5.472.692a1 1 0 0 1 1.438.9v9.54a1 1 0 0 1-.562.9c-2.981 1.45-5.382.24-7.25-.701a38.739 38.739 0 0 0-.622-.31c-1.033-.497-1.887-.812-2.756-.77-.76.036-1.672.357-2.81 1.396V21a1 1 0 1 1-2 0V4.971a1 1 0 0 1 .297-.71c1.522-1.506 2.967-2.185 4.417-2.255 1.407-.068 2.653.453 3.72.967.225.108.443.216.655.32Z"
						/>
					</svg>
				</button>
			</div>

			<div class="w-4/5 flex justify-between items-center mt-4">
				<p>{home_team}</p>
				<p class="text-4xl">{home_score}-{away_score}</p>
				<p>{away_team}</p>
			</div>
			<hr class="!border-t-2 w-full mt-2" />
		</div>

		<div class="flex justify-between items-center w-4/5">
			<div class="flex flex-col space-y-4">
				{#each football_actions as action, i}
					<button
						disabled={!is_running}
						type="button"
						class="btn variant-filled-primary rounded-md"
						on:click={() => {
							if (action == 'goal') openScorerModal(home_team, current_time, action);
							else if (action == 'wissel') openExchangeModal(home_team, current_time, action);
							else addFootballEvent(home_team, current_time, action);
						}}>{action}</button
					>
				{/each}
			</div>

			<span class="divider-vertical self-stretch" />

			<div class="flex flex-col space-y-4">
				{#each football_actions as action, i}
					<button
						disabled={!is_running}
						type="button"
						class="btn variant-filled-tertiary rounded-md"
						on:click={() => {
							if (action == 'goal') openScorerModal(away_team, current_time, action);
							else if (action == 'wissel') openExchangeModal(away_team, current_time, action);
							else addFootballEvent(away_team, current_time, action);
						}}>{action}</button
					>
				{/each}
			</div>
		</div>

		<div class="p-4 w-full">
			<hr class="!border-t-2 w-full" />

			<EditableEventMenu
				bind:football_events
				{home_team}
				{away_team}
				bind:away_score
				bind:home_score
			/>
		</div>
	{:else}
		<div class="p-4 w-full flex flex-col justify-center items-center">
			<p class="text-4xl">{`${hasEvents ? 'Game Finished' : 'Scorekeeper'}`}</p>
			<!-- svelte-ignore a11y-missing-attribute -->
			<iframe
				src="https://giphy.com/embed/KGTTNpVuGVhN6"
				width="300"
				height="400"
				style=""
				frameBorder="0"
				class="giphy-embed"
				allowFullScreen
			></iframe>

			<div class="w-4/5 flex justify-between items-center pt-5">
				<button
					type="button"
					class="btn variant-filled-primary rounded-xl"
					on:click={createCSV}
					disabled={!hasEvents}>Export data</button
				>
				<button type="button" class="btn variant-filled-tertiary rounded-xl" on:click={startMatch}
					>Start</button
				>
			</div>
			<div class="w-4/5 flex justify-between items-center mt-4">
				<p>{home_team}</p>
				<p class="text-4xl">{home_score}-{away_score}</p>
				<p>{away_team}</p>
			</div>
			<hr class="!border-t-2 w-full mt-4" />

			<EditableEventMenu
				bind:football_events
				{home_team}
				{away_team}
				bind:away_score
				bind:home_score
			/>
		</div>
	{/if}
</div>
