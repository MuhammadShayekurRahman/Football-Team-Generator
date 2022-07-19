"use strict";
const output = document.querySelector("div#output");
const teamSearch = document.querySelector("input#teamSearch");
const cardBody = document.getElementsByClassName("card-body");
document.querySelector(".d-flex").addEventListener("submit", function(event){
    event.preventDefault();
    console.log("Search Value: " + teamSearch.value);

    

    //clear Not working, appends on resubmission
    // debugger;
    cardBody.innerHTML = "";
    axios.get("http://localhost:8080/getPlayers")
        .then(response => {
            console.log(response);

           
            

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
                updateButton.addEventListener(("click"), ()=>{
                    updatePlayer(player.id, player.firstName, player.surname, player.position, player.shirtNumber, player.teamName);
                })

                const deleteButton = document.createElement("button");
                deleteButton.className = "btn btn-danger";
                deleteButton.innerText = "Delete";
                playerCard.appendChild(deleteButton);
                deleteButton.addEventListener("click", () =>{
                    deletePlayer(player.id);
                })
            }
            
            

        })
        .catch(error => console.error(error))


})

const deletePlayer = (id) =>{
    axios.delete("http://localhost:8080/removePlayer/" + id)
        .then(response => {
            console.log("delete successful");
            location.reload();
        })
        .catch(error => console.error(error))
}

const updatePlayer = (id, firstName, surname, position, shirtNumber, teamName) => {
    window.location = "update-player.html?id="+id;
}