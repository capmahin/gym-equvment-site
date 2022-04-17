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
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
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