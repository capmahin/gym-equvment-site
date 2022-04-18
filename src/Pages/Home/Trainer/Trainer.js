import React from "react";

const Trainer = ({ trainer }) => {
  const { name, img } = trainer;
  return (
    <div className="g-5 col-sm-12 col-md-6 col-lg-4">
      <div className="card  " style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h5 className="card-text">
            A personal trainer is an individual who has earned a certification
            that demonstrates they have achieved a level of competency for
            creating and delivering safe and effective exercise programs for
            apparently healthy individuals and groups or those with medical
            clearance to exercise. They motivate clients by collaborating to set
            goals, providing meaningful feedback, and by being a reliable source
            for accountability.
          </h5>
          <a href="#" className="btn btn-secondary">
            About
          </a>
        </div>
      </div>
    </div>
  );
};

export default Trainer;
