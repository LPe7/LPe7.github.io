<script lang="ts">
    let date = new Date()

    let days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]
    let months = ["Janvier", "Février"]

    let dateDebut = new Date("2026-01-27")
    let dateFin = new Date("2026-01-30 17:30")
    let schedules = [ [8.5, 11.5], [13, 17.5] ]

    let currentTime = date.getHours() + date.getMinutes() / 60

    function plural(text: string, value: number) {
        return value + " " + text + (value > 1 ? 's' : '')
    }

    function pad(value: number) {
        return (value < 10 ? "0" : "") + value
    }

    function min2h(min: number) {
        let heures = Math.round(min / 60)
        let minutes = Math.round(min % 60)
        return plural("heure", heures) + " et " + plural("minute", minutes) 
    }

    let status = ""

    if (date >= dateFin) {
        status = ""
    } else if (currentTime <= schedules[0][0]) {
        status = "C'est le matin, "
        if (currentTime >= schedules[0][0] - 0.5) {
            let reste = (schedules[0][0] - currentTime)*60
            status += " nous sommes en cours dans " + min2h(reste) + "..."
        } else {
            status += " nous ne sommes pas encore en cours !!!"
        }

    } else if (schedules[0][0] <= currentTime && currentTime <= schedules[0][1]) {
        status = "C'est le matin. Nous sommes en cours"
        let reste = min2h( (schedules[0][1] - currentTime)*60 )

        if (currentTime >= schedules[0][1] - 0.5) {
            status += ", et il ne reste plus que " + reste + " !"
        } else {
            let depuis = min2h( (currentTime - schedules[0][0])*60 )
            status += " depuis déjà " + depuis + ". Il reste encore " + reste + "..."
        }

    } else if (schedules[0][1] <= currentTime && currentTime <= schedules[1][0]) {
        status = "C'est la pause de midi !"
        if (currentTime >= schedules[0][1] - 0.5) {
            let reste = (schedules[1][0] - currentTime)*60
            status += " mais il ne reste plus que " + min2h(reste) + "..."
        } else {
            status += "!!"
        }

    } else if (schedules[1][0] <= currentTime && currentTime <= schedules[1][1]) {
        status = "C'est l'aprem. Nous sommes en cours"
        let reste = min2h( (schedules[1][1] - currentTime)*60 )

        if (currentTime >= schedules[1][1] - 0.5) {
            status += ", et il ne reste plus que " + reste + " !"
        } else {
            let depuis = min2h( (currentTime - schedules[1][0])*60 )
            status += " depuis déjà " + depuis + ". Il reste encore " + reste + "..."
        }

    } else if (currentTime <= schedules[0][0]) {
        status = "C'est l'aprem, et nous ne sommes plus en cours !!!"
    }

    let dates = ""

    if (date >= dateFin) {
        dates = "On a fini le dernier cours !!! Youpi !"
    } else {
        let jours = new Date(dateFin - date).getDate() - 1
        dates = "Il ne reste plus que " + plural("jour", jours) + " ! Courage 💪"
    }

    function random(items: any[]) {
        return items[Math.floor(Math.random()*items.length)]
    }

    let colors = "bcdef".split("")
    let color = "#"
    for (let i=0; i<3; i++) {
        color += random(colors)
    }
</script>

<div id="container">
    <div id="contents" style="background-color: {color};">
        <h1>Développement collaboratif</h1>

        <p>
            Nous sommes le {days[date.getDay()]} {date.getDate()} {months[date.getMonth()]}.
            <br />
            Il est {pad(date.getHours())}h{pad(date.getMinutes())} et {date.getSeconds()} secondes.
        </p>

        <p>{status}</p>
        <p>{dates}</p>
    </div>
</div>

<style>
#container {
  display: flex;
  height: 100%;

  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#contents {
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  padding: 4em;

  font-family: "Source Sans Pro", sans-serif;
}

@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  src: local(''),
       url('/fonts/source-sans-pro/source-sans-pro-v18-latin_cyrillic-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/source-sans-pro/source-sans-pro-v18-latin_cyrillic-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  font-display: swap;
}
</style>
