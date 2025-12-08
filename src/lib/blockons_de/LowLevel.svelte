<script lang="ts">
  import Blockon from "$lib/blockons/Blockon.svelte";
</script>

<Blockon id="lowlevel">
  <h1>
        Low-Level programmierung
  </h1>

  <p>
    Ein weiterer Bereich der Informatik, der mir gefällt, ist die eher low-level Programmierung:
    Ich habe Kenntnisse in der Programmiersprache <a href="https://fr.wikipedia.org/wiki/C_(langage)">C</a>
    und in den moderneren Sprachen <a href="https://rust-lang.org/">Rust</a>,
    <a href="https://go.dev">Go</a> und <a href="https://vlang.io">V</a>.
    Einige meiner Projekte:
  </p>

  <ul>
    <li>
      <a href="https://fr.wikipedia.org/wiki/Windows_Subsystem_for_Linux">WSL2</a>
      ist in einem virtuellen Subnetz isoliert und kann vom lokalen Netzwerk aus nicht aufgerufen werden.
      <a class="emphase" href="https://github.com/lapingenieur/yfiles/blob/main/sshtpt.v">sshtpt</a>,
      geschrieben in der Sprache V, richtet eine umgekehrte 
      <a href="https://doc.ubuntu-fr.org/tutoriel/reverse_ssh">umgekehrte</a>
      <a href="https://fr.wikipedia.org/wiki/Secure_Shell">SSH</a>
      ein, die einen lokalen Port (WSL) mit dem entsprechenden Port im lokalen Netzwerk (Windows) verbindet.
      Es erstellt Prozesse direkt mit den Unix-Systemschnittstellen von glibc und läuft daher nicht unter Windows.
    </li>

    <li>
      <span class="emphase">Yirena</span> war mein erst Studienjahr Programmierungsprojekt.
      Das Ziel besteht darin, den <a href="https://tikz.dev/">Tikz-Code</a>
      zu generieren, mit dem das adaptive
      <a href="https://fr.wikipedia.org/wiki/Organigramme_de_programmation">Flussdiagramm</a>
      angezeigt werden kann, das den in der Eingabe angegebenen Algorithmus beschreibt, der wiederum einer Syntax folgt,
      die der Sprache <a href="https://fr.wikipedia.org/wiki/Pascal_(langage)">Pascal</a> ähnelt.
    </li>

    <li>
      <a class="emphase" href="https://github.com/lapingenieur/yfiles/tree/main/rsmpeg">Rsmpeg</a>
      ist eine schlanke grafische Benutzeroberfläche für die Software
      <a href="https://ffmpeg.org/">FFmpeg</a>
      in der Programmiersprache Rust, mit der Bibliothek <a href="https://github.com/emilk/egui">egui</a>.
    </li>
  </ul>

  <p>
    Ich bin auch Initiator der französischen Seite
    „<a href="https://fr.wikipedia.org/wiki/Types_de_donn%C3%A9e_du_langage_C">types de données du langage C</a>“
    (Datentypen der Sprache C) auf Wikipedia.
  </p>
</Blockon>

<style>
  ul > li:not(:last-child) {
    margin-bottom: 1em;
  }
</style>
