import React from "react";
import Card from "../Card";
import { Box, Button, Stack } from "@chakra-ui/react";

function Gameboard()  {

    return (
        <Box bg="green">
           
            <Card/>

            <Stack mt={8} pacing={4}>
                <Button maxW={32} bg="#B7791F" color="#FFF" variant="solid">Deal</Button>
                <Button maxW={32} bg="#322659" color="#FFF" variant="solid">Hit</Button>
                <Button maxW={32} bg="#322659" color="#fff">Stand</Button>
            </Stack>
         
        </Box>
    )
}

export default Gameboard;