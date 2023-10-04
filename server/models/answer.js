const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    house: {
        type: String,
        enum: ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'],
        required: true,
    }
});