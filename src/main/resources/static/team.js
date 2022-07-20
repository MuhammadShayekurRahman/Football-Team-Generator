"use strict";
const output = document.querySelector("div#output");
const teamSearch = document.querySelector("input#teamSearch");
// const cardBody = document.getElementsByClassName("card-body");
document.querySelector(".d-flex").addEventListener("submit", function(event){
    event.preventDefault();
    console.log("Search Value: " + teamSearch.value);

    clearCards();
    
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
                updateButton.className = "btn btn-warning m-2";
                updateButton.innerText = "Edit";
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
    window.location = "update-player.html?id=" + id + "&firstName=" + firstName + "&surname=" + surname + "&position=" + position + "&shirtNumber=" + shirtNumber + "&teamName=" + teamName;
}

const clearCards = () => {
    // const stRCard = document.querySelector("div#ST-R");
    // const stLCard = document.querySelector("div#ST-L");
    // const rmCard = document.querySelector("div#RM");
    // const cmRCard = document.querySelector("div#CM-R");
    // const cmLCard = document.querySelector("div#CM-L");
    // const lmCard = document.querySelector("div#LM");
    // const rbCard = document.querySelector("div#RB");
    // const cbRcard = document.querySelector("div#CB-R");
    // const cbLcard = document.querySelector("div#CB-L");
    // const lbCard = document.querySelector("div#LB");
    // const gkCard = document.querySelector("div#GK");

    // stRCard.innerHTML = "";
    // stLCard.innerHTML = "";
    // rmCard.innerHTML = "";
    // cmLCard.innerHTML = "";
    // cmRCard.innerHTML = "";
    // lmCard.innerHTML = "";
    // rbCard.innerHTML = "";
    // cbRcard.innerHTML = "";
    // cbLcard.innerHTML = "";
    // lbCard.innerHTML = "";
    // gkCard.innerHTML = "";

    document.querySelector("div#ST-R").innerHTML = "";
    document.querySelector("div#ST-L").innerHTML = "";
    document.querySelector("div#RM").innerHTML = "";
    document.querySelector("div#CM-R").innerHTML = "";
    document.querySelector("div#CM-L").innerHTML = "";
    document.querySelector("div#LM").innerHTML = "";
    document.querySelector("div#RB").innerHTML = "";
    document.querySelector("div#CB-R").innerHTML = "";
    document.querySelector("div#CB-L").innerHTML = "";
    document.querySelector("div#LB").innerHTML = "";
    document.querySelector("div#GK").innerHTML = "";
}