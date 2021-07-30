import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

function Card() {

    const suits = ["♣", "♥", "♠", "♦"];
    const valuePts = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    return (
        <Grid bg="#EDF2F7" w="100px" h="150px" border="2px" borderRadius="10" fontSize="2xl" templateRows="repeat(3, 1fr)">
            <GridItem align="left" ml={2}>
                {valuePts[0]}
            </GridItem>
            <GridItem align="center">
                {suits[0]}
            </GridItem>
            <GridItem align="right" mr={2} mt={4} transform="rotateX(180deg)">
                {valuePts[0]}
            </GridItem>
        </Grid>
    )
}

export default Card;
