import React, { Component } from 'react'
// import API from '../utils/API'
import Nav from '../components/Nav/Nav.js'
import Results from '../components/Results/Results.js'
import Carouselbanner from '../components/Carousel/Carousel.js'

// import Footer from '../components/Footer/Footer.js';

export default class Home extends Component {
  state = {
    data: [],
    inputSearch: ''
<<<<<<< HEAD
  }
=======
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
>>>>>>> 44c9dfc9e10b10a5ce920899c1ce67a7cd631c3a

  render () {
    return (
      <div>
        <Nav
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
          inputSearch={this.state.inputSearch}
        />
        <br></br>
        <Carouselbanner />
        <Results data={this.state.data} />
        {/* <Footer /> */}
      </div>
    )
  }
}
