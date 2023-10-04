import { Button, Container, HStack } from "@chakra-ui/react"
export default function Navbar() {
    return(
            <HStack spacing={3} paddingLeft={50} paddingRight={50}>         
                <Button>
                    Login
                </Button>
                <Button>
                    Source
                </Button>  
            </HStack>  
    )
}