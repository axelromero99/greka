import React from "react";
import {Box} from "@chakra-ui/react";
import {GetServerSideProps} from "next";

import productApi from "../product/api";
import HomeBanner from "../home/components/HomeBanner";
import ImagesGrid from "../home/components/ImagesGrid";
import InfoSection from "../home/components/InfoSection";
import OffersSlider from "../home/components/OffersSlider";

const index: React.FC<{offersImages: string[]}> = ({offersImages}) => {
  return (
    <>
      <Box bg={"body"} width="100%" />
      <HomeBanner />
      <ImagesGrid />
      <InfoSection />
      {offersImages && <OffersSlider offersImages={offersImages} />}
      <Box bg={"body"} height="1px" width={"100%"} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const productsOffers = await productApi.listOffers();

  const offersImages = productsOffers.map((product) => {
    return product.image;
  });

  return {
    props: {
      offersImages,
    },
  };
};

export default index;
