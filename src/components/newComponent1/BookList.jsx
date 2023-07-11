import React, { Component,useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

// export default class BookList extends Component {
//     static contextType=ThemeContext
//   render() {
//     const {isLightTheme, light, dark}=this.context
//     const theme= isLightTheme ? light : dark;
//     return (
//       <>
//           <div className='book-list' style={{background:theme.bg, color:theme.syntax}}>
//             <ul>
//                 <li style={{background:theme.ui}}>The legend of the lost legend</li>
//                 <li style={{background:theme.ui}}>See you at the top</li>
//                 <li style={{background:theme.ui}}>48 Laws of power</li>
//             </ul>
//           </div>
//       </>
//     )
//   }
// }


import React from 'react'

const BookList = () => {
  return (
    <>
         <div className='book-list' style={{background:theme.bg, color:theme.syntax}}>
            <ul>
                <li style={{background:theme.ui}}>The legend of the lost legend</li>
                <li style={{background:theme.ui}}>See you at the top</li>
                <li style={{background:theme.ui}}>48 Laws of power</li>
            </ul>
          </div>
    </>
  )
}

export default BookList
