const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 3000;
const uri = "mongodb+srv://dbriken:dbriken@cluster0.7l8gwed.mongodb.net/?retryWrites=true&w=majority";
const req = require("express/lib/request");
const res = require("express/lib/response");
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(uri);
}

mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => console.log(err));


app.listen(port, () => console.log(`listening on port ${port}!`));

require('./models/quizModel');
require('./models/answer');
const Question = mongoose.model('Quiz');

// post request to add an array of questions to the database from json file
app.post('/addQuizes', async(req, res) => {
    const {questions} = req.body;
    try{
        await Question.insertMany(questions);
        res.send({status:"success"});
    }catch(error){
        console.log(error);
        res.send({status:"error"});
    }
})



app.post('/addQuiz', async(req, res) => {
   const{question, answers} = req.body;

   try{
    await Question.create({
        question,
        answers
    });
    res.send({status:"success"});
   }catch(error){
         res.send({status:"error"});
    }

})
//get request to return quiz questions
app.get('/getQuiz', async(req, res) => {
    try{
        const quiz = await Question.find({});
        res.send({status:"success", quiz});
    }
    catch(error){
        res.send({status:"error"});
    }
    

})
// post request to create a new user
