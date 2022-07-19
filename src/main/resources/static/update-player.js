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

if (currentId == undefined){
    alert("Error - Id not found");
}