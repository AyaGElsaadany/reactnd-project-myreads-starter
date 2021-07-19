import React, { Component } from 'react';
import Book from './Book'

class BookShelf extends Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.Books.filter(b => (
                            b.shelf === this.props.shelfName
                        )).map(b => 
                            
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

export default BookShelf;
