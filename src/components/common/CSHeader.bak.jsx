import React, { Component } from 'react'
import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'
import { connect } from 'react-redux'
import { Button, ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap'

import CSHeaderNavItem from './CSHeaderNavItem'
import NavContainer from './NavContainer.jsx'
import SubNavContainer from './SubNavContainer.jsx'

import LogInModal from '../LogInModal'
import { toggleLoginModal, toggleLoanModal } from '../../modules/layout'
import { attemptLogout } from '../../modules/login'

@connect( // eslint-disable-line
  store => {
    return {
      id: store.layout.loginModalOpen,
      email: store.login.user.email,
      isLoggedIn: store.login.isLoggedIn,
      loginModalOpen: store.layout.loginModalOpen,
      loanModalOpen: store.layout.loanModalOpen
    }
  },
  dispatch => {
    return {
      onLoginClick: () => {
        return dispatch(toggleLoginModal())
      },
      onToggleLoanModal: () => {
        return dispatch(toggleLoanModal())
      },
      onLogout: () => {
        return dispatch(attemptLogout())
      }
    }
  }
)

class CSHeader extends Component {
  constructor (props) {
    super(props)
    this.state = {
      navMode: 'full',
      mainNav: props.mainNav.map((x) => { return { ...x, active: false } }),
      mobileNav: [ ...props.mainNav ],
      mobileNavChild: false,
      mobileNavOpen: false,
      mobileProfileOpen: false
    }
    this.state.mainNav.map(x => {
      if (x.text === 'Loans') {
        x.onClick = this.props.onToggleLoanModal
      }
      return x
    })
  }

  componentWillMount () {
    if (window.innerWidth < 1200) {
      this.setState({
        navMode: 'mobile'
      })
    }
  }

  showSubNav (activeIndex) {
    this.setState({
      mainNav: this.state.mainNav.map((x, i) => {
        if (x.subNav && activeIndex === i) {
          return { ...x, active: true }
        } else {
          return { ...x, active: false }
        }
      })
    })
  }

  hideSubNav () {
    this.setState({
      mainNav: this.state.mainNav.map((x, i) => {
        return { ...x, active: false }
      })
    })
  }

  getSubMenu (x, i) {
    if (x.subNav) {
      return (
        <SubNavContainer>
          <ul className='sub-nav'>
            {
              x.subNav.map((y, j) => <li key={j}><Link to={y.url}>{y.text}</Link></li>)
            }
          </ul>
        </SubNavContainer>
      )
    }
  }

  toggleMobileNav () {
    this.setState({
      mobileNav: [ ...this.state.mainNav ],
      mobileNavOpen: !this.state.mobileNavOpen,
      mobileProfileOpen: false,
      mobileNavChild: false
    })
  }

  toggleMobileProfile () {
    this.setState({
      mobileProfileOpen: !this.state.mobileProfileOpen,
      mobileNavOpen: false
    })
  }

  rootMenu () {
    this.setState({
      mobileNav: [ ...this.state.mainNav ],
      mobileNavChild: false
    })
  }

  descendMenu (path) {
    this.setState({
      mobileNav: [ ...this.state.mainNav[path].subNav ],
      mobileNavChild: true
    })
  }

  getSecondaryNav () {
    if (this.state.navMode === 'full') {
      if (this.props.email === null) {
        return (
          <ButtonToolbar className='secondary-nav logged-out'>
            <Button className='log-in-btn' onClick={this.props.onLoginClick.bind(this)} bsStyle='link'>Log In</Button>
            <LinkContainer to='/register'>
              <Button className='btn-grey'>Register</Button>
            </LinkContainer>
          </ButtonToolbar>
        )
      } else {
        return (
          <ButtonToolbar className='secondary-nav logged-in'>
            <DropdownButton bsStyle='link' title='My Profile'>
              <LinkContainer to={'/profile'}><MenuItem>Personal Information</MenuItem></LinkContainer>
              <MenuItem>Public Profile</MenuItem>
              <MenuItem>Security Settings</MenuItem>
              <MenuItem>Comms & Alerts</MenuItem>
              <MenuItem onClick={this.props.onLogout.bind(this)}>Log Out</MenuItem>
            </DropdownButton>
          </ButtonToolbar>
        )
      }
    } else if (this.state.navMode === 'mobile') {
      return (
        <ButtonToolbar className='secondary-nav'>
          <Button bsStyle='link' onClick={this.toggleMobileProfile.bind(this)} ><i className='fa fa-user' /></Button>
          <Button bsStyle='link' onClick={this.toggleMobileNav.bind(this)} ><i className='fa fa-bars' /></Button>
        </ButtonToolbar>
      )
    }
  }

  getPrimaryNav () {
    if (this.state.navMode === 'full') {
      return (
        <ul className='primary-nav'>
          { this.state.mainNav.map((x, i) => {
            if (x.url) {
              return (
                <CSHeaderNavItem
                  className={x.active ? 'active' : ''}
                  onMouseOver={this.showSubNav.bind(this, i)}
                  onMouseOut={this.hideSubNav.bind(this)}
                  key={i}
                  text={x.text}
                  activeClass='active'
                  subMenu={this.getSubMenu(x, i)}
                  to={x.url}
                />

              )
            } else {
              return (
                <li key={i}><a onClick={x.onClick}><span dangerouslySetInnerHTML={{__html: x.text}} /></a></li>
              )
            }
          }) }
        </ul>
      )
    } else if (this.state.navMode === 'mobile') {
      return <ul className='primary-nav' />
    }
  }

  render () {
    return (
      <header className='cs-header'>
        <div>
          <NavContainer>
            { this.getPrimaryNav() }
            { this.getSecondaryNav() }
          </NavContainer>
          {
            this.state.navMode === 'mobile' &&
            this.state.mobileNavOpen !== false &&
              <nav className='cs-mobile-menu'>
                <ul>
                  { this.state.mobileNavChild &&
                    <li className='back' key='back'>
                      <a onClick={this.rootMenu.bind(this)}><i className='fa fa-angle-left fa-2x' /> Back</a>
                    </li>
                  }
                  {
                    this.state.mobileNav.map((x, i) => {
                      return <li key={i}>
                        <Link to={x.url}><span dangerouslySetInnerHTML={{__html: x.text}} /></Link>
                        { x.subNav &&
                          <Button className='child' bsStyle='link' onClick={this.descendMenu.bind(this, i)}><i className='fa fa-angle-right fa-2x' /></Button>
                        }
                      </li>
                    })
                  }
                </ul>
              </nav>
          }
          {
            this.state.navMode === 'mobile' &&
            this.state.mobileProfileOpen !== false &&
              <nav className='cs-mobile-menu'>
                { this.props.email === null &&
                  <ul>
                    <li key={0}><a onClick={this.props.onLoginClick.bind(this)}>Log In</a></li>
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

        </div>
        <LogInModal />
      </header>
    )
  }
}

CSHeader.defaultProps = {
  mainNav: [
    {
      text: 'Credit Report',
      url: '/dashboard'
    },
    {
      text: 'LenderView<sup>®</sup>',
      url: '/lender-view'
    },
    {
      text: 'Credit Card',
      url: '/credit-cards',
      subNav: [
        {
          text: 'Search All Credit Cards',
          url: '/credit-cards'
        },
        {
          text: '0% Balance Transfers',
          url: '/credit-cards/?filter=zero-balance-transfers'
        },
        {
          text: '0% Purchase Cards',
          url: '/credit-cards/?filter=zero-purchases'
        },
        {
          text: 'Cash Back Cards',
          url: '/credit-cards/?filter=cash-back'
        },
        {
          text: 'Reward Cards',
          url: '/credit-cards/?filter=rewards'
        },
        {
          text: 'Credit Builder Cards',
          url: '/credit-cards/?filter=credit-builder'
        }
      ]
    },
    {
      text: 'Loans',
      url: '/loans'
    },
    {
      text: 'Debt Solutions',
      url: '/debt-solutions'
    },
    {
      text: 'Tools',
      url: '/tools'
    },
    {
      text: 'Resources',
      url: '/articles'
    }
  ]
}

export default CSHeader
