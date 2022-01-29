const axios = require("axios");

const places = [
    "Code chrysalis",
    "Blue bottle coffee roppongi",
    "Sakurada shrine roppongi",
    "Maduro",
    "sakurazaka park roppongi"
];

try {
    places.forEach(place => {
        axios.post(
            `http://cc24-seniorprojectbackend.herokuapp.com/places`, {
            address: place
        });
    });
} catch (error) {
    console.log("Error posting place", error.status);
}