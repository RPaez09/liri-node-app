require("dotenv").config();
const keys = require("./keys");
//const spotify = new Spotify(keys.spotify);
//const twitterClient = new Twitter(keys.twitter);

liri = function( command ){
    switch( command ){
        case "my-tweets":
            console.log("Here are my tweets!");
        break;
        case "spotify-this-song":
            console.log("Spotifying...");
        break;
        case "movie-this":
            console.log("Movies");
        break;
        case "do-what-it-says":
            console.log("Doing what it says");
        break;
        default:
            console.log("Sorry, I didn't hear you.");
            break;
    }
}

module.exports = liri;