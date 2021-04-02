var Clara = {
    name: "Clara",
    victories: 2,
    breakeven: 5,
    overthrow: 2,
    points: 0

}

var Lissa = {
    name: "Lissa",
    victories: 4,
    breakeven: 5,
    overthrow: 1,
    points: 0

}

Lissa.points = pointsCalculates(Lissa)
Clara.points = pointsCalculates(Clara)


function pointsCalculates(gamer) {
    var points = (gamer.victories * 3) + gamer.breakeven
    return points
}

var gamers = [Clara, Lissa]
displayGamers(gamers)

function displayGamers(gamers){
    var html = ""
    for (var i=0; i < gamers.length; i++){
        html += "<tr><td>" + gamers[i].name + "</td>"
        html += "<td>" + gamers[i].victories + "</td>"
        html += "<td>" + gamers[i].breakeven + "</td>"
        html += "<td>" + gamers[i].overthrow + "</td>"
        html += "<td>" + gamers[i].points + "</td>" 
        html += "<td><button onClick='addVictory(" + i +  ")'>Vitória</button></td>"
        html += "<td><button onClick='addBreakeven(" + i +  ")'>Empate</button></td>"
        html += "<td><button onClick='addOverthrow(" + i +  ")'>Derrota</button></td></tr>"
      }
      
      var gamersTable = document.getElementById("gamersTable")
      gamersTable.innerHTML = html
    }

    function addVictory(i) {
        var gamer = gamers[i]
        gamer.victories++
        gamer.points = pointsCalculates(gamer)
        displayGamers(gamers)
    }


    function addBreakeven(i) {
        var gamer = gamers[i]
        gamer.breakeven++
        gamer.points = pointsCalculates(gamer)
        displayGamers(gamers)
    }


    function addOverthrow(i) {
        var gamer = gamers[i]
        gamer.overthrow++
        gamer.points = pointsCalculates(gamer)
        displayGamers(gamers)
    }
    
    
