import React, {useState} from "react";
import {Flex, Grid, Text, useTheme, FormControl, Input, Button, Textarea} from "@chakra-ui/react";
import {AiFillPhone, AiFillInstagram, AiTwotoneCalendar} from "react-icons/ai";
import {IoCalendarNumberSharp} from "react-icons/io5";
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
      <Grid
        bg="bgSecondary"
        justifyContent="center"
        minHeight="100vh"
        position="relative"
        zIndex={1}
      >
        <Flex
          bg="primary"
          borderRadius="xl"
          boxShadow={"rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}
          justifyContent="center"
          minHeight={"70vh"}
          mx={2}
          my={{base: 10, lg: 20}}
          styles={{
            backgroundImage:
              "url(https://www.freepnglogos.com/uploads/bokeh-png/bokeh-background-requirements-inc-9.png)",
          }}
          width={{base: "90vw", sm: "80vw", md: "75vw", lg: "90vw", xl: "85vw", "2xl": "80vw"}}
          zIndex={-1}
        >
          <Grid autoFlow={{base: "row", lg: "column"}} gridGap={{base: 0, lg: 16}} margin="auto">
            <Flex
              bg="bgContactMe"
              borderRadius="lg"
              boxShadow={"rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"}
              height={{base: "400px", md: "450px", xl: "500px", "2xl": "600px"}}
              justifyContent="center"
              margin={10}
              width={{base: "300px", md: "350px", xl: "400px", "2xl": "450px"}}
            >
              {/*ABOUT LEFTBOX*/}
              <Flex
                align="center"
                bg="bgContactMe"
                borderRadius="xl"
                flexDirection="column"
                justify={{base: "center", md: "space-between"}}
                width="100%"
              >
                <Flex flexDirection="column" gap={{base: 8, "2xl": 14}} p={6} w="100%">
                  <Flex align="center" pl={{base: 4, md: 8}}>
                    <Flex
                      align="center"
                      bg="bgSecondary"
                      borderRadius="100%"
                      fontWeight="600"
                      h={{base: "40px", "2xl": "50px"}}
                      justifyContent="center"
                      p={2}
                      w={{base: "40px", "2xl": "50px"}}
                    >
                      <IoCalendarNumberSharp fill="secondary" size="36" />
                    </Flex>
                    <Text
                      color="secondary"
                      fontFamily="body"
                      fontSize={{base: "lg", md: "xl", "2xl": "2xl"}}
                      mx={{base: 2, md: 6, lg: 13, xl: 16}}
                      textAlign="center"
                    >
                      Lunes a Viernes de 18hs a 21hs
                    </Text>
                  </Flex>
                  <Flex align="center" justify="space-between" pl={{base: 4, md: 8}}>
                    <Flex
                      align="center"
                      bg="bgSecondary"
                      borderRadius="100%"
                      fontWeight="600"
                      h={{base: "40px", "2xl": "50px"}}
                      justifyContent="center"
                      w={{base: "40px", "2xl": "50px"}}
                    >
                      <AiFillPhone fill="secondary" size="36" />
                    </Flex>
                    <Text
                      color="secondary"
                      fontFamily="body"
                      fontSize={{base: "lg", md: "xl", "2xl": "2xl"}}
                      m="auto"
                      textAlign="center"
                    >
                      3794 - 348353
                    </Text>
                  </Flex>
                  <Flex align="center" justify="space-between" pl={{base: 4, md: 8}}>
                    <Flex
                      align="center"
                      bg="bgSecondary"
                      borderRadius="100%"
                      fontWeight="600"
                      h={{base: "40px", "2xl": "50px"}}
                      justifyContent="center"
                      p={1}
                      w={{base: "40px", "2xl": "50px"}}
                    >
                      <AiFillInstagram fill="secondary" size="36" />
                    </Flex>
                    <Text
                      color="secondary"
                      fontFamily="body"
                      fontSize={{base: "lg", md: "xl", "2xl": "2xl"}}
                      m="auto"
                    >
                      <a
                        href="https://www.instagram.com/grekashowroom/?hl=es"
                        rel="noreferrer"
                        target="_blank"
                      >
                        @grekashowroom
                      </a>
                    </Text>
                  </Flex>
                </Flex>
                <Flex height="300px" width="100%">
                  <iframe
                    allowFullScreen={true}
                    frameBorder="0"
                    loading="lazy"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.703085237791!2d-58.83847798494288!3d-27.478501582887215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94456c996041c7e3%3A0xfa9ea756edccc92e!2sGral.%20Paz%201244%2C%20W3410BAY%20Corrientes!5e0!3m2!1ses-419!2sar!4v1651879176703!5m2!1ses-419!2sar"
                    style={{borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px"}}
                    width="100%"
                  />
                </Flex>
              </Flex>
            </Flex>
            {/*CONTACT RIGHTBOX*/}
            <Flex
              backgroundColor={"bgContactMe"}
              borderRadius="lg"
              boxShadow={"rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"}
              height={{base: "400px", md: "420px", lg: "450px", xl: "500", "2xl": "600px"}}
              justifyContent={"center"}
              margin={10}
              width={{base: "300px", md: "350px", xl: "400px", "2xl": "450px"}}
            >
              <Flex flexDirection={"column"} mx={2} my={{base: 5, lg: 6, "2xl": 8}} width="100%">
                <form onSubmit={handleSubmit}>
                  <Flex alignItems={"center"} justifyContent={"center"}>
                    <Text
                      alignItems={"center"}
                      color={"button"}
                      fontSize={{base: "28px", xl: "32px", "2xl": "40px"}}
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
                      size="md"
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
                      size="md"
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
                      size="md"
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
                      height={{base: "50", xl: "100px", "2xl": "160px"}}
                      maxHeight={{base: "50", xl: "100px", "2xl": "160px"}}
                      mx={4}
                      my={2}
                      padding={5}
                      placeholder={"Mensaje"}
                      size="md"
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
                    my={{base: 2, xl: 4, "2xl": 8}}
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
