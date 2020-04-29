import React, { Component } from 'react'
import './ImageItem.css'

export default class ImageItem extends Component {
    render() {
        return (
            <div className='itemBox'>
                <li>
                    <h1>{this.props.hornedCreature.title}</h1>
                    <img src={this.props.hornedCreature.url} alt={this.props.hornedCreature.url}/>
                    <p>{this.props.hornedCreature.description}</p>
                    <p>Number of Horns: {this.props.hornedCreature.horns}</p>
                </li>
            </div>
        )
    }
}
