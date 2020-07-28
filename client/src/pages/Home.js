import React, { Component } from 'react'
// import API from '../utils/API'
// import Navbar from '../components/Navbar/Navbar.js'
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

  render () {
    return (
      <div>
        {/* <Nav /> */}
        <br></br>
        <Carouselbanner />
        <Results data={this.state.data} />
        {/* <Footer /> */}
      </div>
    )
  }
}
