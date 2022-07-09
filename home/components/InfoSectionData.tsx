import React from "react";
import {Box, Center, Text} from "@chakra-ui/react";
import {motion} from "framer-motion";

interface IconWithTextPropTypes {
  title: string;
  description: string;
  Icon: React.FC<{size: number}>;
  animateIn: boolean;
  delayValue: number;
}

const InfoSectionData: React.FC<IconWithTextPropTypes> = ({
  title,
  description,
  Icon,
  animateIn,
  delayValue,
}) => {
  const IconWithTextVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: (delayValue: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delayValue,
        ease: "easeOut",
      },
    }),
  };

  return (
    <Center
      alignItems={"center"}
      animate={animateIn ? "visible" : ""}
      as={motion.div}
      custom={delayValue}
      flexDirection={{
        base: "column",
        md: "row",
      }}
      initial="hidden"
      marginX={10}
      marginY={5}
      variants={IconWithTextVariants}
    >
      <Box border="1px solid white" borderRadius={"50%"} padding={3}>
        <Icon size={40} />
      </Box>
      <Box
        alignItems={{
          base: "center",
          md: "start",
        }}
        display={"flex"}
        flexDirection={"column"}
        marginLeft={{
          base: 0,
          md: 3,
        }}
        marginTop={2}
      >
        <Text fontWeight={800}>{title}</Text>
        <Text fontSize={"sm"} fontWeight={500}>
          {description}
        </Text>
      </Box>
    </Center>
  );
};

export default InfoSectionData;
