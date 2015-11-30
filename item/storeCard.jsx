import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class StoreCard extends Component {
  render(){
    let store = this.props.store
    let logoClassName = "logo " + store.name.toLowerCase().replace(/\s/g, '')

    return <a href="#" className="card">
        <div>
          <div className={logoClassName}></div>
          <div className="description">
          </div>
        </div>
        {this.renderStatus()}
      </a>
  }

  renderStatus(){
    let store = this.props.store
    let statusClassName = "status " + store.status

    return <div className={statusClassName}>{store.status.toUpperCase()}</div>
  }
}
