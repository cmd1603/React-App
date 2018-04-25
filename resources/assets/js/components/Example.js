import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Car from './Car';
import AddCar from './AddCar';

/* Main Component */
class Example extends Component {

  constructor() {
  
    super();
    this.state = {
        cars: [],
        currentCar: null
    
    }
     this.handleAddCar = this.handleAddCar.bind(this);
  }

  componentDidMount() {
    /* fetch API in action */
    fetch('/api/cars')
        .then(response => {
            return response.json();
        })
        .then(cars => {
            this.setState({ cars });
        });
  }

 renderCars() {
        const listStyle = {
            listStyle: 'none',
            fontSize: '18px',
            lineHeight: '1.8em',
        }
    return this.state.cars.map((car, index) => {
        return (
            <li className="cars_list" key={ car.id } style={listStyle} onClick={ () =>this.handleClick(car)} >
                { car.make } { car.model }
            </li>      
        );
    });
  }

  handleClick(car) {
      this.setState({currentCar:car});
  }

   handleAddCar(car) {
     
    car.price = Number(car.price);
    fetch( 'api/cars/', {
        method:'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        
        body: JSON.stringify(car)
    })
    .then(response => {
        return response.json();
    })
    .then( data => {
       
        this.setState((prevState)=> ({
            cars: prevState.cars.concat(data),
            currentCar : data
        }))
    })
  }  
    
  render() {

   const mainDivStyle =  {
        display: "flex",
        flexDirection: "row"
    }
    
    const divStyle = {
       
        justifyContent: "flex-start",
        padding: '10px',
        width: '22%',
        padding: '20px 20px 20px 20px',
        margin: '30px 10px 10px 30px',
        background: 'navajowhite'
        
    }

    const headerStyle = {
        textAlign: 'center'
    }

    return (
        <div>
          <div style= {mainDivStyle}>
            <div style={divStyle}>
                <h1 style={headerStyle}> All cars </h1>
                  <ul>
                    { this.renderCars() }
                  </ul> 

            </div> 
                <Car car={this.state.currentCar} />
                <AddCar onAdd={this.handleAddCar} /> 
          </div>
              
        </div>
      
    );
  }
}

export default Example;

if (document.getElementById('root')) {
    ReactDOM.render(<Example />, document.getElementById('root'));
}

