import React, { Component } from 'react'
import ImageItem from './ImageItem.js'
import './ImageList.css'

export default class ImageList extends Component {
    
    render() {
        const imageItems = this.props.hornedCreatures.map(hornObject => {
            return <ImageItem hornedCreature={hornObject} />
        })
        return (
            <ul className ='listContainer'>
            { imageItems }
            </ul>
        )
    }
}
