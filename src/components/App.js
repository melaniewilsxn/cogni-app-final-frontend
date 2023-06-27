import React from "react";
import { Route, Switch } from "react-router-dom"
import '../App.css';
import Header from "./Header"
import NavBar from "./NavBar"
import Home from "./Home"
import About from  "./About"
import Contact from "./Contact"
import Footer from "./Footer"
import TutorList from "./TutorList"
import TestimonialList from "./TestimonialList"

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/tutors">
          <TutorList />
        </Route>
        <Route exact path="/testimonials">
          <TestimonialList />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
