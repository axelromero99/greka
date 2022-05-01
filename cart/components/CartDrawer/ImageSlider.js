import React from "react";
import {Image} from "@chakra-ui/react";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// If you want to use your own Selectors look up the Advancaed Story book examples
const ImageSlider = ({slides}) => {
  return (
    <Carousel infiniteLoop dynamicHeight={true} emulateTouch={true} showStatus={false}>
      {slides.map((slide, index) => {
        return <Image key={index} height="auto" src={`/assets/products/${slide}`} width="800px" />;
      })}
    </Carousel>
  );
};

export default ImageSlider;
