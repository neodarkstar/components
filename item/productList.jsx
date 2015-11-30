import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Product from './product.jsx'

export default class ProductList extends Component {
  render(){
    return <div className="productList">
      { this.renderProductList() }
    </div>
  }

  renderProductList(){
    let products = this.props.products.map(function(product){
      return (
        <Product product={product} key={Math.random()}/>
      )
    })

    return products
  }
}

var product = {
  name: 'Ike',
  lastAvailable: new Date(),
  available: true,
  stores: [
    {
      name: 'Target',
      lastChecked: new Date(),
      price: '$12.99',
      status: 'available'
    },
    {
      name: 'Best Buy',
      lastChecked: new Date(),
      price: '$12.99',
      status: 'unavailable'
    },
    {
      name: 'Toys R Us',
      lastChecked: new Date(),
      price: '$13.99',
      status: 'available'
    }
  ]
}

var products = [product,product,product]

ReactDOM.render(<ProductList products={products}/>, document.getElementById('productList'))
