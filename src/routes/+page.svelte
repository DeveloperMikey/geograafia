<script lang="ts">
	import { base } from "$app/paths";
	import { maastikud, saared, veekogud } from "$lib/landforms";

	let showModal: boolean = false;
	let currentList: string[] = [];
	let modalTitle: string = "";

	function openModal(data: string[], title: string) {
		currentList = data;
		modalTitle = title;
		showModal = true;
	}

	function closeModal() {
		showModal = false;
	}
</script>



<div class="wrapper">
    <a href="{base}/maps/veekogud" class="map-item">
        <img class="mapselect" src="{base}/maps/veekogud/Kaart.png" alt="Veekogud">
        <span class="map-text">Siseveekogud</span>
        <button class="map-button" onclick={(e) => { e.stopPropagation(); e.preventDefault(); openModal(veekogud, "Siseveekogud"); }}>Nimekiri ❓</button>
    </a>
    <a href="{base}/maps/maastikud" class="map-item">
        <img class="mapselect" src="{base}/maps/maastikud/Kaart.png" alt="Maastikud">
        <span class="map-text">Pinnavormid</span>
        <button class="map-button" onclick={(e) => { e.stopPropagation(); e.preventDefault(); openModal(maastikud, "Pinnavormid"); }}>Nimekiri ❓</button>
    </a>
    <a href="{base}/maps/saared" class="map-item">
        <img class="mapselect" src="{base}/maps/saared/Kaart.png" alt="Saared">
        <span class="map-text">Rannajoonega<br>seotud kohanimed</span>
        <button class="map-button" onclick={(e) => { e.stopPropagation(); e.preventDefault(); openModal(veekogud, "Rannajoonega seotud kohanimed"); }}>Nimekiri ❓</button>
    </a>
</div>

{#if showModal}
	<div role="dialog" aria-modal="true" aria-label={modalTitle} class="modal">
		<h2>{modalTitle}</h2>
		<ul>
			{#each currentList as item}
				<li>{item}</li>
			{/each}
		</ul>
		<button onclick={closeModal} type="button">Sulge</button>
	</div>

	<button
		type="button"
		class="modal-backdrop"
		onclick={closeModal}
		aria-label="Close modal"
	></button>
{/if}


<style>
:global(html, body) {
    height: 100%;
    margin: 0;
    padding: 0;
}

:global(body) {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
}

.wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 10px;
    padding: 20px;
}

.map-item {
    position: relative;
    display: block;
    text-align: center;
    overflow: hidden;
}

.mapselect {
    width: 100%;
    max-width: 100%;
    height: auto;
    object-fit: cover;
    object-position: -5px center;
    display: block;
}

.map-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: sans-serif;
    font-size: 3em;
    font-weight: bold;
    color: white;
    background: rgba(0, 0, 0, 0.5);
    padding: 10px 20px;
    border-radius: 5px;
    text-transform: uppercase;
}

.map-button {
    position: absolute;
    bottom: 10px;
    right: 7%;
    font-size: 1.5rem;
    background-color: #7e7e7e; /* solid black */
    color: #fff;
    border: none;
    padding: 8px 12px;
    cursor: pointer;
    font-family: sans-serif;
    z-index: 2;
}

.modal-backdrop {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.6);
	z-index: 10;
	border: none;
	padding: 0;
	margin: 0;
}

.modal {
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: white;
	color: black;
	padding: 20px;
	border-radius: 8px;
	box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
	z-index: 11;
	max-width: 80vw;
	max-height: 80vh;
	overflow-y: auto;
	font-family: sans-serif;
	outline: none;
}

.modal h2 {
	margin-top: 0;
	font-size: 1.8rem;
}

.modal ul {
	list-style: none;
	padding: 0;
	margin: 1em 0;
}

.modal li {
	margin: 0.5em 0;
}

.modal button {
	margin-top: 1em;
	padding: 8px 12px;
	font-size: 1rem;
	background-color: #444;
	color: white;
	border: none;
	cursor: pointer;
}



@media (max-width: 1024px) {
    .wrapper {
        grid-template-columns: repeat(2, 1fr);
    }

    .map-text {
        font-size: 1.5rem;
    }
}

@media (max-width: 600px) {
    .wrapper {
        grid-template-columns: 1fr;
        overflow-y: auto;
        max-height: 90vh;
    }

    .map-text {
        font-size: 1.2rem;
        padding: 8px 16px;
    }
}
</style>
