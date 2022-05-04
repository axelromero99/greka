import React from "react";
import {Image} from "@chakra-ui/react";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// If you want to use your own Selectors look up the Advancaed Story book examples
const ImageSlider = ({slides, width, height}) => {
  return (
    <Carousel autoPlay={true} showIndicators={false} infiniteLoop dynamicHeight={false} emulateTouch={true} showStatus={false} width={width} display="flex" justifyContent="center">
      {slides.map((slide, index) => {
        return <Image key={index} height={height} src={`/assets/products/${slide}`} width={width} />;
      })}
    </Carousel>
  );
};

export default ImageSlider;
