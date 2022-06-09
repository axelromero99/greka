import React from "react";
import {Grid, GridItem, Stack, Center, Box} from "@chakra-ui/react";
import Link from "next/link";

const ImagesGrid = () => {
  return (
    <Center bg="bg" h="100vh" margin={0}>
      <Stack width="55%">
        <Grid templateColumns="repeat(4, 1fr)" templateRows="repeat(2, 1fr)">
          <GridItem colSpan={2} height="40vh">
            <Link href="/categories/tops-remeras">
              <a>
                <Box
                  bgImage={
                    "https://images.pexels.com/photos/8929812/pexels-photo-8929812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=500&dpr=1"
                  }
                  height="100%"
                  width="100%"
                />
              </a>
            </Link>
          </GridItem>

          <GridItem colSpan={2} height="40vh">
            <Link href="/categories/shorts-polleras">
              <a>
                <Box
                  bgImage={
                    "https://media.istockphoto.com/photos/beautiful-woman-smiling-picture-id507904690?k=20&m=507904690&s=612x612&w=0&h=AyPWlWtfsIE7v-WXyamX2f_ggqzPn4yka1QRTyhhbok="
                  }
                  height="100%"
                  width="100%"
                />
              </a>
            </Link>
          </GridItem>
          <GridItem colSpan={4} height="40vh">
            <Link href="/categories/jeans">
              <a>
                <Box
                  bgImage={
                    "https://images.pexels.com/photos/2129970/pexels-photo-2129970.jpeg?auto=compress&cs=tinysrgb&w=1200&h=500&dpr=1"
                  }
                  height="100%"
                  width="100%"
                />
              </a>
            </Link>
          </GridItem>
        </Grid>
      </Stack>
    </Center>
  );
};

export default ImagesGrid;
