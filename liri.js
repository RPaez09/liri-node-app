require("dotenv").config();
const keys = require("./keys");
const Twitter = require("twitter");
const Spotify = require("node-spotify-api");
const spotifyClient = new Spotify(keys.spotify);
const twitterClient = new Twitter(keys.twitter);
const omdb = require("./helpers/omdb-wrapper");

liri = function ( command, argument ) {
    switch( command ) {
        case "my-tweets":
            console.log("Here are my tweets!");
            myTweets();
            break;
        case "spotify-this-song":
            console.log("Spotifying...");
            spotifyThisSong( argument )
            break;
        case "movie-this":
            console.log("Searching for this movie...");
            movieThis( argument );
            break;
        case "do-what-it-says":
            console.log("Doing what it says");
            break;
        default:
            console.log("Sorry, I didn't hear you.");
            break;
    }
}

function myTweets() {
    twitterClient.get('statuses/home_timeline', function (error, tweets, response) {
        if (error) throw error;
        for (var i = 0; i < tweets.length; i++) {
            console.log(`Tweet #${(i+1)} | date: ${tweets[i].created_at} "${tweets[i].text}"`);
        }
    });
}

function spotifyThisSong( songName ) {
    spotifyClient.search({
        type: 'track',
        query: songName
    }, function ( error, data ) {
        if ( error ) {
            return console.log('Error occurred: ' + err);
        }
        for(var i = 0; i < data.tracks.items.length; i++){
            var currentSong = data.tracks.items[i]; 
            console.log(`${i+1}: "${currentSong.artists[0].name}" - ${currentSong.name} , Preview: "${currentSong.preview_url}" Album: ${currentSong.album.name}`);
        }
    });
}

function movieThis( movieName ){
    if(movieName === ""){ 
        movieName = "Mr. Nobody"
    }
    omdb( movieName , function( error , movie ){
        if (error) throw error;
        console.log(`${movie.Title} (${movie.Year}) : ${movie.Plot}
IMDB Rating: ${movie.Ratings[0].Value}
Rotten Tomatoes Rating: ${movie.Ratings[1].Value}
Country: ${movie.Country}
Language: ${movie.Language}
Actors: ${movie.Actors}`);
    });
}

module.exports = liri;