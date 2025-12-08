<script lang="ts">
  import Blockon from "$lib/blockons/Blockon.svelte";
</script>

<Blockon id="de">
    <div class="container">
        <img class="flag" src="/images/flag_de.png" />
        <a href="/de">Seite auf Deutsch anzeigen</a>
    </div>
</Blockon>

<style>
.flag {
    height: 2em;
    margin: 0.8em;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
