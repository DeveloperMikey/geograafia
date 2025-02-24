<script lang="ts">
	import { base } from "$app/paths";
	import * as diff from "diff";
	import * as repetition from "$lib/repetition.svelte";

	let { path, names }: { path: string; names: string[] } = $props();

	const deck = new repetition.Deck();

	let input: HTMLInputElement;
	let form: HTMLFormElement;
	let hint = $state("");

	let misspelled = false;
	let wrong = false;

	const preloadedImages: Record<string, HTMLImageElement> = {};

	names.forEach((name) => {
		deck.addCard(name);
		const img = new Image();
		img.src = `${base}/maps/${path}/${name}.png`;
		preloadedImages[name] = img;
	});

	$effect(() => {
		deck.getNextCard();
		input.focus();
		input.addEventListener("blur", () => {
			// keep focus on input
			setTimeout(() => {
				input.focus();
			}, 0);
		});

		form.addEventListener("submit", (event) => {
			if (input.value.length === 0 || deck.current === undefined) return; // no empty | card not found
			const userInput = input.value.trim();
			input.value = "";

			if (userInput.toLowerCase() === deck.current.name.toLowerCase()) {
				input.style.backgroundColor = "#70e071"; // green
				hint = "";

				deck.current.rate(wrong, misspelled);

				wrong = false;
				misspelled = false;

				deck.getNextCard(); // TODO: check if no cards are left
				return;
			}

			const difference = diff.diffChars(deck.current.name, userInput, {
				ignoreCase: true,
			});

			const differenceCount = difference
				.filter((section) => {
					return section.added || section.removed;
				})
				.reduce(
					(partial, section) => partial + (section.count || 0),
					0,
				);

			if (differenceCount <= 2) {
				// misspell
				misspelled = true;
				input.style.backgroundColor = "#ffe600"; // yellow
				hint = "";
				difference.forEach((section) => {
					if (section.added) {
						hint += `<span style="color: red; white-space: pre;">${section.value}</span>`;
					} else if (!section.removed) {
						hint += section.value;
					}
				});
				hint += " -> ";
				difference.forEach((section) => {
					if (section.removed) {
						hint += `<span style="color: green; white-space: pre;">${section.value}</span>`;
					} else if (!section.added) {
						hint += section.value;
					}
				});
			} else {
				// wrong
				input.style.backgroundColor = "#f56e6e"; // red
				if (!wrong && !misspelled) {
					hint =
						deck.current.name.charAt(0) +
						deck.current.name.replace(/[^ ]/g, "_").slice(1); // A____ _____
					wrong = true;
				} else {
					hint = deck.current.name;
				}
			}
		});
	});
</script>

<div id="map-container">
	<img class="map" id="map" alt="" src="{base}/maps/{path}/Kaart.png" />
	{#if deck.current !== undefined}
		<img
			class="map"
			id="map-marker"
			alt=""
			src={preloadedImages[deck.current.name]?.src}
		/>
	{/if}

	<form id="form" bind:this={form}>
		<!-- svelte-ignore a11y_autofocus -->
		<input
			type="text"
			id="input"
			autocomplete="off"
			placeholder="Kirjuta siia nimi"
			bind:this={input}
			autofocus
		/>
	</form>
	<p id="hint">{@html hint}</p>
</div>

<style>
	:global(html, body) {
		overflow: hidden;
		margin: 0;
		padding: 0;
		font-family: Arial, sans-serif;
	}

	.map {
		position: absolute;
		top: 0px;
		left: 50%;
		transform: translate(-50%, 0px);
		max-width: 100%;
		max-height: 100%;
		pointer-events: none;
		margin: 0;
		padding: 0;
		object-fit: contain;
	}

	#map-container {
		overflow: hidden;
		position: relative;
		width: 100vw;
		height: 100dvh;
	}

	#map-marker {
		z-index: 1;
	}

	#input {
		position: fixed;
		bottom: 0;
		height: 40px;
		width: 70%;
		border: 0px;
		border-top: 2px solid rgba(0, 0, 0, 0.5);
		border-right: 2px solid rgba(0, 0, 0, 0.5);
		font-size-adjust: 0.6;
		text-align: center;
		z-index: 2;
		outline: none;
		color: #333;
		margin: 0;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	#hint {
		position: fixed;
		bottom: 0px;
		left: calc(70% + 2px);
		height: 40px;
		width: calc(30% - 2px);
		border: 0px;
		border-top: 2px solid rgba(0, 0, 0, 0.5);
		font-size-adjust: 0.45;
		text-align: center;
		z-index: 2;
		color: #333;
		pointer-events: none;
		margin: 0;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
