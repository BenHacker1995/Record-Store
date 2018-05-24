const express = require( 'express' );
const app = express();

app.use( express.static( 'server/public' ) );

const bodyParser = require( 'body-parser' );
app.use( bodyParser.urlencoded( { extended: true } ) );

const recordRouter = require( './routers/record.router' );
app.use( '/record', recordRouter );

const port = 5000;
app.listen( port, () => console.log( 'listening on port', port ) );

// GOALS
//  [X] Add some records
//  [X] See all records
//  [X] Records stored on server in an array
            // Artist
            // Year
            // AlbumName
            // Genre = [ many ]
