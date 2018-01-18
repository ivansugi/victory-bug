import React from 'react'
import { Link } from 'react-router'

import style from './SideNav3.scss' // eslint-disable-line

export default class SideNav3 extends React.Component {
  onCreditScore (current) {
    if (current === '/overview') {
      return true
    }
    if (current.indexOf('/credit-factors/') === 0) {
      return true
    }
    return false
  }

  onLenderView (current) {
    if (current === '/overview/lender-view') {
      return true
    }
    if (current.indexOf('/lender-view/') === 0) {
      return true
    }
    return false
  }

  render () {
    const { current } = this.props
    return (
      <nav className='side-nav-3'>
        <ul>
          <li class={current === '/dashboard' ? 'active' : ''} >
            <Link to='/dashboard'>
              <div class='icon cs-home-svg' />
              <span>Home</span>
            </Link>
          </li>
          <li class={this.onLenderView(current) ? 'active' : ''} >
            <Link to='/overview/lender-view'>
            <div class='icon cs-lenderview-svg' />
              <span>Lender score</span>
            </Link>
          </li>
          <li class={this.onCreditScore(current) ? 'active' : ''} >
            <Link to='/overview'>
            <div class='icon cs-creditscore-svg' />
              <span>Credit score</span>
            </Link>
          </li>
          <li class={current === '/score-booster' ? 'active' : ''} >
            <Link to='/score-booster'>
            <div class='icon cs-booster-svg' />
              <span>Booster</span>
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}
