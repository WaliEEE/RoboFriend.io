import React, { Component } from "react";

const Card = (props) => {
  //let ran = Math.floor(Math.random() * 10) + 25;
  return (
    <div className="b--dark-blue bg-navy dim grow shadow-10 ba bw1 tc pa5 dib">
      <img alt="robots" src={`https://robohash.org/test${props.id}?size=200x200`} />
      <div>
        <h3 className="tc">{props.name}</h3>
        <p className="tc"> {props.email}</p>
      </div>
    </div>
  );
};

export default Card;
