import React from 'react'
import { Link } from 'react-router'

import style from './MobileNavigation.scss' // eslint-disable-line

export default class MobileNavigation extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      openHome: false,
      openOther: false,
      openUser: false
    }
  }

  toggleMenu (menu) {
    let openMenu = {
      openHome: false,
      openOther: false,
      openUser: false
    }
    if (menu === 'home') {
      openMenu = {
        openHome: !this.state.openHome,
        openOther: false,
        openUser: false
      }
    } else if (menu === 'other') {
      openMenu = {
        openHome: false,
        openOther: !this.state.openOther,
        openUser: false
      }
    } else if (menu === 'user') {
      openMenu = {
        openHome: false,
        openOther: false,
        openUser: !this.state.openUser
      }
    }
    this.setState(openMenu)
  }

  closeMenu () {
    this.setState({
      openOther: false,
      openUser: false,
      openHome: false
    })
  }

  render () {
    return (
      <div>
        <div className='cs-header-2-container'>
          <ul className='cs-header-2'>
            <li class='logo'>
              <Link to='/dashboard' onClick={this.closeMenu.bind(this)}>
                <img src='/images/logo/CreditSwift.png' />
              </Link>
            </li>

            {
              // !this.props.email &&
              //   <li class=''>
              //     <a onClick={this.toggleMenu.bind(this, 'user')}>
              //       { !this.state.openUser
              //         ? <i class='icon-user sub-menu-toggle animated bounceIn' />
              //         : <i class='icon-remove sub-menu-toggle animated rotateIn' />
              //       }
              //       <small>User</small>
              //     </a>
              //     <ul className={this.state.openUser ? 'sub-menu other-sub-menu animated fadeInRight' : 'sub-menu other-sub-menu hide'}>
              //       <li><a onClick={this.props.onLogin.bind(this)}>Log In</a></li>
              //       <li><Link to='/register'>Register</Link></li>
              //     </ul>
              //   </li>
            }

            <li class=''>
              <a onClick={this.toggleMenu.bind(this, 'other')}>
                { !this.state.openOther
                  ? <i class='icon-cs-nav-2 sub-menu-toggle animated bounceIn' />
                  : <i class='icon-remove sub-menu-toggle animated rotateIn' />
                }
                <small>Menu</small>
              </a>
              { !this.props.email
                ? <ul className={this.state.openOther ? 'sub-menu other-sub-menu animated fadeInRight' : 'sub-menu other-sub-menu hide'}>
                  <li><Link onClick={this.closeMenu.bind(this)} to='/debt-solutions'>Debt Solutions</Link></li>
                  <li><Link onClick={this.closeMenu.bind(this)} to='/tools'>Tools</Link></li>
                  <li><Link onClick={this.closeMenu.bind(this)} to='/articles'>Resources</Link></li>
                  <li><a onClick={this.props.onLogin.bind(this)}>Log In</a></li>
                  <li><Link onClick={this.closeMenu.bind(this)} to='/register'>Register</Link></li>
                </ul>
                : <ul className={this.state.openOther ? 'sub-menu other-sub-menu animated fadeInRight' : 'sub-menu other-sub-menu hide'}>
                  <li><Link onClick={this.closeMenu.bind(this)} to='/my-accounts'>My Accounts</Link></li>
                  <li><Link onClick={this.closeMenu.bind(this)} to='/debt-solutions'>Debt Solutions</Link></li>
                  <li><Link onClick={this.closeMenu.bind(this)} to='/tools'>Tools</Link></li>
                  <li><Link onClick={this.closeMenu.bind(this)} to='/articles'>Resources</Link></li>
                  <li><Link onClick={this.closeMenu.bind(this)} to='/profile'>Personal Information</Link></li>
                  <li><Link onClick={this.closeMenu.bind(this)} to='/profile'>Security Settings</Link></li>
                  <li><Link onClick={this.closeMenu.bind(this)} to='/profile'>Comms & Alert</Link></li>
                  <li><a onClick={this.props.onLogout.bind(this)} href='/profile'>Log Out</a></li>
                </ul>
              }
            </li>
          </ul>
        </div>
        { this.props.email &&
          <div className='cs-footer-2-container'>
            <ul className='cs-footer-2'>

              <li class='animated slideInLeft'><Link to='/dashboard'>
                <i class='icon-cs-home' />
                <small>Home</small>
              </Link></li>
              <li class='animated slideInLeft'><Link to='/overview'>
                <i class='icon-cs-lenderview' />
                <small>C Factors</small>
              </Link></li>
              <li class='animated slideInLeft'><Link to='/overview/lender-view'>
                <i class='icon-cs-lenderview' />
                <small>LenderView<sup>&reg;</sup></small>
              </Link></li>
              <li class='animated slideInLeft'><Link to='/credit-cards'>
                <i class='icon-cs-cards' />
                <small>Cards</small>
              </Link></li>
              <li class='animated slideInLeft'><Link to='/loans'>
                <i class='icon-cs-loans' />
                <small>Loans</small>
              </Link></li>
            </ul>
          </div>
        }
      </div>
    )
  }
}
