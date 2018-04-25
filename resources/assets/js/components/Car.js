import React, { Component } from 'react';

const Car = ({car}) => {
  
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