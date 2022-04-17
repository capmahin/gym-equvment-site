import React from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Trainers from "../Trainers/Trainers";

const Home = () => {
  return (
    <>
      <h1>
        <Banner></Banner>
        <Services></Services>
        <Trainers></Trainers>
      </h1>
    </>
  );
};

export default Home;
