import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <div className='fullHeader'>
               <img id='reactLogo' alt='react Logo' src={process.env.PUBLIC_URL + '/logo512.png'} / >
                
            </div>
        )
    }
}
