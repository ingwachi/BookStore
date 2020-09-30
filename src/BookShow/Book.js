import React, { Component } from "react";
import Header from "../Header/Header";
import Firebase from "../Firebase/Firebase";
import { Container, Row, Col } from "react-bootstrap";

const db = Firebase.firestore();

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      book: {},
    };
  }

  componentDidMount() {
    Firebase.auth().onAuthStateChanged((user) => {
      console.log(user.displayName);
      var outputUser = user.displayName;
      this.setState({ user: outputUser });
    });

    db.collection("Book")
      .doc(this.props.match.params.id)
      .get()
      .then((res) => {
        console.log(res.data());
        this.setState({ book: res.data() });
      });

    console.log(this.props.match.params.id);
  }
  render() {
    return (
      <div>
        <Header user={this.state.user} />
        <div style={{ fontFamily: "Rubik, sans-serif", marginTop: "3%" }}>
          <h1 style={{ color: "#F4D03F", fontSize: "70px", marginBottom: '3%', textAlign: 'center' }}>
            {this.state.book.Name}
          </h1>
          <Container>
            <Row>
                <Col>
                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                    <img style={{width: '300px', height: '400px'}} src={this.state.book.img}/>
                </Col>
                <Col>
                    <div style={{ color: "#F9E79F", fontSize: '50px', marginTop: '20%' }}>Author: {this.state.book.Author}</div>
                    <div style={{ color: "#F9E79F", fontSize: '50px' }}>Price: {this.state.book.Price} Baht</div>
                </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
