import { React, useState } from "react"
import { Container, Text, Heading, Link, Button} from "@chakra-ui/react"

export default function Landing() {
    return(
        <Container> 
            <Heading> Welcome to the sorting hat ceremony! </Heading>
            <Button as={Link} href="/quiz">Click here to get sorted</Button>
            <Text> Already sorted? <Link href="/login">Login</Link></Text>
        
        </Container>

        //
    )
}
