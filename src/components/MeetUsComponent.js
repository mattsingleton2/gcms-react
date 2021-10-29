import React, { Component } from "react";
import { Collapse, CardBody, Card, CardHeader, Container } from "reactstrap";
import { MEET } from "../shared/meetus";
import "../App.css";

class MeetUs extends Component {
  constructor(props) {
    super(props);
    // this.Toggle = this.Toggle.bind(this);
    this.state = {
      collapse: 0,
    };
  }

  Toggle = (e) => {
    let event = e.target.dataset.event;
    this.setState({
      collapse: this.state.collapse === Number(event) ? 0 : Number(event),
    });
    e.preventDefault();
  };

  render() {
    const { collapse } = this.state;
    return (
      <Container>
        <h1 className="bg-info">The Team</h1>
        {MEET.map((index) => {
          return (
            <Card style={{ marginBottom: "1rem" }} key={index}>
              <CardHeader onClick={this.Toggle} data-event={index}>
                <p style={{ color: "black" }}>{index.name}</p>
              </CardHeader>
              <Collapse isOpen={collapse === index}>
                <CardBody>{index.biography}</CardBody>
              </Collapse>
            </Card>
          );
        })}
      </Container>
    );
  }
}

export default MeetUs;
