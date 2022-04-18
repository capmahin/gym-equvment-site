import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/banners/banner1.jpg";
import banner2 from "../../../images/banners/banner2.jpg";
import banner3 from "../../../images/banners/Banner3.jpg";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          style={{ height: "500px" }}
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Gym Rules 1</h3>
          <p> Dumbbell,Barbel</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "500px" }}
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Gym Rules 2 </h3>
          <p>Squat, Branch , DeadLift.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "500px" }}
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Gym Rule 3</h3>
          <p>Discipline Life and Food</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
