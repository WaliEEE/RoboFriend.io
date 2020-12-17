import React, { Component } from "react";

const Card = (props) => {
  let ran = Math.floor(Math.random() * 10) + 25;
  return (
    <div className="b--dark-blue bg-navy br3 ba bw3 b--none fl w-20 dim grow shadow-5">
      <img alt="robots" src={`https://robohash.org/test${props.id}`} />
      <div>
        <h3 className="tc">{props.name}</h3>
        <p className="tc"> {props.email}</p>
      </div>
    </div>
  );
};

export default Card;
