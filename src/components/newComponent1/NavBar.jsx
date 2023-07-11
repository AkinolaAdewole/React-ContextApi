import React, { Component } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

export default class NavBar extends Component {
    // Use Static properties
    static  contextType=ThemeContext
  render() {
    console.log(this.context)
    // destructure the component
    const {isLightTheme, light, dark  }=this.context;
    const theme =  isLightTheme ? light : dark;
    return (
    <>
                <nav style={{background:theme.ui, color:theme.syntax}}>
                    <h1>Context App</h1>

                    <ul>
                        <li>Home</li>
                        <li>Contact</li>
                        <li>About</li>
                    </ul>
                </nav>

              
    </>  
    )
   
  }
}
