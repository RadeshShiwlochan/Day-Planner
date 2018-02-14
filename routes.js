const express   = require( 'express' );
let geoLocation = require( './resources/geolocation.js' );
let weatherFunc = require( './resources/weather.js' );
let router      = express.Router();

//home page ( main page );
router.get( '/', ( req, res ) => {
    res.render( 'home.hbs', {
        pageTitle: 'Day Planner'
    });
});

router.get( '/notes', ( req, res ) => {
	res.render( 'notes.hbs', {
		pageTitle: 'All Notes',
		add: null,
		lat: null,
		long: null
	});
});

router.post('/user-address-input', ( req, res ) => {
    let inputAddress = req.body.zipcode;
    console.log( "This is the zipcode ", inputAddress );
    geoLocation.getLocation( inputAddress, ( err, results ) => {
	    if ( err ) console.log( err );
	    else { 
	    	console.log( JSON.stringify(results, undefined, 2 ) );
            weatherFunc.retrieveWeather( results.latitude, results.longitude, ( error, weatherInfo ) => {
            	if ( error ) console.log( error );
            	else {
            	    console.log( "This is the weather information: ", JSON.stringify( weatherInfo, undefined, 2 ) );
                    res.render( 'home.hbs', {
    	                pageTitle: 'New Notes',
                        add: results.address,
                        lat: results.latitude,
                        long: results.longitude    
                    });
                }    
            });
        }    
	});
});

module.exports = router;