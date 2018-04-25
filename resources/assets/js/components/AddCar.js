import React, { Component } from 'react';

class AddCar extends Component {

  constructor(props) {
    super(props);
       this.state = {
          newCar: {
              make: '',
              model: '',
              description: '',
              price: 0,
              availability: 0
          }
        }
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  
  handleInput(key, e) {
    
    var state = Object.assign({}, this.state.newCar); 
    state[key] = e.target.value;
    this.setState({newCar: state });
  }

  handleSubmit(e) {

    e.preventDefault();

    this.props.onAdd(this.state.newCar);
    console.log(this.state.newCar);
  }

  render() {
    const divStyle = {
      position: 'absolute',
      left: '5%',
      top: '62%',
      flexDirection: 'space-between',
      
      marginLeft: '30px'
    }
    
    const inputStyle = {
      margin: '0px 10px 0px 10px'
    }
    return(
      <div> 
       
        <div style={divStyle}> 
         <h2> Add new car </h2>
        <form onSubmit={this.handleSubmit}>

          <label> 
            Make: 
            <input style={inputStyle} type="text" onChange={(e)=>this.handleInput('make',e)} />
          </label>
          <label> 
            Model: 
            {/*On every keystroke, the handeInput method is invoked */}
            <input style={inputStyle} type="text" onChange={(e)=>this.handleInput('model',e)} />
          </label>          
          <label> 
            Description: 
            <input style={inputStyle}  type="text" onChange={(e)=>this.handleInput('description',e)} />
          </label>
          
          <label>
            Price:
            <input style={inputStyle}  type="number" onChange={(e)=>this.handleInput('price', e)}/>
          </label>

          <input style={inputStyle}  type="submit" value="Submit" />
        </form>
      </div>
    </div>)
  }
}

export default AddCar;