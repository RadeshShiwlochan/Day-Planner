'use strict';

const express = require( 'express' );
const hbs     = require( 'hbs' );

let port = process.env.PORT || 3000;
let app = express();

hbs.registerPartials( __dirname + '/views/partials' );
app.set( 'view engine', 'hbs' );
app.use( express.static( __dirname + '/public' ) );

app.get( '/', ( req, res ) => {
    res.render( 'home.hbs', {
        pageTitle: 'Day Planner'
    });
});

app.listen( port, () => {
    console.log( `Server is running on ${port}` );
});