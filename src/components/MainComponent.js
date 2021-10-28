import React, { Component } from "react";
import Home from "./HomeComponent";
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";
import AboutUs from "./AboutUsComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import "../App.css";

class Main extends Component {
  render() {
    const HomePage = () => {
      return <Home />;
    };

    return (
      <>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/about" component={AboutUs} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default withRouter(Main);
