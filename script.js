let autoComplete = () => {
    formulaire.lastname.value = "Dupont";
    formulaire.firstname.value = "Jean";
}

let reset = () => {
    formulaire.reset()
}

let valider = () => {
    if (!formulaire.firstname.value) {
        alert("prenom invalide !")
    }
    else if(!formulaire.lastname.value){
        alert("nom de famille invalide !")
    }
    else if(!(formulaire.postalCode.value > 1000 && formulaire.postalCode.value < 9999)){
        alert("Code postal invalide !")
    }
    else{
        alert("Formulaire validé !")
    }
}