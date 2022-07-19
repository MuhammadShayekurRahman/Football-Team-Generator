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





