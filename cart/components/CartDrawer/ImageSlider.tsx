import React from "react";
import {Image} from "@chakra-ui/react";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Prop {
  slides: string[];
}

const ImageSlider: React.FC<Prop> = ({slides}) => {
  return (
    <Carousel
      infiniteLoop
      autoPlay={true}
      //   display="flex"
      //   justifyContent="center"
      dynamicHeight={false}
      emulateTouch={false}
      showArrows={false}
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
    >
      {slides.map((slide, index) => {
        return (
          <Image key={index} height={{base: "400px", md: "490px"}} src={slide} width="370px" />
        );
      })}
    </Carousel>
  );
};

export default ImageSlider;
