<script lang="ts">
    import Map from "$lib/map.svelte";

    const landforms = [
        "Haanja kõrgustik",
        "Harju lavamaa",
        "Karula kõrgustik",
        "Kesk-Eesti tasandik",
        "Lääne-Eesti madalik",
        "Otepää kõrgustik",
        "Pandivere kõrgustik",
        "Peipsi madalik",
        "Pärnu madalik",
        "Sakala kõrgustik",
        "Ugandi lavamaa",
        "Vooremaa",
        "Võrtsjärve madalik",
    ];
</script>

<Map path="maastikud" names={landforms} />
