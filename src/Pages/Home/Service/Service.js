import React from "react";
import "./Service.css";

const Service = ({ service }) => {
  const { name, img, description } = service;
  return (
    <div className="service">
      <img className="w-100" src={img} alt="" />
      <h2>Service:{name}</h2>
      <h5>
        <small>{description}</small>
      </h5>
      <button className="btn btn-secondary">Add-this:{name}</button>
    </div>
  );
};

export default Service;
