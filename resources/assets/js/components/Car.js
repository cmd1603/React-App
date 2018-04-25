import React, { Component } from 'react';
const Car = ({car}) => {
    
  const divStyle = {
  }
 
  //if the props car is null, return Product doesn't exist
  if(!car) {
    return(<div style={divStyle}></div>);
  }
     
  //Else, display the car data
  return(  
    <div style={divStyle}> 
      <h2> {car.make} {car.model} </h2>
      <p> {car.description} </p>
      <h3> Status {car.availability ? 'Available' : 'Out of stock'} </h3>
      <h3> Price : ${car.price} </h3>
    </div>
  )
}
 
export default Car ;