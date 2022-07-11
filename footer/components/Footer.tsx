import React from "react";
import {Text, Image, Container, Link, Flex, Divider, Heading} from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
    <>
      <Container
        alignItems={{base: "start", md: "center"}}
        backgroundColor="bg"
        display="flex"
        flexDirection={{base: "column", md: "row"}}
        // height="20"
        justifyContent={{base: "center", md: "center"}}
        // margin="0"
        maxW="100%"
        textAlign={{base: "left", md: "center"}}
      >
        <Flex direction="column" width="100%">
          <Flex
            alignItems="center"
            flexDirection={{base: "column", md: "row"}}
            gap="2"
            justifyContent="center"
            my="4"
            width="100%"
          >
            <Text color="tertiary" fontFamily="body" fontWeight={500} textAlign={"center"}>
              © Copyright {new Date().getFullYear()}. GREKA SHOWROOM
            </Text>
            <Flex position={{md: "absolute"}} right="6">
              <Link isExternal href={"https://www.instagram.com/grekashowroom/"} marginX={2}>
                <Flex
                  alignItems="center"
                  backgroundColor={"transparent"}
                  borderRadius={9999}
                  height={8}
                  justifyContent={"center"}
                  opacity={0.7}
                  width={8}
                >
                  <Image src={"/assets/icons/instagram.svg"} />
                </Flex>
              </Link>
              <Link
                isExternal
                href={
                  "https://mail.google.com/mail/?view=cm&source=mailto&to=grekashowroom@gmail.com"
                }
              >
                <Flex
                  alignItems="center"
                  backgroundColor={"transparent"}
                  borderRadius={9999}
                  color={"tertiary"}
                  height={8}
                  justifyContent="center"
                  opacity={0.7}
                  paddingBottom={0.5}
                  width={8}
                >
                  <Image src={"/assets/icons/envelope.svg"} />
                </Flex>
              </Link>
            </Flex>
          </Flex>
          <Divider borderBottomWidth="2px" opacity="0.5" w="100%" />
          <Text color="tertiary" fontFamily="body" my="4" textAlign="center">
            Created by {"{ riskOfDev }"}
          </Text>
        </Flex>
      </Container>
    </>
  );
};

export default Footer;
