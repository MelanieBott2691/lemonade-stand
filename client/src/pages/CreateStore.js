import React, { Component } from 'react'
import Nav from '../components/Nav/Nav'
import UserInfo from '../components/UserInfo/UserInfo'
import StoreInfo from '../components/StoreInfo/StoreInfo'
import NewStore from '../components/NewStore/NewStore'
// import PurchaseInfo from '../components/PurchaseInfo/PurchaseInfo'

export default class CreateStore extends Component {
  state = {
    user: {
      name: 'bobby',
      email: 'stuff.com'
    },
    stores: [],
    purchases: [],
    inputSearch: ''
  }

  render () {
    return (
      <>
        <Nav />
        <UserInfo user={this.state.user} />
        <NewStore />
        <StoreInfo />
      </>
    )
  }
}
