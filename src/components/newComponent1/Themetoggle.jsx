import React, { Component, useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

// export default class Themetoggle extends Component {
//     static contextType=ThemeContext
   
//   render() {
//     const {toggleTheme}=this.context
//     return (
//       <div>
//         <button onClick={toggleTheme} >Toggle the Theme</button>
//       </div>
//     )
//   }
// }



const Themetoggle = () => {
    const {toggleTheme}= useContext(ThemeContext);
  return (
    <>
            <div>   
                  <button onClick={toggleTheme} >Toggle the Theme</button>
            </div>
    </>
  )
}

export default Themetoggle