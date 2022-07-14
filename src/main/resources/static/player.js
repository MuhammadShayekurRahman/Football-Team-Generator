"use strict";
document.querySelector("body > form").addEventListener("submit", function(event){
    event.preventDefault();
    
    console.log("This:", this);

    const data = {
        firstName: this.firstName.value,
        surname: this.surname.value,
        position: this.position.value,
        shirtNumber: this.shirtNumber.value,
        teamName: this.teamName.value
    }

    console.log("data:", data);

    axios.post("http://localhost:8080/createPlayer", data)
        .then(response => {
            console.log("Res:", response)
            this.reset();
            this.firstName.focus();
            //renderCars();
        })
        .catch(error => console.error(error))
})