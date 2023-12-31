import React, { Component,useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { BookContext } from '../../context/BookContextProvider'

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


const BookList = () => {
   const {isLightTheme,light, dark}=useContext(ThemeContext)
   const {Books}= useContext(BookContext);
   const theme= isLightTheme ? light : dark;
   
  return (
    <>
         <div className='book-list' style={{background:theme.bg, color:theme.syntax}}>
            <ul>
              {Books.map((Book)=>(
                <li style={{background:theme.ui}} key={Book.id} >{Book.title}</li>
              ))}
                {/* <li style={{background:theme.ui}}>The legend of the lost legend</li>
                <li style={{background:theme.ui}}>See you at the top</li>
                <li style={{background:theme.ui}}>48 Laws of power</li> */}
            </ul>
          </div>
    </>
  )
}

export default BookList
