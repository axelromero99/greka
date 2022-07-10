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
      dynamicHeight={false}
      emulateTouch={false}
      showArrows={true}
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
    >
      {slides.map((slide, index) => {
        return <Image key={index} src={slide} transform={"scale(1.07)"} />;
      })}
    </Carousel>
  );
};

export default ImageSlider;
