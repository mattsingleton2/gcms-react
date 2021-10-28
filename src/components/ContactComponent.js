import React from "react";

function Contact(props) {
    return (

        <div classNameName="col 6" id="contactForm">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="form-group">
                <Label for="firstName">First Name</Label>
                <Input className="form-control" id="firstName" aria-describedby="firstName">
                <Small id="firstName" className="form-text text-muted">First Name</Small>
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <Label for="lastName">Last Name</Label>
                <Input className="form-control" id="lastName" aria-describedby="lastName">
                <Small id="lastName" className="form-text text-muted">Last Name</Small>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <Label for="emailAddress">Email address</Label>
                <Input type="email" className="form-control" id="emailAddress" aria-describedby="emailHelp">
                <Small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</Small>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <Label for="contactReason">Contact Reason</Label>
                <select className="form-control" id="contactReason">
                  <option>Join our Team</option>
                  <option>Request a Feature</option>
                  <option>Request Information</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <Label for="contactMessage">Your message</Label>
                <textarea className="form-control" id="contactMessage" rows="5"></textarea>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-group form-check">
                <Input type="checkbox" className="form-check-Input" id="sendEmail">
                <Label className="form-check-Label" for="sendEmail">Send a copy to my Email</Label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Button type="submit" className="btn btn-primary">Submit</Button>
            </div>
          </div>
        </div>
      </div>


        );
    }

export default Contact;
