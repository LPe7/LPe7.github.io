<script lang="ts">
  import Blockon from "./Blockon.svelte";
  import PlateAlways from "./PlateAlways.svelte";
  import Plate from "./Plate.svelte";
    import { empty } from "svelte/internal";
</script>

<Blockon id="self">
  <h1>Vorstellung</h1>

  <div class="plates">
    <PlateAlways
        imgsrc="/images/self.jpg"
        imgalt="Photo de moi"
        rightRatio="3"
        padding="1em"
      >
      <h1 class="title">Hallo!</h1>
      <p class="desc">
        Ich bin <span class="emphase">Elio POLETTI</span>,
        Student der <a class="emphase" href="https://www.insa-strasbourg.fr">INSA Strasbourg</a>.
      </p>
    </PlateAlways>

    <Plate
        imgsrc="/images/academic-hat.png"
        imgalt="Études postbac"
        minHeight="0"
        rightRatio="5"
        padding="1em"
      >
      <h2 class="title">Studium</h2>
      <p class="desc">
        Derzeit bin ich in dritten Studienjahr im Fachbereich <a class="emphase" href="https://www.insa-strasbourg.fr/fr/mecatronique/">Mechatronik</a>.
      </p>
      <p class="desc">
        Ich nehme an die <a class="emphase" href="https://www.insa-strasbourg.fr/fr/deutschinsa/">DeutschINSA Confirmé</a> Klasse teil.
      </p>
    </Plate>

    <Plate
        imgsrc="/images/lightbulb-c.jpg"
        imgalt="Dessin d'une ampoule brillant dans une tête"
        minHeight="0"
        rightRatio="5"
        padding="1em"
      >
      <h2 class="title">Fähigkeiten</h2>
      <p class="desc">
        <span class="emphase">Aufgeschlossenheit</span>:
        ich lerne gerne Neues, entdecke gerne neue Fachgebiete, neue Sichtweisen und neue Meinungen.
        Ich bemühe mich, die Sichtweisen anderer als gleichwertig mit meiner eigenen zu betrachten.

      </p>
      <p class="desc">
        <span class="emphase">Sprachen</span>: meine Muttersprachen sind Französisch und Ungarisch,
        ich habe Englischkenntnisse auf Niveau C1 und Deutschkenntnisse auf Niveau B2+.
        Ich habe durch den Gymnasium an der Euroenglisch Klasse teilgenommen und interessiere mich jetzt an die DeutschINSA Klasse.
      </p>
      <p class="desc">
        <span class="emphase">Informatik</span>: wie auf dieser Website dargestellt,
                verfüge ich über Kenntnisse in mehrere Bereichen der Informatik.
      </p>
      <p class="desc">
        <span class="emphase">Autodidakt</span>: alle meine Kenntnisse in Informatik und Linguistik habe
                ich autodidaktisch durch digitale oder bibliografische Recherchen gelernt.
      </p>
      <p class="desc">
        <span class="emphase">Ernshaft</span>
        Meine Ergebnisse, die Quantität und Qualität der Wahlfächer, die ich belegt habe,
        sowie meine derzeitige Bildungseinrichtung zeugen von meiner Ernsthaftigkeit bei der Arbeit und meiner Fleißigkeit.
      </p>
      <p class="desc">
        <span class="emphase">Perfektionnismus</span>: ich habe gelernt, meinen Perfektionismus zu nutzen,
        um mich voll und ganz für Projekte einzusetzen, die mir am Herzen liegen,
        ohne dabei die Möglichkeiten mit der Fantasie zu verwechseln.
        Diese Website, mit deren Ergebnis ich besonders zufrieden bin, ist ein Beispiel dafür.
      </p>
    </Plate>

    <Plate
        imgsrc="/images/logo-insa.jpg"
        imgalt="Logo INSA Strasbourg"
        minHeight="0"
        rightRatio="5"
        padding="1em"
      >
      <h2 class="title">Warum die INSA Strasburg?</h2>
      <p class="desc">
        Ich habe mich aus mehreren Gründen für die INSA Strasburg entschieden:
      </p>
      <p class="desc">
        Zunächst einmal finde ich es toll, neue theoretische Konzepte zu lernen, aber noch mehr Spaß macht es mir,
        diese anzuwenden und bei Projekten selbst Erfahrungen in <span class="emphase">technischen Disziplinen</span> zu sammeln,
        die in den französischen "Vorbereitungsklassen" nicht behandelt werden.
        Davon spricht zum Beispiel meine Note der technischer Zeichnung Prüfung:
        <span class="emphase">19,6/20</span> mit einem Jahrgangdurchschnitt von 7,6/20.
      </p>
      <p class="desc">
        Außerdem bietet diese Hochschule den <span class="emphase">Studiengang Mechatronik</span>,
        der verschiedene Bereiche des Ingenieurwesens miteinander verbindet, und den ich studieren wünschte.
      </p>
      <p class="desc">
        Die Hochschule bietet mir außerdem die Möglichkeit, durch die <span class="emphase">DeutschINSA Klasse</span>,
        einen zweisprachigen deutsch-französischen Studiengang zu belegen
        und mich so auf eine Karriere in der Industrie auf beiden Seiten des Rheins vorzubereiten.
      </p>
    </Plate>

    <Plate
        imgsrc="/images/logo-mauriac.png"
        imgalt="Études prébac"
        minHeight="0"
        rightRatio="5"
        padding="1em"
      >
      <h2 class="title">Gymnasium und Abitur</h2>
      <p class="desc">
        Ich habe mein Abitur im Gymnasium <a href="https://mauriac-desgranges.ent.auvergnerhonealpes.fr">Mauriac</a>
        (Andrézieux-Bouthéon, Frankreich) absolviert:
      </p>
      <ul class="desc">
        <li>Enddurchschnitt von <span class="emphase">17,76/20</span></li>
        <li>Fachfächer <span class="emphase">Mathematik</span>, <span class="emphase">Physik-Chemie</span> und <span class="emphase">Informatik</span> <i>(NSI)</i></li>
        <li>Wahlfächer <span class="emphase">Euroenglisch Klasse</span> und <span class="emphase">fortgeschrittene Mathe</span></li>
        <li>Auszeichnungen <span class="emphase">sehr gut</span> und <span class="emphase">Euro Klasse</span> <i>(Englisch)</i></li>
      </ul>
      <p class="desc">
        Ich habe auch <span class="emphase">Latein-</span> und <span class="emphase">Altgriechischunterricht</span> besuchen bis zur elften Klasse <i>(première)</i>.
      </p>
    </Plate>

    <Plate
        imgsrc="/images/academic-hat.png"
        imgalt="Coiffe académique"
        minHeight="0"
        rightRatio="5"
        padding="1em"
      >
      <h2 class="title">Engagement</h2>
      <p class="desc">
        Derzeit bin ich <span class="emphase">Schutzmeister</span> der Banda Fanfare EL INSA Banda meiner Hochschule.
        Ich bin auch <span class="emphase">Kassenwart</span> der Ultimate Sportbegegnung Hopla 2025, und
        <span class="emphase">Klassensprecher</span> meiner Klasse.
      </p>
      <p class="desc">
        Im Gymnasium war ich berits <span class="emphase">Mitglied des Rates der Schulleben</span> und
        3 Jahre lang <span class="emphase">Sekretar</span> der Schülervereinigung.
        Ich bien Mitorganisator der <span class="emphase">Jahrendfeier</span> und der
        <span class="emphase">Schulzeitung</span>.
      </p>
      <p class="desc">
        Auf persönlicher Ebene habe ich einige Detailänderungen an einigen Informatikprojekte vorgenommen.
      </p>
    </Plate>

    <Plate
        imgsrc="/images/puzzle-b.png"
        imgalt="Pièces de puzzle assemblées"
        minHeight="0"
        rightRatio="5"
        padding="1em"
      >
      <h2 class="title">Interessen</h2>
      <p class="desc">
        Ich habe viele Bereiche der <span class="emphase">Informatik</span> entdeckt, wie Programmierung,
        und die grundlegende Funktionsweise von physischen Systemen und Software,
        wofür die Website, die Sie gerade besuchen, ein perfektes Beispiel ist.
        All dieses Wissen habe ich mir <span class="emphase">autodidaktisch</span> angeeignet, insbesondere während des ersten Lockdowns.
      </p>
      <p class="desc">
        Die <span class="emphase">Sprachwissenschaft</span> trage ich auch in meinem Herzen:
        außer meine Mehrsprachigkeit gefällt mir die Sprachenstudium, ihre Funktionsweise, ihre Unterschiede
        und Lösungen, die sie finden, um deselben Begriff auszudrücken.
        Ich bin auch selbst Amateur Kunstsprachwissenschaftler.
      </p>
      <p class="desc">
        Die theoretische Wissenschaften faszinieren mir auch,
        obwohl ich weder über die erforderlichen Fähigkeiten noch über das erforderliche Wissen verfüge, um sie zu untersuchen und zu bearbeiten.
      </p>
      <p class="desc">
        Zuletzt habe ich 12 Jahre lang <span class="emphase">Musikunterricht</span> in der Perkussionsklasse am Konservatorium genommen,
        und treibe Ultimate seit 9 Jahre.
      </p>
    </Plate>
  </div>
</Blockon>

<style>
  .plates {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
</style>
