import React, { Component } from 'react'
import Fruits from './Fruits';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        fruits : [
          {
            name: "Apple", color: "red"
          },
          { name: "Orange", color: "orange"},
          { name: "Banana", color: "yellow"},
          { name: "Lemon", color: "green"}

        ]
    }
  }

  changeColor = (i) => {
    let color = ["black", "red", "blue", "white"]
    let newState = [...this.state.fruits]
    newState[i].color = color[Math.floor(Math.random() * newState.length)]
    this.setState({
      fruits: newState
    })
  }

  deleteColor = (i) => {
    let newState = [...this.state.fruits]
    newState.splice(i, 1)
    this.setState({
      fruits : newState
    })
  }

  
  render() {
    
    let fruit = this.state.fruits.map((fruit, i) => {

      
      return (<Fruits  
          key = {fruit.name}
          fruit = {fruit} 
          color = {fruit} 
          index={i} 
          changeColor = {this.changeColor}
          deleteColor = {this.deleteColor}
          />
      // i se refiere al parametro i y sirve para el props del archivo fruits props.anything(props.i)}
      )
    })

    return (
      <div>
        <h1>Component 1</h1>
        {fruit}
      </div>
    )
  }
}
