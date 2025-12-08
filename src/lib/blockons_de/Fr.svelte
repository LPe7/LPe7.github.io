<script lang="ts">
  import Blockon from "$lib/blockons/Blockon.svelte";
</script>

<Blockon id="fr">
    <div class="container">
        <img class="flag" src="/images/flag_fr.png" />
        <a href="../">Voir la page en français</a>
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
