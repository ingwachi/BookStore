import React, { Component } from "react";
import Header from "../Header/Header";
import Firebase from "../Firebase/Firebase";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const db = Firebase.firestore();

export default class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      bookName: "",
      author: "",
      price: ""
    };
  }

  componentDidMount() {
    Firebase.auth().onAuthStateChanged((user) => {
      console.log(user.displayName);
      var outputUser = user.displayName;
      this.setState({ user: outputUser });
    });
  }

  bookNameOnChange = (e) => {
    this.setState({bookName: e.target.value});
  }

  authorOnChange = (e) => {
    this.setState({author: e.target.value});
  }

  priceOnChange = (e) => {
    this.setState({price: e.target.value})
  }

  onSubmit = (e) => {
    db.collection('Book').add({
      Name: this.state.bookName,
      Author: this.state.author,
      Price: this.state.price,
      img: 'https://qph.fs.quoracdn.net/main-qimg-87addd91f3e2ee1413efae929ba09c52',
      TimeStamp: Firebase.firestore.Timestamp.now()
    }).then(function(res){
      console.log(res);
      window.location.href = '/Collection'
    });
  }

  render() {
    return (
      <div>
        <Header user={this.state.user} />
        <h1 style={{marginTop: '2%', color: '#D5F5E3', marginBottom: '3%', textAlign: 'center'}}>Sell Book Form</h1>
        <Form style={{marginLeft: '35%'}}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label style={{color: '#FCF3CF', fontSize: '30px'}} >Book Name</Form.Label>
            <Form.Control style={{width: '500px'}} type="text" placeholder="Enter book name" onChange={this.bookNameOnChange}/>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label style={{color: '#FCF3CF', fontSize: '30px'}}>Author</Form.Label>
            <Form.Control style={{width: '500px'}} type="text" placeholder="Author" onChange={this.authorOnChange}/>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label style={{color: '#FCF3CF', fontSize: '30px'}}>Price</Form.Label>
            <Form.Control style={{width: '500px'}} type="number" placeholder="xxx" onChange={this.priceOnChange}/>
          </Form.Group>
          
          <Button variant="primary" style={{marginLeft: '24%'}} onClick={this.onSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
