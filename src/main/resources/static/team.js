"use strict";
const output = document.querySelector("div#output");
const teamSearch = document.querySelector("input#teamSearch");
document.querySelector(".d-flex").addEventListener("submit", function(event){
    event.preventDefault();
    console.log("Search Value: " + teamSearch.value);
    
    axios.get("http://localhost:8080/getPlayers")
        .then(response => {
            console.log(response);

            // output.innerHTML="";

            for(let player of response.data){
                
                // if(player.teamName.includes(teamSearch.value)){
                //     alert("Team Not Found");
                // }

                if(player.teamName.toLowerCase() !== teamSearch.value.toLowerCase()) continue;
                console.log(player);
                const pageTitle = document.querySelector("a#title");
                pageTitle.innerText = "View Team: " + teamSearch.value.toUpperCase();

                const playerCard = document.querySelector("#"+player.position);
                console.log("Div Id: " + playerCard);
                const playerName = document.createElement("h5");
                playerName.className = "card-title";
                playerName.innerText = player.firstName + " " + player.surname;
                //debugger;
                playerCard.appendChild(playerName);

                const playerShirtNumber = document.createElement("p");
                playerShirtNumber.className = "card-text";
                playerShirtNumber.innerText = "Shirt Number: " + player.shirtNumber;
                playerCard.appendChild(playerShirtNumber);

                const playerTeamName = document.createElement("p");
                playerTeamName.className = "card-text";
                playerTeamName.innerText = "Team Name: " + player.teamName;
                playerCard.appendChild(playerTeamName);

                const updateButton = document.createElement("button");
                updateButton.className = "btn btn-warning mr-3";
                updateButton.innerText = "Update";
                playerCard.appendChild(updateButton);

                const deleteButton = document.createElement("button");
                deleteButton.className = "btn btn-danger";
                deleteButton.innerText = "Delete";
                playerCard.appendChild(deleteButton);
            }
            
            

        })
        .catch(error => console.error(error))


})

// function playerCard(player){
//     const playerCol = document.createElement("div");
//     playerCol.className = "col-3";

//     const playerCard = document.createElement("div");
//     playerCard.className = "card text-white bg-dark mb-3";
//     playerCol.appendChild(playerCard);

//     const playerPosition = document.createElement("div");
//     playerPosition.className = "card-header";
//     playerPosition.innerText = player.position;
//     playerCard.appendChild(playerPosition);           


            
// }