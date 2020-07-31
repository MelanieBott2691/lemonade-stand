import React from 'react'
import './StoreInfo.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import logo from '../StoreInfo/logo.png'

export default function StoreInfo () {
  return (
    <Card>
      <Card.Img className='logo' variant='top' src='nothingfornow' />
      <Card.Body>
        <Card.Title>My Stands</Card.Title>
        <Button href='/createstore'>Create New Stand</Button>{' '}
        <Button href='#'>Edit Stand</Button>{' '}
      </Card.Body>
    </Card>
  )
}
