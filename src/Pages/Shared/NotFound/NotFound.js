import React from "react";
import down from "../../../images/404.png";

const NotFound = () => {
  return (
    <div>
      <h2 className="text-secondary text-center">Rest the Muscle</h2>
      <img className="w-100 " src={down} alt="" />
    </div>
  );
};

export default NotFound;
