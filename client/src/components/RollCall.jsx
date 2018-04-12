import React, { Component } from 'react';

const RollCall = (props) => {
  return (
    <div className="RollCallContainer">
      <div className="rollCallTitle">
        <div className="subTitle">Roll call!</div>
        <div className="title">Here are a few of the people supporting {props.projectTitle}</div>
      </div>
      <div className="backersGridContainer">{
        props.backers.slice(0, 8).map((backer) => {
          return (
            <div className="backerContainer">
              <div className="backerAvatar"><img src={backer.avatar}/></div>
              <div className="backerName">{backer.name}</div>
              <div className="backerProjectsBacked">{backer.projectsBacked}</div>
            </div>
          );  
        })
      }
      </div>
      <button id="seeMoreBackers">See more!</button>
    </div>
  );
}

export default RollCall;