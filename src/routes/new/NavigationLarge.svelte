<script lang="ts">
  import MediaQuery from 'svelte-media-queries'

  /// === begining of configuration

  export let title: string = "lp06b"; // name of the subsite
  export let prefix: string = "";     // potential url to the root of that subsite
  export let page_list: Record<string, string>; // list of the links (relative_url_without_prefix: name_to_be_shown)

  export let scrollOffset = 60; // how much you need to scroll before reevaluating the button's state (unit: in px)
  export let minScreenSize = "0"; // min and max: screen size range to show this navigation bar (ex: "1280px")
  export let maxScreenSize = "0"; //   `-> when set to 0: no min/max size

  /// === end of configuration

  let shrunk = false; // shrink or grow the bar when we're scrolling
  let scrollY: number;

  let hashChanged = false;
  let lastChange = 0;

  let matches: any;
  let query = ""; // just a hacky-way
  if (minScreenSize != "0") query += "(min-width: " + minScreenSize + ")";
  if (minScreenSize != "0" && maxScreenSize != "0") query += " and ";
  if (maxScreenSize != "0") query += "(max-width: " + maxScreenSize + ")";

  function handleScroll() {
    // shrink or grow the navbar wether scrolled up or down or at the top of the page

    setTimeout(() => {
        if (scrollY <= scrollOffset) {
          // at top
          shrunk = false;
          lastChange = scrollY;
        } else {
          if (hashChanged) {
            // hashchanged
            shrunk = false;
            lastChange = scrollY;
          } else if (lastChange - scrollY - scrollOffset > 0) {
            // scrolled up
            shrunk = false;
            lastChange = scrollY;
          } else if (scrollY - lastChange - scrollOffset > 0) {
            // scrolled down
            shrunk = true;
            lastChange = scrollY;
          }
        }
        hashChanged = false;
      }, 50); // lil' hack so hashchange is correctly set

  }
</script>
<svelte:window
  on:hashchange={() => hashChanged = true}
  on:scroll={handleScroll}
  bind:scrollY={scrollY}
/>

<MediaQuery {query} bind:matches>
  {#if matches}
    <nav class="bar" class:shrunk>
      <a href="#" class="title bar-element">
        <span>{title}</span>
      </a>
      {#each Object.keys(page_list) as page}
        <a href={prefix + "/" + page} class="bar-element">
          {page_list[page]}
        </a>
      {/each}
    </nav>
  {/if}
</MediaQuery>

<style>
  nav.bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 5em;

    background: linear-gradient(45deg, #e66465, #9198e5);
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    transition: height 0.3s;
    overflow-y: hidden;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  nav.bar.shrunk:not(:hover) {
    height: 3.4em;
  }

  nav.bar a.bar-element {
    position: relative;
    height: calc(100% - 2em);
    padding: 1em;

    display: flex;
    justify-items: center;
    align-items: center;

    font-size: 1.3em;
    background: transparent;

    color: black;
    text-decoration: none;
    transition: color 0.2s;
  }
  nav.bar a.bar-element:hover {
    color: #403838;
  }

  nav.bar a.title span {
    font-size: 2.4em;
    font-style: italic;
    transition: font-size 0.3s, color 0.2s;
  }
  nav.bar.shrunk:not(:hover) a.title span {
    font-size: 2em;
  }
</style>
