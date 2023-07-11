import React, { Component } from 'react'
import { ThemeContext } from '../../context/ThemeContext';


export default class BukNav extends Component {
  render() {
   
    return (
      <>
                  
              <ThemeContext.Consumer>{(context)=>{
                const {isLightTheme, light, dark} = context;
                const theme = isLightTheme ? light : dark

                return (
                  <nav style={{background:theme.ui, color:theme.syntax}}>
                  <h1>Context App</h1>

                  <ul>
                      <li>Home</li>
                      <li>Contact</li>
                      <li>About</li>
                  </ul>
              </nav>
                )
              }}
                </ThemeContext.Consumer>   
      </>
    )
  }
}
