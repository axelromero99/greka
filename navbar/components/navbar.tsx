import * as React from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Heading,
} from "@chakra-ui/react";
import {AiOutlineHome, AiOutlineSearch} from "react-icons/ai";
import {RiTShirtLine} from "react-icons/ri";
import {BsChatDots} from "react-icons/bs";
import {Link as ChakraLink} from "@chakra-ui/react";
import {HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon} from "@chakra-ui/icons";
import Link from "next/link";

import SearchBar from "./searchBar";

export default function WithSubnavigation(): JSX.Element {
  const {isOpen, onToggle} = useDisclosure();

  return (
    <Box>
      <Flex
        alignItems={"center"}
        backgroundColor={"bg"}
        height={"65px"}
        justifyContent={{base: "start"}}
      >
        <Flex
          alignItems={"center"}
          display={{base: "flex", md: "none"}}
          flex={{base: 0, md: 1}}
          ml={{base: -2}}
        >
          <IconButton
            aria-label={"Toggle Navigation"}
            icon={isOpen ? <CloseIcon h={3} w={3} /> : <HamburgerIcon h={5} w={5} />}
            ml={3}
            variant={"ghost"}
            onClick={onToggle}
          />
        </Flex>
        <Flex
          alignItems={"center"}
          flex={{base: 1}}
          justifyContent={{base: "center", md: "start"}}
          marginLeft={{base: -6, md: 5}}
        >
          <Box cursor={"pointer"}>
            <Link href={"/"}>
              <a>
                <Heading color={"#333"} fontFamily={"header"}>
                  Greka
                </Heading>
              </a>
            </Link>
          </Box>
          <Flex
            alignItems="center"
            color="#444"
            display={{base: "none", md: "flex"}}
            flex={"1"}
            justifyContent="center"
            ml={10}
          >
            <Flex maxWidth="900px" width="85%">
              <SearchBar />
            </Flex>
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>

      <Collapse animateOpacity in={isOpen}>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack
      direction={"row"}
      display={"flex"}
      flex={"1"}
      justifyContent={"end"}
      justifySelf={"end"}
      marginLeft={5}
      marginRight={3}
      spacing={3}
    >
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} bg={"transparent"}>
          <Popover placement={"bottom-start"} trigger={"hover"}>
            <Link href={navItem.href ? navItem.href : ""}>
              <a>
                <PopoverTrigger>
                  <Button
                    _focus={{
                      boxShadow: "none",
                    }}
                    _hover={{
                      bg: useColorModeValue("pink.50", "FF6F6F"),
                      color: "tertiary",
                    }}
                    alignItems={"center"}
                    backgroundColor={"transparent"}
                    borderRadius={7}
                    color={"tertiary"}
                    display={"flex"}
                    flexDirection={"column"}
                    fontFamily={"navbar"}
                    fontSize={"sm"}
                    fontWeight={500}
                    minHeight={"4rem"}
                    minW={"7rem"}
                    pl={5}
                    pr={5}
                    textDecoration={"none"}
                    transition={"all .2s ease"}
                  >
                    {navItem.icon === "AiOutlineHome" && (
                      <AiOutlineHome color={"tertiary"} size={"30"} />
                    )}
                    {navItem.icon === "RiTShirtLine" && (
                      <RiTShirtLine color={"tertiary"} size={"30"} />
                    )}
                    {navItem.icon === "BsChatDots" && <BsChatDots color={"tertiary"} size={"30"} />}
                    <Text fontWeight={500} pt={1}>
                      {navItem.label}
                    </Text>
                  </Button>
                </PopoverTrigger>
              </a>
            </Link>

            {navItem.children && (
              <PopoverContent
                _focus={{boxShadow: "none"}}
                bg={popoverContentBgColor}
                border={0}
                boxShadow={"xl"}
                minW={"sm"}
                p={4}
                rounded={"xl"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({label, href, subLabel, icon}: NavItem) => {
  return (
    <Link href={href}>
      <a>
        <Box
          _hover={{bg: useColorModeValue("pink.50", "gray.900")}}
          cursor={"pointer"}
          display={"block"}
          p={2}
          role={"group"}
          rounded={"md"}
        >
          <Stack align={"center"} direction={"row"}>
            <Box>
              <Text _groupHover={{color: "pink.400"}} fontWeight={500} transition={"all .3s ease"}>
                {label}
              </Text>
              <Text fontSize={"sm"}>{subLabel}</Text>
            </Box>
            <Flex
              _groupHover={{opacity: "100%", transform: "translateX(0)"}}
              align={"center"}
              flex={1}
              justify={"flex-end"}
              opacity={0}
              transform={"translateX(-10px)"}
              transition={"all .3s ease"}
            >
              <Icon as={ChevronRightIcon} color={"pink.400"} h={5} w={5} />
            </Flex>
          </Stack>
        </Box>
      </a>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue("white", "gray.800")} display={{md: "none"}} p={4}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({label, children, href}: NavItem) => {
  const {isOpen, onToggle} = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        _hover={{
          textDecoration: "none",
        }}
        align={"center"}
        as={ChakraLink}
        href={href ?? "#"}
        justify={"space-between"}
        py={2}
      >
        <Text color={useColorModeValue("gray.600", "gray.200")} fontWeight={600}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            h={6}
            transform={isOpen ? "rotate(180deg)" : ""}
            transition={"all .25s ease-in-out"}
            w={6}
          />
        )}
      </Flex>

      <Collapse animateOpacity in={isOpen} style={{marginTop: "0!important"}}>
        <Stack
          align={"start"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          borderLeft={1}
          borderStyle={"solid"}
          mt={2}
          pl={4}
        >
          {children &&
            children.map((child) => (
              <ChakraLink key={child.label} href={child.href} py={2}>
                {child.label}
              </ChakraLink>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  icon?: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Inicio",
    href: "/",
    icon: "AiOutlineHome",
  },
  {
    label: "Productos",
    href: "/categories/todos",
    icon: "RiTShirtLine",
    children: [
      {
        label: "Todos",
        href: "/categories/todos",
      },
      {
        label: "Jeans",
        href: "/categories/jeans",
      },
      {
        label: "Tops/Remeras",
        href: "/categories/tops-remeras",
      },
      {
        label: "Shorts/Polleras",
        href: "/categories/shorts-polleras",
      },
      {
        label: "Abrigos",
        href: "/categories/abrigos",
      },
      {
        label: "Vestidos",
        href: "/categories/vestidos",
      },
    ],
  },
  {
    label: "Contactanos",
    href: "/contact-me",
    icon: "BsChatDots",
  },
];
