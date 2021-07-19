import React, { Component } from 'react';
import BookShelf from './BookShelf'
import {Link} from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf title="Currently Reading" Books={this.props.Books} shelfName="currentlyReading" moveBook={this.props.moveBook}/>
                <BookShelf title="Want to Read" Books={this.props.Books} shelfName="wantToRead" moveBook={this.props.moveBook}/>
                <BookShelf title="Read" Books={this.props.Books} shelfName="read" moveBook={this.props.moveBook}/>
              </div>
            </div>
            <div className="open-search">
              <Link to="/search" onClick={() => this.setState({ showSearchPage: true })}>Add a book</Link>
            </div>
          </div>
        )
    }
}

export default Home;
