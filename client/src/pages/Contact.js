import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer.js';
import '../assets/css/style.css';

export default class Contact extends Component {
  state = {
    errors: 0,
    submitting: 0
  };

  handleSubmit = () => {
    console.log('stuff');
  };

  render() {
    return (
      <div>
        <Nav />
        <Card>
          <div className="contact-container">
            <form>
              <div className="container">
                {/* <Card.Header>Send us a Message</Card.Header> */}
                <Card.Body>
                  <Card.Text>
                    <div className="form-group">
                      <label for="exampleFormControlInput1">First Name:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Enter First Name"></input>
                    </div>

                    <div className="form-group">
                      <label for="exampleFormControlInput1">Last Name:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Enter Last Name"></input>
                    </div>

                    <div className="form-group">
                      <label for="exampleFormControlInput1">
                        Email address:
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"></input>
                    </div>

                    <div className="form-group">
                      <label for="exampleFormControlTextarea1">Message:</label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"></textarea>
                    </div>
                    <div className="form-group">
                      <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" class="btn">
                          Submit
                        </button>
                      </div>
                    </div>
                  </Card.Text>
                </Card.Body>
              </div>
            </form>
          </div>
        </Card>
        <br></br>
        <Footer />
      </div>
    );
  }
}
