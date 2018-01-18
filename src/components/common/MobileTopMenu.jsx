import React from 'react'
import { Link } from 'react-router'
// import { LinkContainer } from 'react-router-bootstrap'
import { ButtonToolbar } from 'react-bootstrap'

import NavContainer from './NavContainer.jsx'

import style from './MobileTopMenu.scss' // eslint-disable-line

const mobileNav = [
  {
    text: 'Credit Card',
    to: '/credit-cards'
  },
  {
    text: 'Loan',
    to: '/loans'
  },
  {
    text: 'Debt Solutions',
    to: '/debt-solutions'
  },
  {
    text: 'Tools',
    to: '/tools'
  },
  {
    text: 'Resources',
    to: '/articles'
  }
]

export default class MobileTopMenu extends React.Component {
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
      mobileNavOpen: !this.state.mobileNavOpen,
      mobileProfileOpen: false,
      mobileNavChild: false
    })
  }

  render () {
    return (
      <header className='cs-header'>
        <NavContainer>
          <ButtonToolbar className='secondary-nav'>
            <button class='btn btn-link' onClick={this.toggleMobileProfile.bind(this)} ><i className='fa fa-user' /></button>
            <button class='btn btn-link' onClick={this.toggleMobileNav.bind(this)} ><i className='fa fa-bars' /></button>
          </ButtonToolbar>
        </NavContainer>
        { this.state.mobileNavOpen &&
        <nav className='cs-mobile-menu'>
          <ul>
            { mobileNav.map((x, i) => (
              <li key={i}><Link to={x.to}><span dangerouslySetInnerHTML={{__html: x.text}} /></Link></li>
            ))}
          </ul>
        </nav>
        }
        { this.state.mobileProfileOpen &&
          <nav className='cs-mobile-menu'>
            { this.props.email === null &&
              <ul>
                <li key={0}><a onClick={this.props.onLogin.bind(this)}>Log In</a></li>
                <li key={1}><Link to='/register'>Register</Link></li>
              </ul>
            }
            { this.props.email !== null &&
              <ul>
                <li key={0}><Link to={'/profile'}>Personal Information</Link></li>
                <li key={1}><a >Public Profile</a></li>
                <li key={2}><a >Security Settings</a></li>
                <li key={3}><a >Comms & Alerts</a></li>
                <li key={4}><a onClick={this.props.onLogout.bind(this)}>Log Out</a></li>
              </ul>
            }
          </nav>
        }
      </header>
    )
  }
}
