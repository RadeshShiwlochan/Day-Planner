const request = require( 'request' );

let retrieveWeather = ( lat, long, callback ) => {
	request( {
	    url: `https://api.darksky.net/forecast/${process.env.WEATHER_API_KEY}/${lat},${long}`,
	    json: true	
	}, ( error, response, body ) => {
		if ( error )
			callback('error occurred');
		else if ( !error && response.statusCode === 200 )
		{
			let tempResults = {
				temp: body.currently.temperature,
				feelsLike: body.currently.apparentTemperature
			}
			callback( undefined, tempResults );
		}
	});
};

module.exports.retrieveWeather = retrieveWeather;