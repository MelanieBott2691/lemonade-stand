import React, { Component } from 'react'
import API from '../utils/API'
import Nav from '../components/Nav/Nav.js'
import Results from '../components/Results/Results.js'
import Carouselbanner from '../components/Carousel/Carousel.js'
// import Footer from '../components/Footer/Footer.js';

export default class Home extends Component {
  state = {
    data: [
      {
        id: 1,
        name: 'test1',
        price: 47.0
      },
      {
        id: 2,
        name: 'test2',
        price: 54.0
      },
      {
        id: 3,
        name: 'test3',
        price: 24.0
      },
      {
        id: 4,
        name: 'test4',
        price: 14.0
      },
      {
        id: 5,
        name: 'test5',
        price: 53.0
      }
    ],
    inputSearch: ''
  }

  // handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   API.getBooks(this.state.bookSearch)
  //     .then((res) => this.setState({ books: res.data }))
  //     .catch((err) => console.log(err));
  //   console.log(this.state.books);
  // };

  // handleSave = ({ target }) => {
  //   const parent = target.parentElement;
  //   console.log(parent);
  //   const title = parent.getElementsByClassName('title')[0].innerHTML;
  //   const synopsys = parent.getElementsByClassName('synopsys')[0].innerHTML;
  //   const link = parent.getElementsByClassName('link')[0].innerHTML;
  //   console.log(title);
  //   console.log(synopsys);
  //   console.log(link);
  // };

  render () {
    return (
      <div>
        <Nav />
        <br></br>
        <Carouselbanner />
        <br></br>
        <Results data={this.state.data} />
        {/* <Footer /> */}
      </div>
    )
  }
}
