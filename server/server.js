const express = require( 'express' );
const app = express();

app.use( express.static( 'server/public' ) );

const bodyParser = require( 'body-parser' );
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( bodyParser.json());

const mongoose = require( 'mongoose' );

const DATABASE_NAME = 'library';
const DATABASE_URL = `mongodb://localhost:27017/${DATABASE_URL}`;
mongoose.connect( DATABASE_URL );

mongoose.connection.on('connected', () => {
    console.log(`Mongoose is connected to ${DATABASE_URL}`);
});

mongoose.connection.on('error', (error) => {
    console.log(`Mongoose connection error: ${error}`);
});

const recordRouter = require( './routers/record.router' );
app.use( '/record', recordRouter );

const PORT = process.env.PORT || 5000;
app.listen( PORT, () => console.log( 'listening on port', PORT ) );

// GOALS
//  [X] Add some records
//  [X] See all records
//  [X] Records stored on server in an array
            // Artist
            // Year
            // AlbumName
            // Genre = [ many ]
