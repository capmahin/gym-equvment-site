import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, name, img, description } = service;
  const navigate = useNavigate();
  const navigateToServiceDetail = (id) => {
    navigate(`service/${id}`);
  };
  return (
    <div className="service">
      <img className="w-100" src={img} alt="" />
      <h2>Service:{name}</h2>
      <h5>
        <small>{description}</small>
      </h5>
      <button
        onClick={() => navigateToServiceDetail(id)}
        className="btn btn-secondary"
      >
        Add-this:{name}
      </button>
    </div>
  );
};

export default Service;
