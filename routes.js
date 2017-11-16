const express = require( 'express' );
let router = express.Router();

//home page ( main page );
router.get( '/', ( req, res ) => {
    res.render( 'home.hbs', {
        pageTitle: 'Day Planner'
    });
});


router.get( '/notes', ( req, res ) => {
	res.render( 'notes.hbs', {
		pageTitle: 'All Notes'
	});
});

module.exports = router;