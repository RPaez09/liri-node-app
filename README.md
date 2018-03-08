# liri-node-app
----

Liri node app is a Nodejs app that fetches information of a song, movie or tweets from popular development accounts

# Accepted commands are as follows:
1. **my-tweets** :  
Pulls the latest 20 tweets from the twitter channels you follow

2. **spotify-this-song** <**song name**> :  
Searches spotify for the song provided and shows a list of results along with their artists and albums, you can click on their samples to find your song

3. **movie-this** <**movie name**> :  
Searches the OMDB API for a movie with the title you provide, returns ratings, country, language and actors.

4. **do-what-it-says** :  
Reads the file *random.txt* and executes the command and argument provided, if any.

**Example**

    node app movie-this "city of god"
returns

    City of God (2002) : Two boys growing up in a violent neighborhood of Rio de Janeiro take different paths: one becomes a photographer, the other a drug dealer.
    IMDB Rating: 8.6/10
    Rotten Tomatoes Rating: 90%
    Country: Brazil, France
    Language: Portuguese
    Actors: Alexandre Rodrigues, Leandro Firmino, Phellipe Haagensen, Douglas Silva