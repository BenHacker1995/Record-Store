const express = require( 'express' );

// Have express make me a new Router
const router = express.Router();

// Require Record
const Record = require( '../modules/record.class' );
// Make some records
const recordArray = [
    new Record( 'Beatles', 'Abbey Road', 1969, [ 'Rock' ] ),
    new Record( 'Michael Jackson', 'Off the Wall', 1979, [ 'Pop' ] ),
    new Record( 'Prince', 'Purple Rain', 1984, [ 'Pop' ] ),
    new Record( 'Cibo Matto', 'Viva la Woman', 1990, [ 'Jpop' ])
];

router.get( '/', ( req, res ) => {
    console.log( 'Handling my GET for /record', req.body );
    
    res.send( recordArray );
})

router.post( '/', ( req, res ) => {
    console.log( 'Handling my POST for /record' );
    let sentRecord = req.body;
    let record = new Record(
        sentRecord.artist,
        sentRecord.albumName,
        sentRecord.year,
        [ sentRecord.genreList ],
    );
    recordArray.push( record );
    res.sendStatus( 201 );
})

module.exports = router;