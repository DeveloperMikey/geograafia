<script lang="ts">
    import Map from "$lib/map.svelte";

    const waters = [
        "Ahja jõgi",
        "Elva jõgi",
        "Endla järv",
        "Erimistu järv",
        "Halliste jõgi",
        "Jägala jõgi",
        "Kahala järv",
        "Karujärv",
        "Kassari jõgi",
        "Keila jõgi",
        "Koosa järv",
        "Kunda jõgi",
        "Kuremaa järv",
        "Mullutu Suurlaht",
        "Narva jõgi",
        "Narva veehoidla",
        "Navesti jõgi",
        "Paunküla veehoidla",
        "Pedja jõgi",
        "Peipsi järv",
        "Pirita jõgi",
        "Piusa jõgi",
        "Purtse jõgi",
        "Pärnu jõgi",
        "Põltsamaa jõgi",
        "Pühajärv",
        "Raudna jõgi",
        "Saadjärv",
        "Sauga jõgi",
        "Sutlepa meri",
        "Suur Emajõgi",
        "Tamula järv",
        "Tõhela järv",
        "Vagula järv",
        "Valgejõgi",
        "Veisjärv",
        "Vigala jõgi",
        "Väike-Emajõgi",
        "Võhandu jõgi",
        "Võrtsjärv",
        "Õhne jõgi",
        "Ülemiste järv",
    ];
</script>

<Map path="veekogud" names={waters} />
