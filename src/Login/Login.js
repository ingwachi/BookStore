import React, { Component } from "react";
import "./Login.css";
import firebase from "../Firebase/Firebase";

export default class Login extends Component {

    signin() {
        var provider = new firebase.auth.GoogleAuthProvider();

        provider.setCustomParameters({
            hd: "ku.th",
        });

        firebase
        .auth()
        .signInWithPopup(provider)
        .then(function (result) {
            // var token = result.credential.accessToken;
            var user = result.user;
            console.log("uid: ", user.uid);
            console.log("user: ", user.displayName);
            window.location.href = "/Collection";
        })
        .catch(function (error) {
            console.log(error);
        });
    }

  render() {
    return (
      <div>
        <div className="login">
          <h1>Login</h1>
          <button
            type="submit"
            style={{
              backgroundColor: "#82E0AA",
              marginTop: "2%",
              color: "#212F3D",
            }}
            className="btn btn-block btn-large"
            onClick={this.signin}
          >
            Login With KU Account
          </button>
        </div>
      </div>
    );
  }
}
