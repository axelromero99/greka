import React from "react";
import {Flex, Grid, Text} from "@chakra-ui/react";
import {
  FormControl,
  Input,
  Button,
  Textarea,
} from "@chakra-ui/react";

export default function AboutUs() {
  return (
    <>
      {/* ABOUT US */}
      <Grid
        autoFlow={{base: "row", md: "row", xl: "column"}}
        gap="5vw"
        justifyContent="space-around"
        py="4vh"
      >
        <Flex
          backgroundColor={"#F4A5A5"}
          borderRadius={15}
          height="80vh"
          justifyContent="center"
          width={{base: "80vw", md: "60vw", xl: "45vw"}}
        >
          <Flex
            flexDirection="column"
            justifyContent={{base: "xs"}}
            width={{base: "70vw", md: "45vw", xl: "35vw"}}
          >
            <Text fontSize={{base: "2xl", md: "2xl", xl: "4xl"}} fontWeight={700} marginY="6vh">
              Contact us
            </Text>

            <FormControl>
              <Grid autoFlow="row" gap="2vw">
                <Grid autoFlow="column" gap="2vw">
                  <Input bg="#fff" placeholder="Name" size={"lg"} />
                  <Input bg="#fff" placeholder="Surname" size={"lg"} />
                </Grid>
                <Input bg="#fff" placeholder="Email" size={"lg"} />
                <Textarea bg="#fff" placeholder="Message" size={"lg"} />
              </Grid>
            </FormControl>
            <Button bg="#fff" marginTop="4vh">
              Button
            </Button>
          </Flex>
        </Flex>
        {/* right box */}
        <Flex
          backgroundColor={"#F4A5A5"}
          borderRadius={15}
          height="80vh"
          justifyContent="center"
          width={{base: "80vw", md: "60vw", xl: "45vw"}}
        >
          <Grid
            alignSelf="center"
            width={{base: "70vw", md: "45vw", xl: "35vw"}}
            gap={{base: "10vw", md: "10vw", xl: "7vw"}}
          >
            <Flex>A</Flex>
            <Flex>A</Flex>
            <Flex>A</Flex>
            <Flex>A</Flex>
            <Flex>A</Flex>
          </Grid>
        </Flex>
      </Grid>
    </>
  );
}
