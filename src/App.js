import React, { Component } from 'react'
import Header from './Header.js'
import ImageList from './ImageList.js'
import hornData from './data.js'



export default class App extends Component {
  state = {
    title: '',
    description: '',
    horns: 1,
    keyword: ''
  };

  handleChange = (event) => {
    this.setState({
      horns: event.target.value
    });
  }

  handleInputChange = (event) => {
    this.setState({
      keyword: event.target.value
    })
  }

  handleNameChange = (event) => {
    this.setState({
      title: event.target.value
    })
  }

  handleDescriptionChange = (event) => {
    this.setState({
      description: event.target.value
    })
  }



  render() {
    const filteredCreatures = hornData
    .filter(item => item.horns >= this.state.horns)
    .filter(item => item.keyword.includes(this.state.keyword))
    .filter(item => item.title.includes(this.state.title))
    .filter(item => item.description.includes(this.state.description))

    return (
      <div>
        <Header />
        <p>
        Filter By Name:
       <input value={this.state.name} onChange={this.handleNameChange}>
        </input>
        </p>
        <p>
        Filter By Keywords:
        <input value={this.state.keyword} onChange={this.handleInputChange}>
        </input>
        </p>
        <p>
        Filter By Description:
        <input value={this.state.description} onChange={this.handleDescriptionChange}>
        </input> 
        </p>
        <span>Show Me Creatures With At Least...</span>
        <select onChange={this.handleChange}>
          <option value="1">One Horn</option>
          <option value="2">Two Horns</option>
          <option value="3">Three Horns</option>
          <option value="4">Four Horns</option>
        </select>
        
        <ImageList hornedCreatures={filteredCreatures}/>
      </div>
    )
  }
}
