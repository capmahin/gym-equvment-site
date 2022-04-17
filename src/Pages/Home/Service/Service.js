import React from "react";

const Service = ({ service }) => {
  const { name, img, description } = service;
  return (
    <div>
      <img src={img} alt="" />
      <h1>Service:{name}</h1>
    </div>
  );
};

export default Service;
