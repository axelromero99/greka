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
    axios.post("/api/contact", form).then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      {/* ABOUT US */}
      <Grid
        autoFlow={{ base: "row", md: "row", xl: "column" }}
        gap="vw"
        justifyContent="center"
        minHeight={"75vh"}
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
          {/* right box */}
          <Grid
            autoFlow={{ base: "row", md: "row", xl: "column", xl: "column" }}
            gap={"5vw"}
          >
            <Flex
              borderRadius={15}
              height="85vh"
              justifyContent="center"
              width={{ base: "70vw", md: "50vw", xl: "35vw" }}
              margin={"10vh 0"}
              bg={"#fff"}
            >
              {/*CONTENT RIGHTBOX*/}
              <Flex
                flexDirection="column"
                width={{ base: "50vw", md: "40vw", xl: "25vw" }}
              >
                <Grid h="100%">
                  <Flex alignItems="center">
                    <Flex>
                      <Flex
                        alignItems="center"
                        bg={theme.colors.tertiary}
                        borderRadius={"100%"}
                        fontWeight={"600"}
                        h="40px"
                        justifyContent="center"
                        marginRight="2vw"
                        w="40px"
                      >
                        <AiFillEnvironment fill="#202020" size="30px" />
                      </Flex>
                      <Text
                        fontFamily={"body"}
                        fontSize="lg"
                        alignSelf="center"
                        color={"#202020"}
                      >
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
                        h="40px"
                        justifyContent="center"
                        marginRight="2vw"
                        w="40px"
                      >
                        <AiFillPhone fill="#202020" size="30" />
                      </Flex>
                      <Text
                        fontFamily={"body"}
                        fontSize="lg"
                        alignSelf="center"
                        color={"#202020"}
                      >
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
                        h="40px"
                        justifyContent="center"
                        marginRight="2vw"
                        w="40px"
                      >
                        <AiTwotoneMail fill="#202020" size="30" />
                      </Flex>
                      <Text
                        fontFamily={"body"}
                        fontSize="lg"
                        alignSelf="center"
                        color={"#202020"}
                      >
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
                        h="40px"
                        justifyContent="center"
                        marginRight="2vw"
                        w="40px"
                      >
                        <AiFillInstagram fill="#202020" size="30" />
                      </Flex>
                      <Text
                        fontFamily={"body"}
                        fontSize="lg"
                        alignSelf="center"
                        color={"#202020"}
                      >
                        grekashowroom
                      </Text>
                    </Flex>
                  </Flex>
                </Grid>
              </Flex>
            </Flex>
            {/* right box */}
            <Flex
              my="10vh"
              backgroundColor={"#fff"}
              borderRadius={15}
              height="85vh"
              justifyContent="center"
              width={{ base: "60w", md: "50vw", xl: "40vw" }}
            >
              <Flex
                flexDirection="column"
                width={{ base: "50vw", md: "45vw", xl: "35vw" }}
              >
                <form style={{ height: "100%" }} onSubmit={handleSubmit}>
                  <Grid
                    h="100%"
                    alignContent="center"
                    gap="5vh"
                    justifyContent="center"
                  >
                    <Text
                      color={theme.colors.primary}
                      fontSize={{ base: "lg", md: "xl", xl: "4xl" }}
                      fontWeight={700}
                      marginY="4vh"
                      textShadow={`2px 2px 1px #75CED4`}
                      justifySelf="center"
                    >
                      Contáctanos
                    </Text>
                    <FormControl>
                      <Input
                        _placeholder={{ color: "gray" }}
                        bg="#fff"
                        color="black"
                        placeholder="Nombre"
                        size={"lg"}
                        type="name"
                        onChange={(e) => setName(e.currentTarget.value)}
                        width="100%"
                      />
                    </FormControl>

                    <FormControl>
                      <Input
                        _placeholder={{ color: "gray" }}
                        bg="#fff"
                        color="black"
                        placeholder="Apellido"
                        size={"lg"}
                        type="surname"
                        onChange={(e) => setSurname(e.currentTarget.value)}
                        width="100%"
                      />
                    </FormControl>

                    <FormControl>
                      <Input
                        _placeholder={{ color: "gray" }}
                        bg="#fff"
                        color="black"
                        placeholder="Correo Electrónico"
                        size={"lg"}
                        type="email"
                        onChange={(e) => setEmail(e.currentTarget.value)}
                        width="100%"
                      />
                    </FormControl>

                    <FormControl>
                      <Textarea
                        style={{ resize: "none" }}
                        _placeholder={{ color: "gray" }}
                        bg="#fff"
                        color="black"
                        placeholder="Mensaje"
                        size={"lg"}
                        onChange={(e) => setMessage(e.currentTarget.value)}
                      />
                    </FormControl>
                    <Button
                      bg="#fff"
                      color={"black"}
                      type="submit"
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
