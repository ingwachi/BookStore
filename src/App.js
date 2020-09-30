import React from "react";
import "./App.css";
import Login from "./Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BookForm from "./BookForm/BookForm";
import Bookshow from "./BookShow/Bookshow";
import Book from "./BookShow/Book";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path = '/' component = {Login}/>
          <Route path = '/BookForm' component = {BookForm}/>
          <Route path = '/Collection' component={Bookshow}/>
          <Route path = '/Book/:id' component={Book}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
