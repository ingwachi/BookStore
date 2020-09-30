import React, { Component } from 'react';
import Firebase from "../Firebase/Firebase";
import Header from '../Header/Header';
import BookItem from './BookItem';

const db = Firebase.firestore();

export default class Bookshow extends Component {

    constructor(props) {
        super(props);
        this.state = {
          user: null,
          books: []
        };
    }

    componentDidMount() {
        Firebase.auth().onAuthStateChanged((user) => {
          console.log(user.displayName);
          var outputUser = user.displayName;
          this.setState({ user: outputUser });
        });

        let data = []
        db.collection('Book').orderBy('TimeStamp').get().then((res) => {
            res.forEach(doc => {
                var book = [];
                book.push(doc.id);
                book.push(doc.data());
                data.push(book);
            })
            console.log(data);
            this.setState({ books: data });
        });
        
    }

    render() {

        const bookList = this.state.books.map(book => {
            return <BookItem name={book[1].Name} author={book[1].Author} price={book[1].Price} img={book[1].img} id={book[0]} key={book[0]}/>
        });
        return (
            <div>
                <Header user={this.state.user}/>
                <h1 style={{marginTop: "3%", color: "#FDEDEC", fontFamily: 'Rubik, sans-serif', marginBottom: '5%', textAlign: 'center'}}>Book Collection</h1>
                <div style={{marginLeft: "13%", marginRight: "5%",  display: 'flex', flexWrap: 'wrap', fontFamily: 'Rubik, sans-serif'}}>
                    {bookList}
                </div>
            </div>
        )
    }
}
