import React from "react";
import trainer1 from "../../../images/trainers/tariner1.jpg";
import trainer2 from "../../../images/trainers/trainer2.jpg";
import trainer3 from "../../../images/trainers/trainer3.jpg";
import trainer4 from "../../../images/trainers/trainer4.jpg";
import trainer5 from "../../../images/trainers/trainer5.jpg";
import trainer6 from "../../../images/trainers/trainer6.jpg";
import Trainer from "../Trainer/Trainer";

const Trainers = () => {
  const trainers = [
    { id: 1, name: "shon macmian", img: trainer1 },
    { id: 2, name: "Will barg", img: trainer2 },
    { id: 3, name: "matro Boison", img: trainer3 },
    { id: 4, name: "Bili Gray", img: trainer4 },
    { id: 4, name: "Kevin Lavron", img: trainer5 },
    { id: 4, name: "Arnold Stive", img: trainer6 },
  ];
  return (
    <div id="trainers" className="container">
      <h1 className="text-primary text-center">Our-Trainers</h1>
      <div className="row">
        {trainers.map((trainer) => (
          <Trainer key={trainer.id} trainer={trainer}></Trainer>
        ))}
      </div>
    </div>
  );
};

export default Trainers;
