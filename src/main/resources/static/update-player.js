"use strict";

function getParameter(parameterName){
    let parameters = new URLSearchParams(window.location.search);
    return parameters.get(parameterName);
}

const currentId = getParameter("id");
const currentFirstName = getParameter("firstName");
const currentSurname = getParameter("surname");
const currentPosition = getParameter("position");
const currentShirtNumber = getParameter("shirtNumber");
const currentTeamName = getParameter("teamName");

console.log(currentId, currentFirstName, currentSurname, currentPosition, currentShirtNumber, currentTeamName);

// Checks for ID
if (currentId == ''){
    alert("Error - Id not found");
    window.location = "view-team.html";
}

const setCurrent = () => {
    document.getElementById("firstName").value = currentFirstName;
    document.getElementById("surname").value = currentSurname;
    document.getElementById("position").value = currentPosition;
    document.getElementById("shirtNumber").value = currentShirtNumber;
    document.getElementById("teamName").value = currentTeamName;
}

setCurrent();

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

    axios.patch("http://localhost:8080/updatePlayer/"+ currentId + "?firstName=" + this.firstName.value + "&surname=" + this.surname.value +  "&shirtNumber=" + this.shirtNumber.value + "&position=" + this.position.value + "&teamName=" + this.teamName.value )
        .then(response => {
            console.log("Update Successful")
            const updateDiv = document.querySelector("div#update-form");
            const alert = document.createElement("div");
            alert.className = "alert alert-warning";
            alert.ariaRoleDescription = "alert";
            alert.innerText = "Success - Player: " + this.firstName.value + " has been updated";
            updateDiv.appendChild(alert);
        })
        .catch(error => console.log(error))
})    





