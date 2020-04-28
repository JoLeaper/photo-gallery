import React, { Component } from 'react'
import Header from './Header.js'
import ImageList from './ImageList.js'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ImageList />
      </div>
    )
  }
}
