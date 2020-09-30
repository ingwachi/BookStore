import React, { Component } from "react";
import { Card } from "react-bootstrap";

export default class BookItem extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    bookOnclick = (id) => {
        window.location.href = '/Book/' + id;
    }

    render() {
        return (
        <div>
            <Card style={{ width: "13rem", marginRight: "15px", marginBottom: '15px' }} onClick={() => this.bookOnclick(this.props.id)}>
                <Card.Img variant="top" src={this.props.img} style={{width: "13rm", height: "250px"}}/>
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Text>Author: {this.props.author}</Card.Text>
                    <Card.Text>Price: {this.props.price} Baht</Card.Text>
                </Card.Body>
            </Card>
        </div>
        );
    }
}
