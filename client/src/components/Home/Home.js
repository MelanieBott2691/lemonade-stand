import React, { useState } from 'react'
import stuffedLamb from '../../images/lamb.jpg'
import ukulele from '../../images/uke.jpg'
import smilePackage from '../../images/cheer.jpg'
import plush from '../images/plush.jpg'
import { connect } from 'react-redux'
import { addBasket } from '../actions/addAction'
import './Home.css'

const Home = props => {
  console.log(props)
  return (
    <div className='container'>
      <div className='image'>
        <img src={stuffedLamb} alt='stuffLamb' />
        <h3>Stuffed Lamb</h3>
        <h3>$10.00</h3>
        <a
          onClick={() => props.addBasket('stuffedLamb')}
          className='addToCart cart1'
          href='/cart'
        >
          Add to Cart
        </a>
      </div>
      <div className='image'>
        <img src={ukulele} alt='ukulele' />
        <h3>Ukulele</h3>
        <h3>$32.00</h3>
        <a
          onClick={() => props.addBasket('ukulele')}
          className='addToCart cart2'
          href='/cart'
        >
          Add to Cart
        </a>
      </div>
      <div className='image'>
        <img src={smilePackage} alt='Smile Package' />
        <h3>Smile Package</h3>
        <h3>$12.00</h3>
        <a
          onClick={() => props.addBasket('smilePackage')}
          className='addToCart cart3'
          href='/cart'
        >
          Add to Cart
        </a>
      </div>
      <div className='image'>
        <img src={plush} alt='Plush' />
        <h3>Plush</h3>
        <h3>$6.00</h3>
        <a
          onClick={() => props.addBasket('plush')}
          className='addToCart cart4'
          href='/cart'
        >
          Add to Cart
        </a>
      </div>
    </div>
  )
}

export default connect(null, { addBasket })(Home)
