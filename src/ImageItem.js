import React, { Component } from 'react'

export default class ImageItem extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.hornedCreature.title}</h1>
                <img src={this.props.hornedCreature.url} alt={this.props.hornedCreature.url}/>
                <p>{this.props.hornedCreature.description}</p>
                <p>{this.props.hornedCreature.horns}</p>
            </div>
        )
    }
}
