import React, {Component} from "react";
import Card from "../components/Card";

const CardList = ({robots}) => {

    return (
      <div>
        {robots.map((user, i) => {
          return (
            <Card 
            key={i} 
            id={user.id} 
            name={user.name} 
            email={user.email}     
            />
          );
        })}
      </div>
    );
};


export default CardList;