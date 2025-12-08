<script lang="ts">
  import Blockon from "./Blockon.svelte";
</script>

<Blockon id="sommaire">
  <h1>Wilkommen!</h1>

  <p>
    Wilkommen bei <span class="emphase">LPe7.github.io</span>&nbsp;!
  </p>
  <p>
    Diese Webseite, desen französische Version ich wärend der <span class="emphase">Parcoursup-Kampagne 2023</span> geschrieben habe,
    stellt die verschiedene Bereiche der Informatik vor, mit denen ich einmal zusammengearbeitet habe.
    <br />
    Der Quellcode der beschriebenen Programme befindet sich entweder auf dieser Webseite oder auf meinem
    <a href="https://github.com/LPe7">GitHub</a>.
  </p>
  <p>
    Viel Spaß beim Lesen!
  </p>

  <ul>
    <li><a href="#self">Vorstellung</a></li>
    <li><a href="#webdev">Webentwicklung</a></li>
    <li><a href="#bits">Entwicklung eines 8-Bit Computer</a></li>
    <li><a href="#lowlevel">Low-Level Programmierung</a></li>
    <li><a href="#workflow">Linux, Neovim, Shell Skripten und Arbeitsumgebung</a></li>
    <li><a href="#python">Python Skripten</a></li>
    <li><a href="#milky">Chiptune (MilkyTracker)</a></li>
  </ul>
</Blockon>

<style>
  ul {
    padding: 0 1.5em;
  }
  li::marker {
    color: transparent;
  }

  ul a {
    display: block;
    width: 100%;
    padding: 0.3em 0;

    text-decoration: none;
    font-size: 1.5em;

    text-align: left;
  }

  a:visited:not(:hover) {
    color: #535ed6;
  }
</style>
