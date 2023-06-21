
let user = JSON.parse(localStorage.getItem("user"))  ?? null
if(user){
    document.getElementById("infos").innerHTML = `${user.nom} ${user.prenom}`
    document.getElementById("register").hidden = true
}
else{
    document.getElementById("disconnect").hidden = true
}


let add = () => {

    let newUser = {
        nom : formz.nom.value,
        prenom : formz.prenom.value    
    }

    localStorage.setItem("user", JSON.stringify(newUser) )

    window.location.href = 'index.html'

    document.getElementById("disconnect").hidden = false
    document.getElementById("register").hidden = true
    
}

let disco = () => {
    localStorage.clear()
    window.location.href = 'index.html'
    document.getElementById("disconnect").hidden = true
    document.getElementById("register").hidden = false
}

