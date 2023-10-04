import { Container, Box, SimpleGrid, Text, Button, Flex, Wrap, CircularProgress, Heading, CircularProgressLabel } from "@chakra-ui/react"
import { React, useEffect, useRef, useState } from "react"

export default function Quiz() {
    const [count, setCount] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    let gryffindor = useRef(0), ravenclaw = useRef(0), hufflepuff = useRef(0), slytherin = useRef(0);
    
    // fetch array of question objects 
useEffect(() => {
    fetch('http://localhost:3000/getQuiz', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json())
    .then(data => {
        setQuestions(data.quiz);
        setLoading(false);
        console.log(data.quiz);
    })
    .catch(error => console.log(error))
    
}, []);

 function handleAnswerClick(house){
        console.log(house);
        setCount(count + 1);
        switch (house) {
            case 'Gryffindor':
                gryffindor.current++;
                console.log(gryffindor);
                break;
            case 'Slytherin':
                slytherin.current++; 
                console.log(slytherin);
                break;
            case 'Hufflepuff':
                hufflepuff.current++;  
                console.log(hufflepuff);   
                break;
            case 'Ravenclaw':
                ravenclaw.current++;
                console.log(ravenclaw);
                break;
            default:
                break;
        }
    };
function calculateResults(){
    let max = Math.max(gryffindor.current, slytherin.current, hufflepuff.current, ravenclaw.current);
        if (max === gryffindor.current) {
            return(<Heading>Well then, looks like it must be Gryffindor!</Heading>)
            
     }else if (max === slytherin.current) {
        
            return(<Heading>Well then, looks like it must be Slytherin!</Heading>)
            
    }else if (max === hufflepuff.current) {
        
            return(<Heading>Well then, looks like it must be Hufflepuff!</Heading>)
            
    }else if (max === ravenclaw.current) {
        
            return(<Heading>Well then, looks like it must be Ravenclaw!</Heading>)
            
        }
     };
function getResults(){
 return(
    <Container>
        {calculateResults()}
        <CircularProgress value={(gryffindor.current/questions.length) * 100} color="red.400" size="100px" thickness="10px">
            <CircularProgressLabel>{(gryffindor.current/questions.length) * 100}%</CircularProgressLabel>
        </CircularProgress>
        <CircularProgress value={(slytherin.current/questions.length) * 100} color="green.400" size="100px" thickness="10px">
            <CircularProgressLabel>{(slytherin.current/questions.length) * 100}%</CircularProgressLabel>
        </CircularProgress>
        <CircularProgress value={(hufflepuff.current/questions.length) * 100} color="yellow.400" size="100px" thickness="10px">
            <CircularProgressLabel>{(hufflepuff.current/questions.length) * 100}%</CircularProgressLabel>
        </CircularProgress>    
        <CircularProgress value={(ravenclaw.current/questions.length) * 100} color="blue.400" size="100px" thickness="10px">
            <CircularProgressLabel>{(ravenclaw.current/questions.length) * 100}%</CircularProgressLabel>
        </CircularProgress>
    </Container>
 )
};

   
    //when user clicks an answer, update count & send answers to backend and get result back
    if(loading) {
        return (
            <Container>
                <Text>Loading...</Text>
            </Container>
        );
    } else if (!loading && count < questions.length) {
        return(
        <Container>
         
            <Box>
                <Text>{questions[count].question}</Text>
            </Box>
           
            <SimpleGrid columns={2} spacing={5}  >
                {questions[count].answers.map((answer) => (
                        <Button onClick={() => handleAnswerClick(answer.house)} text-overflow= 'ellipsis' whiteSpace='normal' ><Text overflow='hidden'>{answer.text}</Text></Button>       
                ))}
            </SimpleGrid>
            
        </Container>
        )
    } else if (!loading && count === questions.length) {
        return(
            //display results then give the user the option to save their results to their profile if they create an account
            getResults()
        )
    }
    
}