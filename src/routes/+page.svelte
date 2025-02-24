<script>
    import { base } from "$app/paths";
</script>

<div class="wrapper">
    <a href="{base}/maps/veekogud" class="map-item">
        <img class="mapselect" src="{base}/maps/veekogud/Kaart.png" alt="Veekogud">
        <span class="map-text">Veekogud</span>
    </a>
    <a href="{base}/maps/maastikud" class="map-item">
        <img class="mapselect" src="{base}/maps/maastikud/Kaart.png" alt="Maastikud">
        <span class="map-text">Maastikud</span>
    </a>
    <a href="{base}/maps/saared" class="map-item">
        <img class="mapselect" src="{base}/maps/saared/Kaart.png" alt="Saared">
        <span class="map-text">Saared</span>
    </a>
</div>

<style>
:global(body) {
    margin: 0;
    padding: 0;
    overflow: hidden;
}

.wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 10px;
    padding: 20px;
    min-height: 100vh;
    overflow-y: auto;
    align-content: center;
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
    font-size: 3em;
    font-weight: bold;
    color: white;
    background: rgba(0, 0, 0, 0.5);
    padding: 10px 20px;
    border-radius: 5px;
    text-transform: uppercase;
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
