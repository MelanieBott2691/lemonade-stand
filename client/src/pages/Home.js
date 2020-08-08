import React, { Component } from 'react';
import API from '../utils/API';
import Nav from '../components/Nav/Nav.js';
import Results from '../components/Results/Results.js';
import Carouselbanner from '../components/Carousel/Carousel.js';
import { Container, Row, Col } from 'react-bootstrap';

import Footer from '../components/Footer/Footer.js';

export default class Home extends Component {
  state = {
    data: [],
    isLoggedIn: false,
    inputSearch: ''
  };

  componentDidMount() {
    API.getItems()
      .then((res) => this.setState({ data: res.data }))
      .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
    const { value } = event.target;
    this.setState({
      inputSearch: value
    });
    console.log(this.state.inputSearch);
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('form submit');
    console.log(this.state.inputSearc);
    if (this.state.inputSearch) {
      API.getSearch({ name: this.state.inputSearch })
        .then((res) => {
          console.log(res);
          this.setState({ data: res.data });
        })
        .catch((err) => console.log(err));
    } else {
      API.getItems()
        .then((res) => this.setState({ data: res.data }))
        .catch((err) => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <Nav
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
          inputSearch={this.state.inputSearch}
        />
        <br></br>
        <Container>
          <Row>
            <Col xl={12}>
              <Carouselbanner />
              <br></br>
              <Results data={this.state.data} />
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}
