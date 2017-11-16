const express   = require( 'express' );
let geoLocation = require( './resources/geolocation.js' );
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

router.post('/retrieveAddr', ( req, res ) => {
	let inputAddress = req.body.userAddress;
	console.log( inputAddress );
	geoLocation.getLocation( inputAddress, ( err, results ) => {
	    if ( err ) console.log( err );
	    else { 
            res.render( 'notes.hbs', {
    	        pageTitle: 'New Notes',
                add: results.address,
                lat: results.latitude,
                long: results.longitude    
            });
        }    
	});
	
});

module.exports = router;