const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title: {
        type: 'string',
        required: true
    },
    category: String,
    country: String,
    year: Number,
    imdb_score: Number,
    director_id: Schema.Types.ObjectId,
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('movie', MovieSchema)