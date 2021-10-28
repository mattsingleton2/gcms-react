import React from "react";

function ContactUs(props) {
  return (

    <div ClassName="col 6" id="contactForm">
    <div ClassName="container">
      <div ClassName="row">
        <div ClassName="col">
          <div ClassName="form-group">
            <Label for="firstName">First Name</Label>
            <Input ClassName="form-control" id="firstName" aria-describedby="firstName">
            <Small id="firstName" ClassName="form-text text-muted">First Name</Small>
          </div>
        </div>
        <div ClassName="col">
          <div ClassName="form-group">
            <Label for="lastName">Last Name</Label>
            <Input ClassName="form-control" id="lastName" aria-describedby="lastName">
            <Small id="lastName" ClassName="form-text text-muted">Last Name</Small>
          </div>
        </div>
      </div>
      <div ClassName="row">
        <div ClassName="col">
          <div ClassName="form-group">
            <Label for="emailAddress">Email address</Label>
            <Input type="email" ClassName="form-control" id="emailAddress" aria-describedby="emailHelp">
            <Small id="emailHelp" ClassName="form-text text-muted">We'll never share your email with anyone else.</Small>
          </div>
        </div>
      </div>
      <div ClassName="row">
        <div ClassName="col">
          <div ClassName="form-group">
            <Label for="contactReason">Contact Reason</Label>
            <select ClassName="form-control" id="contactReason">
              <option>Join our Team</option>
              <option>Request a Feature</option>
              <option>Request Information</option>
            </select>
          </div>
        </div>
      </div>
      <div ClassName="row">
        <div ClassName="col">
          <div ClassName="form-group">
            <Label for="contactMessage">Your message</Label>
            <textarea ClassName="form-control" id="contactMessage" rows="5"></textarea>
          </div>
        </div>
      </div>
      <div ClassName="row">
        <div ClassName="col">
          <div ClassName="form-group form-check">
            <Input type="checkbox" ClassName="form-check-Input" id="sendEmail">
            <Label ClassName="form-check-Label" for="sendEmail">Send a copy to my Email</Label>
          </div>
        </div>
      </div>
      <div ClassName="row">
        <div ClassName="col">
          <button type="submit" ClassName="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  </div>

    );
  }
    
    
    
export default ContactUs;