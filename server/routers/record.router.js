const express = require( 'express' );
const router = express.Router();
let recordId = 1;
const recordArray = [
    {
        artist: 'Metallica',
        album: 'Hardwired... to Self-Destruct',
        year: 2016,
        genre: 'Metal'
    }
];

router.get( '/', ( req, res ) => {
    console.log('In /record GET');
    res.send( recordArray );
});

router.post( '/', ( req, res ) => {
    let record = req.body;
    record.id = recordId++;
    recordArray.push( record );
    res.sendStatus( 201 );
});

router.delete('/', (req, res) => {
    let id = req.query.id;
    for( let i = 0; i < recordArray.length; i++ ) {
        let record = recordArray[i];
        if ( recordId == record.id ) {
            recordArray.splice( i, 1)
        }
    }
    res.sendStatus( 200 );
});

module.exports = router;