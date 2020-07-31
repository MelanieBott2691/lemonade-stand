import React, { Component } from 'react';
import API from '../utils/API';
import Nav from '../components/Nav/Nav.js';
import Results from '../components/Results/Results.js';
import Carouselbanner from '../components/Carousel/Carousel.js';
// import Footer from '../components/Footer/Footer.js';

export default class Home extends Component {
  state = {
    data: [],
    inputSearch: ''
  };

  componentDidMount() {
    API.getItems()
      .then((res) => this.setState({ data: res.data }))
      .catch((err) => console.log(err));
    console.log(this.state.data);
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.inputSearch);
    API.getSearch(this.state.inputSearch)
      .then((res) => this.setState({ data: res.data }))
      .catch((err) => console.log(err));
    console.log(this.state.data);
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
        <Carouselbanner />
        <br></br>
        <Results data={this.state.data} />
        {/* <Footer /> */}
      </div>
    );
  }
}
