import React from "react";
import {Carousel} from "react-responsive-carousel";
import Image from "next/image";

import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Prop {
  slides: string[];
}

const ImageSlider: React.FC<Prop> = ({slides}) => {
  return (
    <Carousel
      infiniteLoop
      autoPlay={true}
      dynamicHeight={true}
      emulateTouch={false}
      preventMovementUntilSwipeScrollTolerance={true}
      showArrows={true}
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
      swipeScrollTolerance={100}
    >
      {slides.map((slide, index) => {
        return <Image key={index} height={500} quality="100" src={slide} width={410} />;
      })}
    </Carousel>
  );
};

export default ImageSlider;
//       <ChakraNextImage key={index} height="500px" src={slide} width="410px" />;
