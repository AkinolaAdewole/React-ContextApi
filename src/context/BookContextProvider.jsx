import React, { useContext, useState } from 'react'

export const BookContext = useContext()
const BookContextProvider = (props) => {
    const [books, setBooks]= useState([
        {title:'Things fall apart', id:1},
        {title:'Legend of lost legends', id:2},
        {title:'48 Laws of power', id:3},
        {title:'The Trials of brother Jero', id:4}
    ])
  return (
    <>
       <BookContext.Provider value={books}>
        {props.Children}
       </BookContext.Provider>
    </>
  )
}

export default BookContextProvider