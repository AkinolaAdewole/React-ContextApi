import React, { Component } from 'react'

export default class BookList extends Component {
  render() {
    return (
      <>
          <div className='book-list'>
            <ul>
                <li>The legend of the lost legend</li>
                <li>See you at the top</li>
                <li>48 Laws of power</li>
            </ul>
          </div>
      </>
    )
  }
}
