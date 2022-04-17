import React from "react";
import './Service.css'

const Service = ({ service }) => {
  const { name, img, description } = service;
  return (
    <div className="service">
      <img src={img} alt="" />
      <h2>Service:{name}</h2>
      <p>
        <small>Ds:{description}</small>
      </p>
      <button>Add-this:{name}</button>
    </div>
  );
};

export default Service;
