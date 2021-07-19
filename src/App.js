import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import Home from './components/Home'
import Search from './components/Search'

class BooksApp extends React.Component {
  state = {
    Books:[]
  }

  componentDidMount(){
    this.getAllBooks()
  }

  getAllBooks = async () => {
    const books = await BooksAPI.getAll()
    this.setState(() => ({
      Books : books
    }))
  }

  moveBook = async (book, shelf) => {
    await BooksAPI.update(book, shelf)
    // console.log(this.state.Books)
    if(this.state.Books.find(item => item.id === book.id)){
      this.setState(() => ({
        books : this.state.Books.map(b => {
          if(b.id === book.id) 
            b.shelf = shelf 
          return b
        })
      }))
    }else{
      this.setState(() => ({
        Books: [...this.state.Books, book]
      }))
    }
  }

  render() {
    console.log(this.state.Books)
    return (
      <div className="app">
        <Route exact path="/" render={() => (
            <Home Books={this.state.Books}
                  moveBook={this.moveBook}/>
        )}>
        </Route>

        <Route path="/search" render={() => (
            <Search Books={this.state.Books}
                    moveBook={this.moveBook}/>
            )}>
        </Route>
      </div>
    )
  }
}

export default BooksApp
