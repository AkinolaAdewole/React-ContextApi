import React, { Component, useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext';
import { AuthContext } from '../../context/AuthContextProvider';


export default class BukNav extends Component {
  render() {
   
    return (
      <>
                  {/* To create multiple consumer */}
              <AuthContext.Consumer>{(authContext)=>(
                     <ThemeContext.Consumer>{(themeContext)=>{
                              const{isAuthenticated, toggleAuth}= authContext
                              const {isLightTheme, light, dark} = themeContext;
                              const theme = isLightTheme ? light : dark
              
                              return (

                                <nav style={{background:theme.ui, color:theme.syntax}}>
                                <h1>Context App</h1>

                                    <div onClick={toggleAuth}> {isAuthenticated ? 'loggedIn' : 'loggedOut'} </div>

                                <ul>
                                    <li>Home</li>
                                    <li>Contact</li>
                                    <li>About</li>
                                </ul>
                            </nav>
                              )              
                            }}
                      </ThemeContext.Consumer>   
              )}</AuthContext.Consumer>

      </>
    )
  }
}

import React from 'react'

const BukNav = () => {
  const {isLightTheme, light, darkuseContext}=(ThemeContext)
  return (
    <>
             <nav style={{background:theme.ui, color:theme.syntax}}>
                                <h1>Context App</h1>

                                    <div onClick={toggleAuth}> {isAuthenticated ? 'loggedIn' : 'loggedOut'} </div>

                                <ul>
                                    <li>Home</li>
                                    <li>Contact</li>
                                    <li>About</li>
                                </ul>
                            </nav>
    </>
  )
}

export default BukNav