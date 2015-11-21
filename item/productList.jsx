import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Product from './product.jsx'

export default class ProductList extends Component {
  render(){
    return <div className="productList">
      <Product/>
    </div>
  }
}

ReactDOM.render(<ProductList/>, document.getElementById('productList'))
