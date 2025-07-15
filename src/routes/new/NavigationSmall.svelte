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

  let menuVisible = false;

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

  function handleMenuButton() {
    menuVisible = !menuVisible;

    if (document.activeElement instanceof HTMLElement)
      document.activeElement.blur();

    handleScroll();
  }
</script>
<svelte:window
  on:hashchange={() => hashChanged = true}
  on:scroll={handleScroll}
  bind:scrollY={scrollY}
/>

<MediaQuery {query} bind:matches>
  {#if matches}
    <div class="outer-menu" class:menuVisible class:shrunk>
      <div class="menu-shape">

        <div class="menu-container-bg">

          <div class="bar-placeholder">
            <nav class="bar">
              <button class="icon" on:click={handleMenuButton}>
                <svg viewBox="0 0 24 24" class="opened">
                  <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
                </svg>
                <svg viewBox="0 0 24 24" class="closed">
                  <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                </svg>
              </button>
              <a href="#" class="title bar-element">
                <span>{title}</span>
              </a>
            </nav>
          </div>

          <nav class="menu">
            {#each Object.keys(page_list) as page}
              <div class="bar-element">
                <button>
                  <a href={prefix + "/" + page}>{page_list[page]}</a>
                  <svg viewBox="0 -3 24 24" class="dropdown">
                    <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L12,13.41L19,6.41Z" />
                  </svg>
                </button>
              </div>
            {/each}
          </nav>
        </div>
      </div>
    </div>
  {/if}
</MediaQuery>

<style>
  .outer-menu {
    position: fixed;
    top: 0;
    left: 0;
  }

  .menu-shape {
    position: absolute;
    width: 100vw;
    height: 5em;

    background: linear-gradient(135deg, #e66465, #9198e5);
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    overflow: hidden;

    transition: all 0.3s;
  }
  .outer-menu.shrunk:not(.menuVisible) .menu-shape {
    height: 3.4em;
  }
  .outer-menu.menuVisible .menu-shape {
    background: linear-gradient(110deg, #e66465, #9198e5);
    height: 100vh;
  }

  .menu-container-bg {
    height: 100vh;
    width: 100wh;
    background: linear-gradient(110deg, #e66465, #9198e5);
    text-align: center;
  }

  .bar-placeholder {
    height: 8em;
  }

  nav.bar {
    width: 100%;
    height: 5em;

    transition: height 0.3s;
    overflow-y: hidden;

    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
  }
  .outer-menu.shrunk:not(.menuVisible) nav.bar {
    height: 3.4em;
  }
  .outer-menu.menuVisible nav.bar {
    height: 8em;
  }

  nav.bar .icon {
    height: 100%;
    aspect-ratio: 1 / 1;

    position: relative;

    border: none;
    background: transparent;
  }
  nav.bar .icon svg {
    height: 60%;
    aspect-ratio: 1 / 1;

    position: absolute;
    top: 50%;
    left: 50%;

    transition: all 0.5s cubic-bezier(.22,.94,.54,1.07);
    transform: translate(-50%, -50%);
  }
  .outer-menu.menuVisible nav.bar .icon svg.opened {
    transform: translate(-50%, -50%) scale(0);
  }
  .outer-menu:not(.menuVisible) nav.bar .icon svg.closed {
    transform: translate(-50%, -50%) scale(0);
  }

  nav.bar a.title {
    position: relative;
    height: calc(100% - 2em);
    padding: 1em;

    display: flex;
    justify-items: center;
    align-items: center;

    background: transparent;

    color: black;
    text-decoration: none;
  }
  nav a.title span {
    font-size: 2.4em;
    font-style: italic;

    transition: font-size 0.3s;
  }
  .outer-menu.shrunk:not(.menuVisible) a.title span {
    font-size: 2em;
  }
  .outer-menu.menuVisible a.title span {
    font-size: 3em;
  }

  nav.menu {
    width: calc(100% - 2em);
    min-height: calc(100vh - 6em);
    padding: 0 1em;

    display: flex;
    flex-direction: column;
    justify-content: start;
  }

  nav.menu .bar-element {
    position: relative;

    display: flex;
    justify-items: center;
    align-items: center;
  }
  nav.menu .bar-element:nth-child(2n+1) {
    background: rgba(255,255,255,0.2);
  }
  nav.menu .bar-element:nth-child(2n) {
    background: rgba(255,255,255,0.1);
  }

  nav.menu .bar-element svg.dropdown {
    height: 2em;
    padding-right: 0.2em;
  }
  nav.menu .bar-element button {
    width: 100%;
    height: 100%;
    padding: 0.8em;

    font-size: 2em;
    background-color: transparent;
    border: none;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  nav.menu .bar-element button a {
    padding: 0.2em;
    color: black;
    text-decoration: none;
  }
</style>
