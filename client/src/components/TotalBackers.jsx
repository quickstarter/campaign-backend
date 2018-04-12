import React, { Component } from 'react';

const TotalBackers = (props) => {
  return (
    <div className="TotalBackersContainer">
      <div classNamt="title">
        {props.totalBackers} people are supporting {props.projectCreator}
      </div>
    </div>
  );
}

export default TotalBackers;