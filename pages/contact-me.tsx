import React, {useState} from "react";
import {Flex, Grid, Text, useTheme, FormControl, Input, Button, Textarea} from "@chakra-ui/react";
import {AiFillPhone, AiFillInstagram, AiTwotoneCalendar} from "react-icons/ai";
import axios from "axios";

export default function contactMe() {
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
        bg="bgSecondary"
        justifyContent="center"
        minHeight="100vh"
        position="relative"
        zIndex={1}
      >
        <Flex
          backgroundImage="url(https://www.freepnglogos.com/uploads/bokeh-png/bokeh-background-requirements-inc-9.png)"
          bg={theme.colors.primary}
          borderRadius="xl"
          boxShadow={"rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}
          justifyContent="center"
          minHeight={"70vh"}
          minWidth={{base: "90vw", md: "90vw", xl: "90vw"}}
          mx="2"
          my={{base: 10, lg: 20}}
          zIndex={-1}
        >
          {/* left box */}
          <Grid autoFlow={{base: "row", lg: "column"}}>
            <Flex
              bg="bgContactMe"
              borderRadius="lg"
              boxShadow={"rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"}
              justifyContent="center"
              margin={10}
              height={{base: "400px", md: "450px", lg: "500px"}}
              width={{base: "300px", md: "350px", lg: "400px"}}
              // px={8}
            >
              {/*CONTENT LEFTBOX*/}
              <Flex
                align="center"
                bg="bgContactMe"
                borderRadius="xl"
                flexDirection="column"
                justify={{base: "center", md: "space-between"}}
                width="100%"
              >
                <Flex flexDirection="column" gap={8} p={6} w="100%">
                  <Flex align="center">
                    <Flex
                      align="center"
                      bg="bgSecondary"
                      borderRadius="100%"
                      fontWeight="600"
                      h="40px"
                      justifyContent="center"
                      // mx={4}
                      p={1.5}
                      w="40px"
                    >
                      <AiTwotoneCalendar fill="secondary" size="30" />
                    </Flex>
                    <Text
                      color="secondary"
                      fontFamily="body"
                      fontSize={{base: "lg", md: "xl"}}
                      mx={{base: 2, md: 6, lg: 16}}
                      textAlign="center"
                    >
                      Lunes a Viernes de 18hs a 21hs
                    </Text>
                  </Flex>

                  <Flex align="center" justify="space-between">
                    <Flex
                      align="center"
                      bg="bgSecondary"
                      borderRadius="100%"
                      fontWeight="600"
                      h="40px"
                      justifyContent="center"
                      w="40px"
                    >
                      <AiFillPhone fill="secondary" size="30" />
                    </Flex>
                    <Text
                      color="secondary"
                      fontFamily="body"
                      fontSize={{base: "lg", md: "xl"}}
                      m="auto"
                      textAlign="center"
                    >
                      3794 - 348353
                    </Text>
                  </Flex>
                  <Flex align="center" justify="space-between">
                    <Flex
                      align="center"
                      bg="bgSecondary"
                      borderRadius="100%"
                      fontWeight="600"
                      h="40px"
                      justifyContent="center"
                      w="40px"
                    >
                      <AiFillInstagram fill="secondary" size="30" />
                    </Flex>
                    <Text
                      color="secondary"
                      fontFamily="body"
                      fontSize={{base: "lg", md: "xl"}}
                      m="auto"
                    >
                      @grekashowroom
                    </Text>
                  </Flex>
                </Flex>
                <Flex height="300px" width="100%">
                  <iframe
                    allowFullScreen={true}
                    // borderbottomleftradius="15px"
                    // border-bottom-right-radius="15px"
                    frameBorder="0"
                    loading="lazy"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.703085237791!2d-58.83847798494288!3d-27.478501582887215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94456c996041c7e3%3A0xfa9ea756edccc92e!2sGral.%20Paz%201244%2C%20W3410BAY%20Corrientes!5e0!3m2!1ses-419!2sar!4v1651879176703!5m2!1ses-419!2sar"
                    style={{borderBottomLeftRadius: "15px", borderBottomRightRadius: "15px"}}
                    width="100%"
                  />
                </Flex>
              </Flex>
            </Flex>
            {/* contact box */}
            <Flex
              backgroundColor={"bgContactMe"}
              borderRadius="lg"
              boxShadow={"rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"}
              justifyContent={"center"}
              margin={10}
              height={{base: "400px", md: "420px", lg: "500px"}}
              width={{base: "300px", md: "350px", lg: "400px"}}
            >
              <Flex flexDirection={"column"} mx={2} my={{base: 5, lg: 10}} width="100%">
                <form onSubmit={handleSubmit}>
                  <Flex alignItems={"center"} justifyContent={"center"}>
                    <Text
                      alignItems={"center"}
                      color={"button"}
                      fontSize={{base: "28px", xl: "34px"}}
                      fontWeight={700}
                      justifySelf={"center"}
                    >
                      Contáctanos
                    </Text>
                  </Flex>
                  <FormControl>
                    <Input
                      _placeholder={{color: "gray"}}
                      bg={"bgContactMe"}
                      border={`2px solid #75CED4`}
                      borderRadius={"lg"}
                      color={"font"}
                      height="6px"
                      mx={4}
                      my={{base: 2, lg: 4}}
                      padding={5}
                      placeholder={"Nombre"}
                      size="sm"
                      type={"name"}
                      variant={"unstyled"}
                      width="90%"
                      onChange={(e) => setName(e.currentTarget.value)}
                    />
                  </FormControl>

                  <FormControl>
                    <Input
                      _placeholder={{color: "gray"}}
                      bg={"bgContactMe"}
                      border={`2px solid #75CED4`}
                      borderRadius={"lg"}
                      color={"font"}
                      height="6px"
                      mx={4}
                      my={{base: 2, lg: 4}}
                      padding={5}
                      placeholder={"Apellido"}
                      size="sm"
                      type={"surname"}
                      variant={"unstyled"}
                      width="90%"
                      onChange={(e) => setSurname(e.currentTarget.value)}
                    />
                  </FormControl>

                  <FormControl>
                    <Input
                      _placeholder={{color: "gray"}}
                      bg={"bgContactMe"}
                      border={`2px solid #75CED4`}
                      borderRadius={"lg"}
                      color={"font"}
                      height="6px"
                      mx={4}
                      my={{base: 2, lg: 4}}
                      padding={5}
                      placeholder={"Correo Electrónico"}
                      size="sm"
                      type={"email"}
                      variant={"unstyled"}
                      width="90%"
                      onChange={(e) => setEmail(e.currentTarget.value)}
                    />
                  </FormControl>

                  <FormControl>
                    <Textarea
                      _placeholder={{color: "gray"}}
                      bg={"bgContactMe"}
                      border={`2px solid #75CED4`}
                      borderRadius={"lg"}
                      color={"font"}
                      maxHeight="15px"
                      mx={4}
                      my={2}
                      padding={5}
                      placeholder={"Mensaje"}
                      size="sm"
                      variant={"unstyled"}
                      width="90%"
                      onChange={(e) => setMessage(e.currentTarget.value)}
                    />
                  </FormControl>
                  <Button
                    _hover={{
                      bg: "bgContactMe",
                      color: "button",
                      border: "2px",
                    }}
                    bg={"button"}
                    color={"bgContactMe"}
                    ml={4}
                    my={{base: 2, md: 4, lg: 6}}
                    type={"submit"}
                    width="90%"
                    onClick={(e) => handleSubmit(e)}
                  >
                    Enviar
                  </Button>
                </form>
              </Flex>
            </Flex>
          </Grid>
        </Flex>
      </Grid>
    </>
  );
}
