import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import Book from './Book';

class Search extends Component {
  state={
    booksToShow:[]
  }

  search = async (query) => {
    if(query){
      const searchedBooks = await BooksAPI.search(query);
      console.log(this.state.searchedBooks);
      if(!searchedBooks.error){
        const mappedBooks = searchedBooks.map(b => {
          if(this.props.Books.some(item => item.id === b.id))
            b.shelf = this.props.Books.find(book => book.id === b.id).shelf
          else
            b.shelf = "none"  
          return b  
        })
        this.setState(() => ({
          booksToShow: mappedBooks
        }))
      }else{
        this.setState(() => ({
          booksToShow: []
        }))
      }

      
      //console.log(this.state.mappedBooks)
    } else {
      this.setState(() => ({
        booksToShow: []
      }))
    }
  }

    render() {
        return (
            <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onChange={(e) => this.search(e.target.value)}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {this.state.booksToShow.map(b => 
                    <Book key={b.id}
                          book={b}
                          moveBook={this.props.moveBook}/>
                )}
              </ol>
            </div>
          </div>
        )
    }
}

export default Search;
