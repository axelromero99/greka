import React from "react";
import { Flex, Grid, Text } from "@chakra-ui/react";
import { FormControl, Input, Button, Textarea } from "@chakra-ui/react";
import {
  AiFillEnvironment,
  AiFillPhone,
  AiTwotoneMail,
  AiFillInstagram,
} from "react-icons/ai";
import { useState } from "react";
import { useTheme } from "@chakra-ui/react";
import axios from "axios";

export default function AboutUs() {
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [form, setForm] = useState({});

  const theme = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({
      name,
      surname,
      email,
      message,
    });
    axios.post("/api/contact", form).then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      {/* ABOUT US */}
      <Grid
        autoFlow={{ base: "row", md: "row", xl: "column" }}
        gap="5vw"
        justifyContent="space-around"
        minHeight={"75vh"}
        bg={"bg"}
        my={20}
      >
        <Flex
          backgroundColor={theme.colors.secondary}
          bg={theme.colors.background_contact}
          border="2px dashed"
          borderRadius={15}
          height="80vh"
          justifyContent="center"
          width={{ base: "80vw", md: "60vw", xl: "30vw" }}
        >
          <Flex
            flexDirection="column"
            justifyContent={{ base: "xs" }}
            width={{ base: "70vw", md: "45vw", xl: "20vw" }}
          >
            <Text
              color="black"
              fontSize={{ base: "2xl", md: "2xl", xl: "4xl" }}
              fontWeight={700}
              marginY="4vh"
            >
              Contact us
            </Text>

            <form style={{ height: "100%" }} onSubmit={handleSubmit}>
              <Grid h="100%">
                <FormControl>
                  <Input
                    _placeholder={{ color: "gray" }}
                    bg="#fff"
                    color="black"
                    placeholder="Name"
                    size={"lg"}
                    type="name"
                    onChange={(e) => setName(e.currentTarget.value)}
                  />
                </FormControl>

                <FormControl>
                  <Input
                    _placeholder={{ color: "gray" }}
                    bg="#fff"
                    color="black"
                    placeholder="Surname"
                    size={"lg"}
                    type="surname"
                    onChange={(e) => setSurname(e.currentTarget.value)}
                  />
                </FormControl>

                <FormControl>
                  <Input
                    _placeholder={{ color: "gray" }}
                    bg="#fff"
                    color="black"
                    placeholder="Email"
                    size={"lg"}
                    type="email"
                    onChange={(e) => setEmail(e.currentTarget.value)}
                  />
                </FormControl>

                <FormControl>
                  <Textarea
                    _placeholder={{ color: "gray" }}
                    bg="#fff"
                    color="black"
                    placeholder="Message"
                    size={"lg"}
                    onChange={(e) => setMessage(e.currentTarget.value)}
                  />
                </FormControl>
                <Button
                  bg="#fff"
                  color={"black"}
                  marginTop="4vh"
                  type="submit"
                  onClick={(e) => handleSubmit(e)}
                >
                  Button
                </Button>
              </Grid>
            </form>
          </Flex>
        </Flex>
        {/* right box */}

        <Flex
          backgroundColor={theme.colors.secondary}
          bg={theme.colors.background_contact2}
          box-shadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"          borderRadius={15}
          height="80vh"
          justifyContent="center"
          width={{ base: "80vw", md: "60vw", xl: "25vw" }}
        >
          {/*CONTENT RIGHTBOX*/}
          <Flex
            flexDirection="column"
            alignItems="center"
            width={{ base: "70vw", md: "45vw", xl: "15vw" }}
          >
            <Grid alignItems="center" h="100%">
              <Flex alignItems="center">
                <Flex alignItems="center">
                  <Flex
                    alignItems="center"
                    bg={theme.colors.tertiary}
                    borderRadius={"100%"}
                    fontWeight={"600"}
                    h="55px"
                    justifyContent="center"
                    marginRight="2vw"
                    w="55px"
                  >
                    <AiFillEnvironment fill="#202020" size="40" />
                  </Flex>
                  <Text fontFamily={"body"} fontSize="2xl" align-self="center">
                    ***********
                  </Text>
                </Flex>
              </Flex>

              <Flex alignItems="center">
                <Flex>
                  <Flex
                    alignItems="center"
                    bg="#0ba9b3"
                    borderRadius={"100%"}
                    fontWeight={"600"}
                    h="55px"
                    justifyContent="center"
                    marginRight="2vw"
                    w="55px"
                  >
                    <AiFillPhone fill="#202020" size="40" />
                  </Flex>
                  <Text fontFamily={"body"} fontSize="2xl" align-self="center">
                    3795-**********
                  </Text>
                </Flex>
              </Flex>

              <Flex alignItems="center">
                <Flex>
                  <Flex
                    alignItems="center"
                    bg="#0ba9b3"
                    borderRadius={"100%"}
                    fontWeight={"600"}
                    h="55px"
                    justifyContent="center"
                    marginRight="2vw"
                    w="55px"
                  >
                    <AiTwotoneMail fill="#202020" size="40" />
                  </Flex>
                  <Text fontFamily={"body"} fontSize="2xl" align-self="center">
                    ****@***.com
                  </Text>
                </Flex>
              </Flex>

              <Flex alignItems="center">
                <Flex>
                  <Flex
                    alignItems="center"
                    bg="#0ba9b3"
                    borderRadius={"100%"}
                    fontWeight={"600"}
                    h="55px"
                    justifyContent="center"
                    marginRight="2vw"
                    w="55px"
                  >
                    <AiFillInstagram fill="#202020" size="40" />
                  </Flex>
                  <Text fontFamily={"body"} fontSize="2xl" align-self="center">
                    grekashowroom
                  </Text>
                </Flex>
              </Flex>
            </Grid>
          </Flex>
        </Flex>
      </Grid>
    </>
  );
}
