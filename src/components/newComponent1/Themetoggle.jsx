import React, { Component } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

export default class Themetoggle extends Component {
    static contextType=ThemeContext
   
  render() {
    const {toggleTheme}=this.context
    return (
      <div>
        <button onClick={toggleTheme} >Toggle the Theme</button>
      </div>
    )
  }
}

import React from 'react'

const Themetoggle = () => {
  return (
    <>Themetoggle</>
  )
}

export default Themetoggle