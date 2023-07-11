import React, { Component } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

export default class NavBar extends Component {
    static  contextType=ThemeContext
  render() {
    console.log(this.context)
    // destructure the component
    const {isLightTheme, Light, Dark  }=this.context;
    const theme =  isLightTheme ? Light:Dark
    return (
    <>
                <nav style={{background:theme.Light.ui, color:theme.syntax}}>
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
