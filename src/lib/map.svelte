<script lang="ts">
	import { base } from "$app/paths";
	import * as diff from "diff";
	import * as repetition from "$lib/repetition.svelte";

	let { path, names }: { path: string; names: string[] } = $props();
	let no_inclusion = ["järv", "jõgi", "meri", "saar", "poolsaar", "laht", "väin"]

	const deck = new repetition.Deck();
	
	let finished = $state(false);

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
			let userInput = input.value.trim();
			input.value = "";

			var processedUserInput = userInput.toLowerCase().replaceAll('-', ' ')
			if (processedUserInput === 'sutlepa järv'){
				processedUserInput = 'sutlepa meri'
			}

			var processedAnswer = deck.current.name.toLowerCase().replaceAll('-', ' ')
			
			no_inclusion.forEach(no_include => {
				if (processedAnswer.endsWith(no_include)){
					processedUserInput = processedUserInput.replaceAll(` ${no_include}`, '')
					processedAnswer = processedAnswer.replaceAll(` ${no_include}`, '')
				}
			})

			if (processedUserInput === processedAnswer) {
				input.style.backgroundColor = "#70e071"; // green
				hint = "";

				deck.current.rate(wrong, misspelled);

				wrong = false;
				misspelled = false;

				if (!deck.getNextCard()){
					finished = true;
				} 
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

<head>
	<meta name="viewport" content="width=device-width, initial-scale=1, interactive-widget=resizes-content">
</head>

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

{#if finished}
	<div id="end-screen">
		<div id="end-box">
			<h2>Tehtud!</h2>
			<button onclick={() => window.location.href = `${base}/`}>Avaleht</button>
			<button onclick={() => window.location.reload()}>Uuesti</button>
		</div>
	</div>
{/if}

<style>
	:global(html, body) {
		overflow: hidden;
		margin: 0;
		padding: 0;
		font-family: Arial, sans-serif;
		height: 100%;
	}

	.map {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		max-height: calc(100dvh - 30px - 20px);
		width: auto;
		max-width: 100vw;
		object-fit: contain;
	}

	#map-container {
		overflow: hidden;
		position: relative;
		width: 100vw;
		height: 100%;
	}

	#map-marker {
		z-index: 1;
	}

	#input {
		position: fixed;
		bottom: 0;
		height: 40px;
		width: 100%;
		border: 0px;
		border-top: 2px solid rgba(0, 0, 0, 0.5);
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
		background: #fff;
	}

	#hint {
		position: fixed;
		bottom: 40px;
		height: 30px;
		width: 100%;
		border: 0px;
		border-bottom: 2px solid rgba(0, 0, 0, 0.5);
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
		background: #fff;
	}

	
	#end-screen {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 10;
	}

	#end-box {
		background: white;
		border-radius: 12px;
		padding: 2rem;
		text-align: center;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
	}

	#end-box h2 {
		margin-bottom: 1rem;
	}

	#end-box button {
		margin: 0.5rem;
		padding: 0.75rem 1.5rem;
		font-size: 1rem;
		border: none;
		border-radius: 6px;
		cursor: pointer;
		background-color: #f0f0f0;
		transition: background-color 0.2s;
	}

	#end-box button:hover {
		background-color: #dcdcdc;
	}

</style>
