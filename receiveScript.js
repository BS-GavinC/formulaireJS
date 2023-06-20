let params = new URLSearchParams(window.location.search)


document.getElementById("nom").innerHTML = params.get("firstname") + " " + params.get("lastname")

document.getElementById("cp").innerHTML = params.get("postalCode")