import React from "react";
import {Image} from "@chakra-ui/react";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// If you want to use your own Selectors look up the Advancaed Story book examples
const ImageSlider = ({slides}) => {
  return (
    <Carousel autoPlay={true} infiniteLoop dynamicHeight={false} emulateTouch={true} showStatus={false} width={550}>
      {slides.map((slide, index) => {
        return <Image key={index} height={600} src={`/assets/products/${slide}`} width={60} />;
      })}
    </Carousel>
  );
};

export default ImageSlider;
