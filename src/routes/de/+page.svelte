<script lang="ts">
  import TableContents from "$lib/blockons_de/TableContents.svelte";
  import WebDev from "$lib/blockons_de/WebDev.svelte";
  import Bits from "$lib/blockons_de/Bits.svelte";
  import Python from "$lib/blockons_de/Python.svelte";
  import Workflow from "$lib/blockons_de/Workflow.svelte";
  import Milky from "$lib/blockons_de/Milky.svelte";
  import LowLevel from "$lib/blockons_de/LowLevel.svelte";
  import Self from "$lib/blockons_de/Self.svelte";
  import Fr from "$lib/blockons_de/Fr.svelte";

  import Blockon from "$lib/blockons/Blockon.svelte"
</script>

<div class="page">
  <div class="main">
    <Fr />
    <TableContents />
    <Self />
    <Bits />
    <LowLevel />
    <WebDev />
    <Workflow />
    <Python />
    <Milky />
  </div>

  <div class="footer">
    <p>
      Danke, dass sie bis hierher gelesen haben!
    </p>

    <p>
      Sie können auch mein <a href="https://github.com/lapingenieur">GitHub</a> ansehen
      oder mich per E-Mail kontaktieren: <a href="mailto:lapingenieur@gmail.com">lapingenieur@gmail.com</a>.
    </p>

    <p>
      Diese Webseit wurde dank <a href="https://pages.github.com/">GitHub Pages</a> gehostet
      und ihre Code befindet sich in <a href="https://github.com/lapingenieur/lapingenieur.github.io">diesem Repository</a>.
      <br />

      Candidat Parcoursup n°500 506 — lapingenieur — Avril 2023.
    </p>
  </div>
</div>

<style>
  .page {
    width: 100%;
    display: flex;

    flex-direction: column;
    align-items: center;
  }

  .main {
    width: 100%;
    max-width: 64rem;
    padding: 1em 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1em;
  }

  .footer {
    align-self: stretch;
    background-color: #3a383e;
    padding: 1em;

    box-shadow: 0 0 10px rgba(0,0,0,0.5);

    color: #9e9aa2;
  }
  .footer a {
    color: #9e9aa2;
    text-decoration: underline;
  }
  .footer p{
    text-align: center;
  }

  @media screen and (min-width: 550px) {
    .main {
      margin: 0 1em;
      width: calc(100% - 2em);

      gap: 2em;
    }
  }
</style>
