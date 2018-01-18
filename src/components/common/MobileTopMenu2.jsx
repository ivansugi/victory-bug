import React from 'react'
import { Link } from 'react-router'
// import { LinkContainer } from 'react-router-bootstrap'
import { ButtonToolbar } from 'react-bootstrap'

import NavContainer from './NavContainer.jsx'

const mobileNav = [
  {
    text: 'Resources',
    to: '/articles'
  }
]

export default class MobileTopMenu2 extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      mobileNavOpen: false
    }
  }
  toggleMobileProfile () {
    this.setState({
      mobileProfileOpen: !this.state.mobileProfileOpen,
      mobileNavOpen: false
    })
  }

  toggleMobileNav () {
    this.setState({
      mobileNav: [ ...this.state.mobileNav ],
      mobileNavOpen: !this.state.mobileNavOpen,
      mobileProfileOpen: false,
      mobileNavChild: false
    })
  }

  render () {
    const { email } = this.props
    return (
      <header className='mobile-top-menu-2'>
        <nav class='navbar navbar-default navbar-main'>
          <div class='container-fluid'>
            <div class='navbar-collapse'>
              <ul class='nav navbar-nav nav-main'>
                <li class='drawer'>
                  <a href='#'><i className='icon-cs-nav' /></a>
                </li>
                <li class='logo'>
                  <Link to='/dashboard' className='navbar-brand'>
                    <img src='/images/logo/CreditSwift.png' /> <img src='/images/logo/logotext.png' style={{height:"20px"}} />
                  </Link>
                </li>
                <li class='join'>
                  <a onClick={this.props.onLogin}>Join</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}
