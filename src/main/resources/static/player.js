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
            renderPlayers();
        })
        .catch(error => console.error(error))
})

function renderPlayers(){
    axios.get("http://localhost:8080/getPlayers")
        .then(response => {
            console.log(response);

            output.innerHTML="";

            for(let player of response.data){
                const playerEntry = document.createElement("p");
                playerEntry.innerText = "Player = Firstname: [" + player.firstName + "] Surname: [" + player.surname + "] Position: [" + player.position + "]  Shirt Number: [" + player.shirtNumber + "] Team: [" +player.teamName + "]";
                output.appendChild(playerEntry);

                const playerDelete = document.createElement("button");
                playerDelete.innerText = "Delete";
                output.appendChild(playerDelete);
                playerDelete.addEventListener("click", () =>{
                    deletePlayer(player.id);
                })

            }

        })
        .catch(error => console.error(error))
}

const deletePlayer = (id) =>{
    axios.delete("http://localhost:8080/removePlayer/" + id)
        .then(response => {
            console.log("delete successful")
            renderPlayers();
        })
        .catch(error => console.error(error))
}

renderPlayers();