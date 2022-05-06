import React, { useState } from "react";
import {
  Flex,
  Grid,
  Text,
  useTheme,
  FormControl,
  Input,
  Button,
  Textarea,
  Box,
} from "@chakra-ui/react";
import {
  AiFillEnvironment,
  AiFillPhone,
  AiTwotoneMail,
  AiFillInstagram,
} from "react-icons/ai";
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
    axios.post("/api/contact", form);
  };

  return (
    <>
      {/* ABOUT US */}
      <Grid
        autoFlow={{ base: "row", md: "row", xl: "column" }}
        gap="vw"
        justifyContent="center"
        minHeight={"100vh"}
        bg={"bgSecondary"}
        // my={20}
        position="relative"
        zIndex={1}
      >
        <Flex
          borderRadius={15}
          boxShadow={
            "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
          }
          marginY={20}
          minHeight={"70vh"}
          minWidth={{ base: "90vw", md: "90vw", xl: "90vw" }}
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/3737713/pexels-photo-3737713.jpeg?cs=srgb&dl=pexels-dids-3737713.jpg&fm=jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            justifyContent: "center",
            alignItems: "center",
          }}
          zIndex={-1}
        >
          {/* left box */}
          <Grid autoFlow={{ base: "row", md: "row", xl: "column" }} gap={"5vw"}>
            <Flex
              borderRadius={15}
              height={{ base: "100%", md: "78%", lg: "100%", xl: "80%" }}
              width={{ base: "60w", md: "40vw", xl: "30vw" }}
              justifyContent={"center"}
              margin={"10vh 0"}
              bg={"bg_contactMe"}
              boxShadow={
                "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
              }
            >
              {/*CONTENT LEFTBOX*/}
              <Flex
                flexDirection="column"
                width={{ base: "50vw", md: "40vw", xl: "25vw" }}
              >
                <Grid h="100%">
                  <Flex alignItems="center">
                    <Flex>
                      <Flex
                        alignItems={"center"}
                        bg={"bgSecondary"}
                        borderRadius={"100%"}
                        fontWeight={"600"}
                        h={"40px"}
                        justifyContent={"center"}
                        marginRight={"2vw"}
                        w={"40px"}
                      >
                        <AiFillEnvironment fill="secondary" size="30px" />
                      </Flex>
                      <Text
                        fontFamily={"body"}
                        fontSize={"lg"}
                        alignSelf={"center"}
                        color={"secondary"}
                      >
                        GENERAL PAZ 1244
                      </Text>
                    </Flex>
                  </Flex>

                  <Flex alignItems="center">
                    <Flex>
                      <Flex
                        alignItems={"center"}
                        bg={"bgSecondary"}
                        borderRadius={"100%"}
                        fontWeight={"600"}
                        h={"40px"}
                        justifyContent={"center"}
                        marginRight={"2vw"}
                        w={"40px"}
                      >
                        <AiFillPhone fill="secondary" size="30" />
                      </Flex>
                      <Text
                        fontFamily={"body"}
                        fontSize={"lg"}
                        alignSelf={"center"}
                        color={"secondary"}
                      >
                        3795-**********
                      </Text>
                    </Flex>
                  </Flex>

                  <Flex alignItems="center">
                    <Flex>
                      <Flex
                        alignItems={"center"}
                        bg={"bgSecondary"}
                        borderRadius={"100%"}
                        fontWeight={"600"}
                        h={"40px"}
                        justifyContent={"center"}
                        marginRight={"2vw"}
                        w={"40px"}
                      >
                        <AiTwotoneMail fill="secondary" size="30" />
                      </Flex>
                      <Text
                        fontFamily={"body"}
                        fontSize={"lg"}
                        alignSelf={"center"}
                        color={"secondary"}
                      >
                        GREKAS
                      </Text>
                    </Flex>
                  </Flex>

                  <Flex alignItems="center">
                    <Flex>
                      <Flex
                        alignItems="center"
                        bg={"bgSecondary"}
                        borderRadius={"100%"}
                        fontWeight={"600"}
                        h={"40px"}
                        justifyContent={"center"}
                        marginRight={"2vw"}
                        w={"40px"}
                      >
                        <AiFillInstagram fill="secondary" size="30" />
                      </Flex>
                      <Text
                        fontFamily={"body"}
                        fontSize={"lg"}
                        alignSelf={"center"}
                        color={"secondary"}
                      >
                        GREKASHOWROOM
                      </Text>
                    </Flex>
                  </Flex>
                </Grid>
              </Flex>
            </Flex>
            {/* right box */}
            <Flex
              my={"10vh"}
              backgroundColor={"bg_contactMe"}
              borderRadius={15}
              boxShadow={
                "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
              }
              height={{ base: "75%", md: "78%", lg: "85%", xl: "80%" }}
              width={{ base: "60w", md: "40vw", xl: "30vw" }}
              justifyContent={"center"}
            >
              <Flex
                flexDirection={"column"}
                // width={{ base: "50vw", md: "45vw", xl: "10vw" }}
              >
                <form style={{ height: "100%" }} onSubmit={handleSubmit}>
                  <Grid
                    h={"100%"}
                    alignContent={"center"}
                    gap={"5vh"}
                    justifyContent={"center"}
                  >
                    <Text
                      color={"primary"}
                      fontSize={{ base: "lg", md: "xl", xl: "4xl" }}
                      fontWeight={700}
                      marginY={"1vh"}
                      // textShadow={`2px 2px 1px #75CED4`}
                      justifySelf={"center"}
                    >
                      CONTACTANOS
                    </Text>
                    <FormControl>
                      <Input
                        _placeholder={{ color: "gray" }}
                        bg={"bg_contactMe"}
                        color={"black"}
                        placeholder={"Nombre"}
                        // size={"md"}
                        width={{ base: "90%", xl: "40vh" }}
                        height={{
                          base: "5vh",
                          md: "6vh",
                          lg: "5vh",
                          xl: "5vh",
                        }}
                        marginLeft={2}
                        type={"name"}
                        onChange={(e) => setName(e.currentTarget.value)}
                        // width={"100%"}
                      />
                    </FormControl>

                    <FormControl>
                      <Input
                        _placeholder={{ color: "gray" }}
                        bg={"bg_contactMe"}
                        color={"black"}
                        placeholder={"Apellido"}
                        // size={"lg"}
                        width={{ base: "90%", xl: "40vh" }}
                        height={{
                          base: "5vh",
                          md: "6vh",
                          lg: "5vh",
                          xl: "5vh",
                        }}
                        marginLeft={2}
                        type={"surname"}
                        onChange={(e) => setSurname(e.currentTarget.value)}
                        // width={"100%"}
                      />
                    </FormControl>

                    <FormControl>
                      <Input
                        _placeholder={{ color: "gray" }}
                        bg={"bg_contactMe"}
                        color={"black"}
                        placeholder={"Correo Electrónico"}
                        // size={"lg"}
                        width={{ base: "90%", xl: "40vh" }}
                        height={{
                          base: "5vh",
                          md: "6vh",
                          lg: "5vh",
                          xl: "5vh",
                        }}
                        marginLeft={2}
                        type={"email"}
                        onChange={(e) => setEmail(e.currentTarget.value)}
                        // width={"100%"}
                      />
                    </FormControl>

                    <FormControl>
                      <Textarea
                        style={{ resize: "none" }}
                        _placeholder={{ color: "gray" }}
                        bg={"bg_contactMe"}
                        color={"black"}
                        placeholder={"Mensaje"}
                        width={{ base: "90%", xl: "40vh" }}
                        height={{
                          base: "5vh",
                          md: "6vh",
                          lg: "5vh",
                          xl: "5vh",
                        }}
                        marginLeft={2}
                        size={"lg"}
                        onChange={(e) => setMessage(e.currentTarget.value)}
                      />
                    </FormControl>
                    <Button
                      bg={"bg_contactMe"}
                      color={"black"}
                      type={"submit"}
                      onClick={(e) => handleSubmit(e)}
                    >
                      Enviar
                    </Button>
                  </Grid>
                </form>
              </Flex>
            </Flex>
          </Grid>
        </Flex>
      </Grid>
    </>
  );
}
