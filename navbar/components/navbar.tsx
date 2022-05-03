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
} from "@chakra-ui/react";
import {AiOutlineHome} from "react-icons/ai";
import {RiTShirtLine} from "react-icons/ri";
import {BsChatLeftDots} from "react-icons/bs";
import {AiOutlineSearch} from "react-icons/ai";
import {Link as ChakraLink} from "@chakra-ui/react";
import {HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon} from "@chakra-ui/icons";
import Link from "next/link";

import SearchBar from "./searchBar";

export default function WithSubnavigation(): JSX.Element {
  const {isOpen, onToggle} = useDisclosure();

  return (
    <Box>
      <Flex
        align={"center"}
        alignItems={"center"}
        // bgGradient={"linear-gradient(90deg, rgba(255,180,209,1) 0%, rgba(249,108,137,1) 100%)"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        borderStyle={"solid"}
        color={useColorModeValue("gray.600", "white")}
        height={"65px"}
      >
        <Flex
          alignItems={"center"}
          display={{base: "flex", md: "none"}}
          flex={{base: 1}}
          ml={{base: -2}}
        >
          <IconButton
            aria-label={"Toggle Navigation"}
            icon={isOpen ? <CloseIcon h={3} w={3} /> : <HamburgerIcon h={5} w={5} />}
            variant={"ghost"}
            onClick={onToggle}
          />
        </Flex>
        <Flex alignItems={"center"} flex={{base: 1}}>
          <Box>
            <Image height={12} objectFit="cover" src={"/assets/logo.png"} width={60} />
          </Box>
          <Flex
            alignItems="center"
            display={{base: "none", md: "flex"}}
            flex="1"
            justifyContent="center"
            ml={10}
          >
            <Flex flex="1">
              <input
                flex="1"
                fontFamily={"navbar"}
                placeholder="   ¿Qué mierda estas buscando hijo de puta?..."
                style={{
                  borderRadius: 10,
                  padding: "5px 15px",
                  width: "100%",
                  border: "1px solid #999",
                }}
                type="text"
              />
              <AiOutlineSearch size={20} style={{position: "relative", top: 7, right: "5%"}} />
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
  // const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkColor = "white";
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} marginLeft={5} spacing={6}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover placement={"bottom-start"} trigger={"hover"}>
            <PopoverTrigger>
              <Button
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
                alignItems="center"
                backgroundColor={"transparent"}
                borderRadius={7}
                color={"#222"}
                display={"flex"}
                flexDirection={"column"}
                fontFamily={"navbar"}
                fontSize={"sm"}
                fontWeight={500}
                pl={5}
                pr={5}
              >
                {navItem.icon && <navItem.icon color="#222" marginBottom={10} size={45} />}
                <Link href={navItem.href ?? "#"}>{navItem.label}</Link>
              </Button>
            </PopoverTrigger>

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

const DesktopSubNav = ({label, href, subLabel, icon}: NavItem) => {
  return (
    <Link href={href}>
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
  icon?: JSX.Element;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
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
        label: "Tops",
        // subLabel: "An exclusive list for contract work",
        href: "/categories/tops",
      },
      {
        label: "Abrigos",
        // subLabel: "An exclusive list for contract work",
        href: "/categories/abrigos",
      },
      {
        label: "Remeras",
        // subLabel: "An exclusive list for contract work",
        href: "/categories/remeras",
      },
    ],
  },
  {
    label: "Contactanos",
    href: "/contact-me",
    icon: BsChatLeftDots,
  },
];
