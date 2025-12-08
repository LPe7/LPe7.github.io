<script lang="ts">
  import Blockon from "$lib/blockons/Blockon.svelte";
</script>

<Blockon id="bits">
  <h1>Entwicklung eines 8-Bit Computer</h1>
  <p>
    Was gibt es Besseres, um die Funktionsweise eines Computers zu verstehen, als selbst einen zu bauen, und zwar aus dem Nichts?
    Mit Hilfe der verschiedenen Arbeiten von <a href="https://eater.net">Ben Eeater</a>
    habe ich einen 8-Bit-Computer aus grundlegenden elektronischen Bauteilen theoretisiert, entwickelt und simuliert.
    Um die Darstellung zu vereinfachen, sind diese zu Modulen zusammengefasst (siehe unten).
  </p>

  <div class="bits-img-1">
    <img src="/8bits/screenshot1.png" alt="Capture de l'émulation dans Logisim-Evolution"/>
  </div>

  <p>
    Ich habe es zuerst im Software <a href="https://github.com/logisim-evolution/logisim-evolution">Logisim-Evolution</a>
    zur Hand programmiert. Dann habe ich eine spezifische Assemblersprache und ihr Compiler erstellt,
    deren Erklärungen in den aufgeführten Dateien zu finden sind.
  </p>

  <p id="bits-asm">
    Ich habe mich von der Assemblersprache des <a href="https://www.masswerk.at/6502/6502_instruction_set.html">6502-Prozessors</a>
    inspirieren lassen, um das Schreiben von Programmen für meinen emulierten Computer zu vereinfachen
    Ich habe auch einen funktionsfähigen Compiler in Python geschrieben, um die Skripte in Befehle zu übersetzen
    Hier sind die entsprechenden Programme, die die Zahlen (unter 255) der Fibonacci-Folge in Python in X800-Assembler berechnen und anzeigen
  </p>

  <div class="bits-table-around">
    <div class="bits-table">
      <div class="code-title">Python</div>
      <div class="code-title">Assembly X800</div>

      <div class="code-area">
        <pre><code class="block-code"><span class="hl-gray1">#!/bin/env python</span>

<span class="hl-red">while</span> <span class="hl-orange">True</span>:
  x<span class="hl-red">=</span><span class="hl-blue">0</span>
  y<span class="hl-red">=</span><span class="hl-blue">1</span>
  <span class="hl-red">while</span> <span class="hl-orange">True</span>:
    <span class="hl-green">print</span>(x)
    z<span class="hl-red">=</span>x<span class="hl-red">+</span>y
    x<span class="hl-red">=</span>y
    y<span class="hl-red">=</span>z
    <span class="hl-red">if</span> x<span class="hl-red">&gt;</span><span class="hl-blue">255</span>:
      <span class="hl-red">break</span></code></pre>
      </div>

      <div class="code-area">
        <pre><code class="clock-code"><span class="hl-gray1">;<span class="hl-purple">!LP</span> x800</span>

<span class="hl-gray1">;<span class="hl-purple">!sec beg</span> fibonacci</span>
<span class="hl-green">orig:</span>
<span class="hl-red">lia</span> <span class="hl-blue">1</span>
<span class="hl-red">sta</span> <span class="hl-blue">.valuey</span><span class="hl-gray1 italic"> ; y</span>
<span class="hl-red">lia</span> <span class="hl-blue">0</span>
<span class="hl-red">sta</span> <span class="hl-blue">.valuex</span><span class="hl-gray1 italic"> ; x</span>
<span class="hl-green">loop:</span>
<span class="hl-red">ldb</span> <span class="hl-blue">.valuey</span><span class="hl-gray1 italic"> ; z=x+y</span>
<span class="hl-red">add</span>
<span class="hl-red">brc</span> <span class="hl-blue">.orig</span>
<span class="hl-red">sta</span> <span class="hl-blue">.valuez</span>
<span class="hl-red">lda</span> <span class="hl-blue">.valuey</span><span class="hl-gray1 italic"> ; x=y</span>
<span class="hl-red">sta</span> <span class="hl-blue">.valuex</span>
<span class="hl-red">lda</span> <span class="hl-blue">.valuez</span><span class="hl-gray1 italic"> ; y=z</span>
<span class="hl-red">sta</span> <span class="hl-blue">.valuey</span>
<span class="hl-red">lda</span> <span class="hl-blue">.valuex</span>
<span class="hl-red">jmp</span> <span class="hl-blue">.loop</span>
<span class="hl-green">valuex:</span><span class="hl-gray1 italic"> ; espace variable x</span>
<span class="hl-orange">.word</span> <span class="hl-blue">00</span>
<span class="hl-green">valuey:</span><span class="hl-gray1 italic"> ; espace variable y</span>
<span class="hl-orange">.word</span> <span class="hl-blue">00</span>
<span class="hl-green">valuez:</span><span class="hl-gray1 italic"> ; espace variable y</span>
<span class="hl-gray1">;<span class="hl-purple">!sec end</span> fibonacci</span></code></pre>
      </div>
    </div>
  </div>

  <p>
    Ein Video der Zusammenstellung und Ausführung dieses Codes finden Sie unter
    <a href="/8bits/compile_then_fibonacci.mp4">dieser Adresse</a>.
  </p>
</Blockon>

<style>
  .bits-img-1 {
    max-width: 100%;
    max-height: 100%;

    display: flex;
    justify-content: center;
  }
  .bits-img-1 img {
    max-height: 20em;
    max-width: 100%;
  }

  .bits-table-around {
    display: flex;
    width: 100%;
    /* justify-content: center; */
    align-content: center;
    overflow-x: auto;
    padding: 3px
  }
  .bits-table-around::before,
  .bits-table-around::after {
    content: "";
    margin: auto;
  }
  .bits-table {
    display: grid;
    width: min(100%, 40em);
    min-width: 35em;

    grid-template: auto auto / 1fr 1fr;
    gap: 3px;
  }

  .bits-table > * {
    padding: 0.5em 0.7em;
    box-shadow: 0 0 0 3px var(--hl-black);
  }
  .bits-table .code-title {
    background-color: #f1f4f5;
  }
  .bits-table .code-area {
    background-color: var(--hl-bg1);
  }
  .bits-table .code-area code {
    font-size: 1rem;
  }
  .code-area pre {
    margin: 0;
  }
</style>
