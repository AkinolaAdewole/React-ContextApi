import React, { useContext, useState } from 'react'

const BookContext = useContext()
const BookContextProvider = (props) => {
    const [books, setBooks]= useState([
        {title:'Things fall apart', id:1},
        {title:'Legend of lost legends', id:2},
        {title:'48 Laws of power', id:3},
        {title:'The Trials of brother Jero', id:4}
    ])
  return (
    <div>BookContextProvider</div>
  )
}

export default BookContextProvider