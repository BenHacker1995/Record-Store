const express = require( 'express' );
const app = express();

app.use( express.static( 'server/public' ) );

const bodyParser = require( 'body-parser' );
app.use( bodyParser.urlencoded( { extended: true } ) );

const Record = require( './modules/record.class' );
// Make some records
const recordArray = [
    new Record( 'Beatles', 'Abbey Road', 1969, [ 'Rock' ] ),
    new Record( 'Michael Jackson', 'Off the Wall', 1979, [ 'Pop' ] ),
    new Record( 'Prince', 'Purple Rain', 1984, [ 'Pop' ] ),
    new Record( 'Cibo Matto', 'Viva la Woman', 1990, [ 'Jpop' ])
];

app.get( '/record', ( req, res ) => {
    console.log( 'Handling my GET for /record' );
    res.send( recordArray );
})

const port = 5000;
app.listen( port, () => console.log( 'listening on port', port ) );

// GOALS
// Add some records
// See all records
// Records stored on server in an array
    // Artist
    // Year
    // AlbumName
    // Genre = [ many ]
