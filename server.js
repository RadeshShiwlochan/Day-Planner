'use strict';

const express    = require( 'express' );
const bodyParser = require( 'body-parser' );
const path       = require( 'path' ); 
const hbs        = require( 'hbs' );

let port   = process.env.PORT || 3000;
let routes = require( './routes.js' );
let app    = express();

hbs.registerPartials( __dirname + '/views/partials' );
app.set( 'view engine', 'hbs' );
app.use( express.static( __dirname + '/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( '/', routes );


app.listen( port, () => {
    console.log( `Server is running on ${port}` );
});