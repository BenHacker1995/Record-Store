const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

const recordSchema = new Schema(
    {
        artist: { type: String, required: true },
        album: { type: String, required: true, unique: true },
        year: { type: Number, required: true },
        genre: { type: String, required: true, unique: true }
    }
);

module.exports = mongoose.model('record', recordSchema);