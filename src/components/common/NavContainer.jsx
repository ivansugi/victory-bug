import React from 'react'
import { Link } from 'react-router'

import style from './NavContainer.scss' // eslint-disable-line

export default class NavContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      containerClass: 'container-fluid'
    }
  }

  render () {
    return (
      <nav className={`nav-container ${this.props.className || null}`}>
        <div className={this.state.containerClass}>
          <Link to='/dashboard' className='logo navbar-left'>
            <img src='/images/logo/CreditSwift.png' />
          </Link>
          {this.props.children}
        </div>
      </nav>
    )
  }
}
