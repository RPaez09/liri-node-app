var https = require('https');

omdb = function( movieName , cb ){

    if( movieName === "" || movieName === null ){
        let error = 'Error: No movie name provided, please provide a movie name'
        
        return cb( error , null );
    }

    // first parse the movie name to replace " " with "+"

    let nameArr = movieName.split("");

    let parsedArr = [];

    for( var i = 0; i < nameArr.length; i++ ){
        if( nameArr[i] === " " ){
            parsedArr.push("+");
        } else {
            parsedArr.push( nameArr[i] );
        }
    }

    let parsedName = parsedArr.join("");

    let url = `https://www.omdbapi.com/?apikey=trilogy&t=${parsedName}`;

    https.get( url, function( res ){
        
        res.setEncoding('utf8');

        let body = '';
        
        res.on('data', data => {
            body += data;
        });
    
        res.on('end', () => {
            let response = JSON.parse(body);

            if( response.Response === "False"){
                return cb( response.Error , null );
            } else {
                return cb(null, response);
            }
        });
    }).on('error' , (e) => {
        return cb(e , null)
    });

}

module.exports = omdb;