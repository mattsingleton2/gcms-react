import React, { Component } from "react";
import Home from "./HomeComponent";
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";
import AboutUs from "./AboutUsComponent";
import ContactUs from "./ContactComponent";
import MeetUs from "./MeetUsComponent";
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
          <Route path="/contact" component={ContactUs} />
          <Route path="/meet" component={MeetUs} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default withRouter(Main);
