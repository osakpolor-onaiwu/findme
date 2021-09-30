import React, { useEffect } from "react";
import M from "materialize-css";
import { Carousel } from "react-materialize";

const Carousels = ({ samples }) => {
  const img = samples.map((sam) => {
    return sam.image;
  });

  const output = img.length ? (
    <Carousel
      carouselId="Carousel-33"
      images={[...img]}
      options={{
        fullWidth: true,
        indicators: true,
      }}
      className="carousel-images"
    />
  ) : (
    <div></div>
  );

  return <div>{output}</div>;
};

export default Carousels;
