import React from "react";
import {Image} from "@chakra-ui/react";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// If you want to use your own Selectors look up the Advancaed Story book examples
const ImageSlider = ({slides}) => {
  return (
    <Carousel
      infiniteLoop
      autoPlay={true}
      display="flex"
      dynamicHeight={false}
      emulateTouch={true}
      justifyContent="center"
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
    >
      {slides.map((slide, index) => {
        return <Image key={index} src={`${slide}`} />;
      })}
    </Carousel>
  );
};

export default ImageSlider;
