"use strict";
const output = document.querySelector("div#output");
document.querySelector(".create-player-form").addEventListener("submit", function(event){
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
                const playerCol = document.createElement("div");
                playerCol.className = "col-3 m-2";

                const playerCard = document.createElement("div");
                playerCard.className = "card text-white bg-dark mb-3";
                playerCol.appendChild(playerCard);

                const playerPosition = document.createElement("div");
                playerPosition.className = "card-header";
                playerPosition.innerText = player.position;
                playerCard.appendChild(playerPosition);

                const playerDiv = document.createElement("div");
                playerDiv.className = "card-body";
                playerCard.appendChild(playerDiv);

                const playerName = document.createElement("h5");
                playerName.className = "card-title";
                playerName.innerText = player.firstName + " " + player.surname;
                playerDiv.appendChild(playerName);

                const playerShirtNumber = document.createElement("p");
                playerShirtNumber.className = "card-text";
                playerShirtNumber.innerText = "Shirt Number: " + player.shirtNumber;
                playerDiv.appendChild(playerShirtNumber);

                const playerTeamName = document.createElement("p");
                playerTeamName.className = "card-text";
                playerTeamName.innerText = "Team Name: " + player.teamName;
                playerDiv.appendChild(playerTeamName);

                const playerDelete = document.createElement("button");
                playerDelete.className = "btn btn-danger";
                playerDelete.innerText = "Delete";
                playerDiv.appendChild(playerDelete);
                playerDelete.addEventListener("click", () =>{
                    deletePlayer(player.id);
                })

                output.prepend(playerCol);

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