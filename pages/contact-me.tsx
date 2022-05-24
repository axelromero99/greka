import React, {useState} from "react";
import {
  Flex,
  Grid,
  Text,
  useTheme,
  FormControl,
  Input,
  Button,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import {AiFillEnvironment, AiFillPhone, AiFillInstagram, AiTwotoneCalendar} from "react-icons/ai";
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
        autoFlow={{base: "row", md: "row", xl: "column"}}
        bg={"bgSecondary"}
        justifyContent="center"
        minHeight={"100vh"}
        // my={20}
        position="relative"
        zIndex={1}
      >
        <Flex
          bg={theme.colors.primary}
          borderRadius={15}
          boxShadow={"rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}
          justifyContent="center"
          marginY={20}
          minHeight={"70vh"}
          minWidth={{base: "90vw", md: "90vw", xl: "90vw"}}
          style={{
            backgroundImage:
              "url(https://www.freepnglogos.com/uploads/bokeh-png/bokeh-background-requirements-inc-9.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            justifyContent: "center",
            alignItems: "center",
          }}
          zIndex={-1}
        >
          {/* left box */}
          <Grid autoFlow={{base: "row", md: "row", xl: "column"}} gap="4vw">
            <Flex
              bg={"bgContactMe"}
              borderRadius={15}
              boxShadow={"rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"}
              height={{base: "80vh", md: "70vh", xl: "100vh"}}
              justifyContent={"center"}
              margin={"10vh 0"}
              width={{base: "70vw", md: "50vw", xl: "40vw"}}
            >
              {/*CONTENT LEFTBOX*/}
              <Flex
                alignItems={"center"}
                flexDirection="column"
                height={{base: "80vh", md: "70vh", xl: "90vh"}}
                justifyItems={"center"}
                width={{base: "90vw", md: "40vw", xl: "35vw"}}
              >
                <Grid
                  height={{base: "80vh", md: "100%", xl: "100%"}}
                  justifySelf={"center"}
                  w={{base: "60vw", md: "40vw", xl: "25vw"}}
                >
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
                        <AiTwotoneCalendar fill="secondary" size="30" />
                      </Flex>
                      <Text
                        alignSelf={"center"}
                        color={"secondary"}
                        fontFamily={"body"}
                        fontSize={"xl"}
                      >
                        Lunes a Viernes de 18hs a 21hs
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
                        alignSelf={"center"}
                        color={"secondary"}
                        fontFamily={"body"}
                        fontSize={"xl"}
                      >
                        3794 - 348353
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
                        alignSelf={"center"}
                        color={"secondary"}
                        fontFamily={"body"}
                        fontSize={"xl"}
                      >
                        @grekashowroom
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex>
                    <iframe
                      allowFullScreen={true}
                      frameBorder="0"
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.703085237791!2d-58.83847798494288!3d-27.478501582887215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94456c996041c7e3%3A0xfa9ea756edccc92e!2sGral.%20Paz%201244%2C%20W3410BAY%20Corrientes!5e0!3m2!1ses-419!2sar!4v1651879176703!5m2!1ses-419!2sar"
                      style={{
                        borderRadius: "15px",
                        height: "100%",
                        width: "100%",
                      }}
                      width="100%"
                    />
                  </Flex>
                </Grid>
              </Flex>
            </Flex>
            {/* right box */}
            <Flex
              backgroundColor={"bgContactMe"}
              borderRadius={15}
              boxShadow={"rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"}
              height={{base: "75%", md: "78%", lg: "85%", xl: "100vh"}}
              justifyContent={"center"}
              my={"10vh"}
              width={{base: "60w", md: "40vw", xl: "40vw"}}
            >
              <Flex flexDirection={"column"} width={{base: "100%", md: "100%", xl: "35vw"}}>
                <form style={{height: "100%"}} onSubmit={handleSubmit}>
                  <Grid
                    gap={"5vh"}
                    // alignContent={"center"}
                    h={"100%"}
                    justifyContent={"center"}
                  >
                    <Flex alignItems={"center"} justifyContent={"center"}>
                      <Text
                        alignItems={"center"}
                        color={"rgba(255,111,111,0.80)"}
                        fontSize={{base: "28px", xl: "34px"}}
                        // marginY={"1vh"}
                        // textShadow={`2px 2px 1px #75CED4`}
                        fontWeight={700}
                        justifySelf={"center"}
                      >
                        Contáctanos
                      </Text>
                    </Flex>
                    <FormControl>
                      <Input
                        border={`4px solid #75CED4`}
                        borderRadius={"30px"}
                        fontSize={"2xl"}
                        _placeholder={{color: "gray"}}
                        bg={"bgContactMe"}
                        color={"black"}
                        height={{
                          base: "5vh",
                          md: "6vh",
                          lg: "5vh",
                          xl: "5vh",
                        }}
                        marginLeft={2}
                        padding={"2rem"}
                        // size={"md"}
                        placeholder={"Nombre"}
                        type={"name"}
                        variant={"unstyled"}
                        width={{base: "90%", xl: "40vh"}}
                        onChange={(e) => setName(e.currentTarget.value)}
                        // width={"100%"}
                      />
                    </FormControl>

                    <FormControl>
                      <Input
                        border={`4px solid #75CED4`}
                        borderRadius={"30px"}
                        fontSize={"2xl"}
                        _placeholder={{color: "gray"}}
                        bg={"bgContactMe"}
                        color={"black"}
                        height={{
                          base: "5vh",
                          md: "6vh",
                          lg: "5vh",
                          xl: "5vh",
                        }}
                        marginLeft={2}
                        padding={"2rem"}
                        // size={"lg"}
                        placeholder={"Apellido"}
                        type={"surname"}
                        variant={"unstyled"}
                        width={{base: "90%", xl: "40vh"}}
                        onChange={(e) => setSurname(e.currentTarget.value)}
                        // width={"100%"}
                      />
                    </FormControl>

                    <FormControl>
                      <Input
                        border={`4px solid #75CED4`}
                        borderRadius={"30px"}
                        fontSize={"2xl"}
                        _placeholder={{color: "gray"}}
                        bg={"bgContactMe"}
                        color={"black"}
                        height={{
                          base: "5vh",
                          md: "6vh",
                          lg: "5vh",
                          xl: "5vh",
                        }}
                        marginLeft={2}
                        padding={"2rem"}
                        // size={"lg"}
                        placeholder={"Correo Electrónico"}
                        type={"email"}
                        variant={"unstyled"}
                        width={{base: "90%", xl: "40vh"}}
                        onChange={(e) => setEmail(e.currentTarget.value)}
                        // width={"100%"}
                      />
                    </FormControl>

                    <FormControl>
                      <Textarea
                        border={`4px solid #75CED4`}
                        borderRadius={"30px"}
                        fontSize={"2xl"}
                        _placeholder={{color: "gray"}}
                        bg={"bgContactMe"}
                        color={"black"}
                        height={{
                          base: "5vh",
                          md: "6vh",
                          lg: "5vh",
                          xl: "5vh",
                        }}
                        marginLeft={2}
                        padding={"2rem"}
                        placeholder={"Mensaje"}
                        size={"lg"}
                        variant={"unstyled"}
                        onChange={(e) => setMessage(e.currentTarget.value)}
                      />
                    </FormControl>
                    <Button
                      _active={{
                        bg: useColorModeValue("pink.50", "gray.900"),
                        color: "rgba(255,111,111,0.75)",
                      }}
                      _hover={{
                        bg: "rgba(255,111,111,0.75)" || useColorModeValue("gray.300", "FF6F6F"),
                        color: "white",
                      }}
                      bg={"rgba(255,111,111,0.95)"}
                      color={"white"}
                      marginLeft={2}
                      type={"submit"}
                      width={{base: "90%", xl: "40vh"}}
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
