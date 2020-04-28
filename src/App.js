import React, { Component } from 'react'
import Header from './Header.js'
import ImageList from './ImageList.js'
import hornData from './data.js'



export default class App extends Component {
  state = {
    horns: 1
  };

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({
      horns: event.target.value
    });
  }
  render() {
    const filteredCreatures = hornData
    .filter(item => item.horns >= this.state.horns)

    return (
      <div>
        <Header />
        <select onChange={this.handleChange}>
          <option value="1">One Horn</option>
          <option value="2">Two Horns</option>
          <option value="3">Three Horns</option>
          <option value="4">Four Horns</option>
        </select>
        <p>Show Me Creatures With At Least...</p>
        <ImageList hornedCreatures={filteredCreatures}/>
      </div>
    )
  }
}
