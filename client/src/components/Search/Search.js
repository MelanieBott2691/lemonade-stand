import React, { Component } from 'react'
import './Search.css'

export default class Search extends Component {
  render () {
    return (
      <form>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-9 col-sm-10'>
              <div className='input-group input-group-md'>
                <input
                  className='form-control'
                  type='text'
                  name='bookSearch'
                  placeholder='Search For Item or Charity'
                  value={this.props.inputSearch}
                  onChange={this.props.handleInputChange}
                ></input>
              </div>
            </div>
            <div className='col-xs-3 col-sm-2'>
              <button
                className='btn btn-md input-md'
                onClick={this.props.handleFormSubmit}
                type='success'
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </form>
    )
  }
}
