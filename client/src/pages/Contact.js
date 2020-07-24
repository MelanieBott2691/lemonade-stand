import React, { Component } from 'react'
import API from '../utils/API'
import Nav from '../components/Nav/Nav.js'
import Results from '../components/Results/Results.js'
import Footer from '../components/Footer/Footer.js'
import '../assets/css/style.css'

export default class Contact extends Component {
  state = {
    errors: 0,
    submitting: 0
  }

  handleSubmit = () => {
    console.log('stuff')
  }

  render () {
    return (
      <div>
        <Nav />
        <form>
          <div class='container'>
            <div class='form-group'>
              <label for='exampleFormControlInput1'>First Name:</label>
              <input
                type='text'
                class='form-control'
                id='exampleFormControlInput1'
                placeholder='Enter First Name'
              ></input>
            </div>

            <div class='form-group'>
              <label for='exampleFormControlInput1'>Last Name:</label>
              <input
                type='text'
                class='form-control'
                id='exampleFormControlInput1'
                placeholder='Enter Last Name'
              ></input>
            </div>

            <div class='form-group'>
              <label for='exampleFormControlInput1'>Email address:</label>
              <input
                type='email'
                class='form-control'
                id='exampleFormControlInput1'
                placeholder='name@example.com'
              ></input>
            </div>

            <div class='form-group'>
              <label for='exampleFormControlTextarea1'>Message:</label>
              <textarea
                class='form-control'
                id='exampleFormControlTextarea1'
                rows='3'
              ></textarea>
            </div>
            <div class='form-group'>
              <div class='col-sm-offset-2 col-sm-10'>
                <button type='submit' class='btn'>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>{' '}
        <Footer />
      </div>
    )
  }
}
