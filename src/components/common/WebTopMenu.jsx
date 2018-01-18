import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { DropdownButton, MenuItem } from 'react-bootstrap'
import { Link } from 'react-router'

import NavContainer from './NavContainer.jsx'
import CSHeaderNavItem2 from './CSHeaderNavItem2'
import MegaMenuContainer from './MegaMenuContainer.jsx'

export default class WebTopMenu extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      megaMenu: null,
      hovering: false,
      hoverIntent: false
    }
  }

  showSubNav (e) {
    this.setState({
      megaMenu: e,
      hovering: true
    })
    if (this.timer && this.state.hoverIntent === true) {
      clearTimeout(this.timer)
      this.timer = null
    }
  }

  hideSubNav () {
    const that = this
    this.setState({
      hoverIntent: true,
      hovering: false
    })
    this.timer = setTimeout(function () {
      if (!that.state.hovering) {
        that.setState({
          megaMenu: null,
          hoverIntent: false
        })
      }
    }, 300)
  }

  hovering () {
    this.setState({ hovering: true })
    clearTimeout(this.timer)
    this.timer = null
  }

  render () {
    return (
      <header className='cs-header'>
        <NavContainer>
          <div class='navbar-header'>
            { this.props.email &&
              <ul className='primary-nav nav navbar-nav'>
                <CSHeaderNavItem2
                  current={this.props.current}
                  link={{ text: 'Credit Report', to: '/dashboard' }}
                />
                <CSHeaderNavItem2
                  current={this.props.current}
                  link={{ text: 'LenderView®', to: '/overview/lender-view' }}
                />
                <CSHeaderNavItem2
                  current={this.props.current}
                  link={{ text: 'Credit Card', to: '/credit-cards' }}
                  onMouseEnter={this.showSubNav.bind(this, 'credit-cards')}
                  onMouseLeave={this.hideSubNav.bind(this)}
                />
                <CSHeaderNavItem2
                  current={this.props.current}
                  link={{ text: 'Loans', to: '/loans' }}
                  onMouseEnter={this.showSubNav.bind(this, 'loans')}
                  onMouseLeave={this.hideSubNav.bind(this)}
                />
                <CSHeaderNavItem2
                  current={this.props.current}
                  link={{ text: 'Debt Solutions', to: '/debt-solutions' }}
                />
                <CSHeaderNavItem2
                  current={this.props.current}
                  link={{ text: 'Tools', to: '/tools' }}
                />
                {
                  // <CSHeaderNavItem2
                  //   current={this.props.current}
                  //   link={{ text: 'Resources', to: '/articles' }}
                  // />
                }
              </ul>
            }
          </div>
          <div className='navbar-collapse'>
            { this.props.email
              ? <div className='navbar-text navbar-right'>
                <DropdownButton bsStyle='link' title='My Profile' id='my-profile'>
                  <LinkContainer to={'/profile'}><MenuItem>Personal Information</MenuItem></LinkContainer>
                  <MenuItem>Public Profile</MenuItem>
                  <MenuItem>Security Settings</MenuItem>
                  <MenuItem>Comms & Alerts</MenuItem>
                  <LinkContainer to={'/dispute'}><MenuItem>Dispute</MenuItem></LinkContainer>
                  {
                    <MenuItem onClick={this.props.onLogout}>Log Out</MenuItem>
                  }
                </DropdownButton>
              </div>
              : <div className='navbar-text navbar-right'>
                <button className='btn btn-link log-in-btn' onClick={this.props.onLogin} >Log In</button>
                <Link class=' btn btn-default btn-grey' to='/register'>Register</Link>
              </div>
            }
          </div>
        </NavContainer>
        { this.state.megaMenu &&
          <MegaMenuContainer
            onMouseEnter={this.hovering.bind(this)}
            onMouseLeave={this.hideSubNav.bind(this)}
            menuSet={this.state.megaMenu}
          />
        }
      </header>
    )
  }
}
