const express = require( 'express' );
const app = express();

app.use( express.static( 'server/public' ) );

const bodyParser = require( 'body-parser' );
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( bodyParser.json());

const recordRouter = require( './routers/record.router' );
app.use( '/record', recordRouter );

const PORT = process.env.PORT || 5000;
app.listen( PORT, () => console.log( 'listening on port', PORT ) );
