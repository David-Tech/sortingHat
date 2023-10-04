const mongoose = require('mongoose');
const answerSchema = require('./answer')

const quizSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    answers:[answerSchema],
},
{
    collection: 'Quiz'
}
);

module.exports = mongoose.model('Quiz', quizSchema);