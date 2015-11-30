import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import StoreCard from './storeCard.jsx'

export default class Product extends Component {
  render(){
    let product = this.props.product

    return <div className='product row'>
      <div className="title"><span className="name">{ product.name }</span></div>
      <div className="store-container">
        <div className="stores">
          { this.renderStoreCards() }
        </div>
      </div>
    </div>
  }

  renderStoreCards(){
    let storeCards = this.props.product.stores.map(function(store){
      return(
        <StoreCard store={store} key={Math.random()}/>
      )
    })

    return storeCards
  }
}
