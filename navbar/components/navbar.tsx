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
  Image,
  Fade,
  Heading,
} from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";
import { RiTShirtLine } from "react-icons/ri";
import { BsChatDots } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { Link as ChakraLink } from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import Link from "next/link";

import SearchBar from "./searchBar";

export default function WithSubnavigation(): JSX.Element {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        alignItems={"center"}
        justifyContent={{ base: "start" }}
        // bgGradient={"linear-gradient(90deg, rgba(255,180,209,1) 0%, rgba(249,108,137,1) 100%)"}
        backgroundColor={"bg"}
        // borderColor={useColorModeValue("gray.200", "gray.900")}
        // borderStyle={"solid"}
        // color={useColorModeValue("gray.600", "white")}
        height={"65px"}
      >
        <Flex
          alignItems={"center"}
          display={{ base: "flex", md: "none" }}
          flex={{ base: 0, md: 1 }}
          ml={{ base: -2 }}
        >
          <IconButton
            aria-label={"Toggle Navigation"}
            icon={
              isOpen ? <CloseIcon h={3} w={3} /> : <HamburgerIcon h={5} w={5} />
            }
            variant={"ghost"}
            onClick={onToggle}
            ml={3}
          />
        </Flex>
        <Flex
          marginLeft={{ base: -6, md: 5 }}
          alignItems={"center"}
          justifyContent={{ base: "center", md: "start" }}
          flex={{ base: 1 }}
        >
          <Box cursor={"pointer"}>
            <Link href={"/"}>
              <Heading fontFamily={"header"} color={"#333"}>
                Grikas
              </Heading>
              {/*<Image height={12} objectFit="cover" src={"/assets/logo.png"} width={60} />*/}
            </Link>
          </Box>
          <Flex
            alignItems={"center"}
            color={"tertiary"}
            display={{ base: "none", md: "flex" }}
            flex={"1"}
            justifyContent={"center"}
            ml={10}
          >
            <Flex
              flex={"2"}
              justifyContent={"center"}
              width={"85%"}
              maxWidth={"900px"}
            >
              <input
                background-color="bg"
                flex="2"
                fontFamily={"navbar"}
                placeholder="   ¿Qué mierda estas buscando hijo de puta?..."
                style={{
                  borderRadius: 10,
                  padding: "5px 15px",
                  border: "1px solid #a2a2a2",
                  width: "100%",
                }}
                type="text"
              />
              <AiOutlineSearch
                size={20}
                style={{ position: "relative", top: 7, right: "6%" }}
              />
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
      marginLeft={5}
      spacing={3}
      flex={"1"}
      display={"flex"}
      justifySelf={"end"}
      justifyContent={"end"}
      marginRight={3}
    >
      {NAV_ITEMS.map((navItem) => (
        <Box
          key={navItem.label}
          as={Link}
          bg={"transparent"}
          href={navItem.href ?? "#"}
        >
          <Popover placement={"bottom-start"} trigger={"hover"}>
            <Link href={navItem.href ?? "#"}>
              <a>
                <PopoverTrigger>
                  <Button
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
                    transition={"all .2s ease"}
                    textDecoration={"none"}
                  >
                    {navItem.icon && (
                      <navItem.icon color={"tertiary"} size={"30"} />
                    )}
                    <Text fontWeight={500} pt={1}>
                      {navItem.label}
                    </Text>
                  </Button>
                </PopoverTrigger>
              </a>
            </Link>

            {navItem.children && (
              <PopoverContent
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

const DesktopSubNav = ({ label, href, subLabel, icon }: NavItem) => {
  return (
    <Link href={href}>
      <Box
        _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
        cursor={"pointer"}
        display={"block"}
        p={2}
        role={"group"}
        rounded={"md"}
      >
        <Stack align={"center"} direction={"row"}>
          <Box>
            <Text
              _groupHover={{ color: "pink.400" }}
              fontWeight={500}
              transition={"all .3s ease"}
            >
              {label}
            </Text>
            <Text fontSize={"sm"}>{subLabel}</Text>
          </Box>
          <Flex
            _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
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
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      display={{ md: "none" }}
      p={4}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

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
        <Text
          color={useColorModeValue("gray.600", "gray.200")}
          fontWeight={600}
        >
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

      <Collapse animateOpacity in={isOpen} style={{ marginTop: "0!important" }}>
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
  icon?: JSX.Element;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    href: "/",
    icon: AiOutlineHome,
  },
  {
    label: "Productos",
    href: "/categories/todos",
    icon: RiTShirtLine,
    children: [
      {
        label: "Todos",
        // subLabel: "Find your dream design job",
        href: "/categories/todos",
      },
      {
        label: "Jeans",
        // subLabel: "Find your dream design job",
        href: "/categories/jeans",
      },
      {
        label: "Tops-Remeras",
        // subLabel: "An exclusive list for contract work",
        href: "/categories/tops-remeras",
      },
      {
        label: "Shorts-Polleras",
        // subLabel: "An exclusive list for contract work",
        href: "/categories/shorts-polleras",
      },
      {
        label: "Vestidos",
        // subLabel: "An exclusive list for contract work",
        href: "/categories/vestidos",
      },
    ],
  },
  {
    label: "Contactanos",
    href: "/contact-me",
    icon: BsChatDots,
  },
];
