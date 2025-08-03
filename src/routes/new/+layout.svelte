<script lang="ts">
  import NavigationLarge from "./NavigationLarge.svelte";
  import NavigationSmall from "./NavigationSmall.svelte";
  import ScrollUp from "./ScrollUp.svelte";
  
  let page_list_new = {
    "self": {
      name: "A propos",
      hashes: {}},
    "insa": "INSA",
  }
  let page_list = {
    "self": "A propos",
    "insa": "INSA",
  }

</script>

<NavigationLarge minScreenSize="1000px" prefix="new" {page_list}/>
<NavigationSmall maxScreenSize="1000px" prefix="new" {page_list}/>
<ScrollUp />

<main>
  <slot />
</main>

<style>
  main {
    padding-top: 5em;
  }
  main :global(*) {
    scroll-margin-top: 6em;
  }
</style>
