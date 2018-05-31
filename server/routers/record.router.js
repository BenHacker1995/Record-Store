const express = require( 'express' );
const router = express.Router();

// Require Record
const Record = require( '../modules/record.schema' );

router.get( '/', ( req, res ) => {
    Record.find()
        .then( (data) => {
            console.log(`Got stuff back from mongo: ${data}`);
            res.send(data)
        })
        .catch( (error) => {
            console.log(`Error from mongo: ${error}`);
            res.sendStatus(500);
        })
});

router.post( '/', ( req, res ) => {
    let recordData = req.body;
    console.log( `Got the book data from request: ${recordData}` );
    let newRecord = new Record(recordData);
    console.log(`New record is ${newRecord}`);
    newRecord.save()
        .then(() => {
            res.sendStatus( 201 );
        })
        .catch((error) => {
            console.log(`Error adding record: ${error}`);
            res.sendStatus(500);
        });
});

router.delete('/', (req, res) => {
    let recordId = req.query._id;
    console.log(`Id for request is ${recordId}`);
    Record.findByIdAndRemove(recordId)
        .then(() => {
            console.log(`Removed book ${req.query}`);
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error removing record: ${error}`);
            res.sendStatus(500);
        });
});

router.put('/', (req, res) => {
    let recordData = req.body;
    Record.findByIdAndUpdate(req.body._id, recordData)
    .then(() => {
        console.log(`Updated record with id ${recordData._id}`);
        res.sendStatus(200);

    }).catch((error) => {
        console.log(`Error updating record with id ${recordData._id}: ${error}`);
        res.sendStatus(500);
    });
});

module.exports = router;