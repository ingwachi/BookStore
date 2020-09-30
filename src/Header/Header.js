import React, { Component } from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Firebase from "../Firebase/Firebase";

export default class Heaader extends Component {

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      user: "",
    };
  }

  logout() {
    Firebase.auth().signOut().then(function () {
      window.location.href = '/';
    });
  }

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/Collection">Book Store</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/Collection">Collection</Nav.Link>
            <Nav.Link href="/BookForm">Sell Book</Nav.Link>
          </Nav>
          <h2 style={{marginRight: "1%", color: "#F2F3F4 ", fontFamily: 'Rubik, sans-serif'}}>{this.props.user}</h2>
          <Button variant="info" onClick = {this.logout}>
            Logout
          </Button>
        </Navbar>
      </div>
    );
  }
}
