import React, { Component } from 'react'
import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap'

import CSHeaderNavItem from './CSHeaderNavItem'
import NavContainer from './NavContainer.jsx'
import SubNavContainer from './SubNavContainer.jsx'

export default class CSHeader extends Component {
  constructor (props) {
    super(props)
    this.state = {
      navMode: 'full',
      mainNav: props.mainNav.map((x) => { return { ...x, active: false } }),
      mobileNav: [ ...props.mobileNav ],
      mobileNavChild: false,
      mobileNavOpen: false,
      mobileProfileOpen: false
    }
  }

  componentWillMount () {
    if (window.innerWidth < 1199) {
      this.setState({ navMode: 'mobile' })
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
      mobileNav: [ ...this.state.mobileNav ],
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
      if (!this.props.email) {
        return (
          <div className='navbar-collapse'>
            <div className='navbar-text navbar-right'>
              <button className='btn btn-link log-in-btn' onClick={this.props.onLogin} >Log In</button>
              <Link class=' btn btn-default btn-grey' to='/register'>Register</Link>
            </div>
          </div>
        )
      } else {
        return (
          <div className='navbar-collapse'>
            <div className='navbar-text navbar-right'>
              <DropdownButton bsStyle='link' title='My Profile' id='my-profile'>
                <LinkContainer to={'/profile'}><MenuItem>Personal Information</MenuItem></LinkContainer>
                <MenuItem>Public Profile</MenuItem>
                <MenuItem>Security Settings</MenuItem>
                <MenuItem>Comms & Alerts</MenuItem>
                <LinkContainer to={'/dispute'}><MenuItem>Dispute</MenuItem></LinkContainer>
                <MenuItem onClick={this.props.onLogout.bind(this)}>Log Out</MenuItem>
              </DropdownButton>
            </div>
          </div>
        )
      }
    } else if (this.state.navMode === 'mobile') {
      return (
        <ButtonToolbar className='secondary-nav'>
          <button class='btn btn-link' onClick={this.toggleMobileProfile.bind(this)} ><i className='fa fa-user' /></button>
          <button class='btn btn-link' onClick={this.toggleMobileNav.bind(this)} ><i className='fa fa-bars' /></button>
        </ButtonToolbar>
      )
    }
  }

  getPrimaryNav () {
    if (this.state.navMode === 'full' && this.props.email) {
      return (
        <div class='navbar-header'>
          <ul className='primary-nav nav navbar-nav'>
            { this.state.mainNav.map((x, i) => {
              if (x.url) {
                return (
                  <CSHeaderNavItem
                    current={this.props.current}
                    className={x.active ? 'active' : ''}
                    onMouseEnter={this.showSubNav.bind(this, i)}
                    onMouseLeave={this.hideSubNav.bind(this)}
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
        </div>
      )
    }
    return null
  }

  showTooltip (tooltip) {
    this.setState({tooltip})
  }

  hideTooltip () {
    this.setState({tooltip: null})
  }

  getTooltip (id, text) {
    if (this.state.tooltip === id) {
      return (<div class='tooltip right in'> <div class='tooltip-arrow' /> <div class='tooltip-inner'> {text} </div> </div>)
    }
    return null
  }

  render () {
    return (
      <div>
        <header className='cs-header'>
          <NavContainer>
            { this.getPrimaryNav() }
            { this.getSecondaryNav() }
          </NavContainer>
          {
            !this.state.navMode &&
            this.state.mobileNavOpen !== false &&
              <nav className='cs-mobile-menu'>
                <ul>
                  {
                    // this.state.mobileNavChild &&
                    // <li className='back' key='back'>
                    //   <a onClick={this.rootMenu.bind(this)}><i className='fa fa-angle-left fa-2x' /> Back</a>
                    // </li>
                  }
                  {
                    this.state.mobileNav.map((x, i) => {
                      return <li key={i}>
                        <Link to={x.url}><span dangerouslySetInnerHTML={{__html: x.text}} /></Link>
                        {
                          // x.subNav &&
                          // <Button className='child' bsStyle='link' onClick={this.descendMenu.bind(this, i)}><i className='fa fa-angle-right fa-2x' /></Button>
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
        { this.props.email &&
          <nav className='cs-side-nav'>
            <ul>
              <li
                class={this.props.current === '/dashboard' ? 'active' : ''}
                onMouseEnter={this.showTooltip.bind(this, 'dashboard')}
                onMouseLeave={this.hideTooltip.bind(this)}
              ><Link to='/dashboard/old'>
                <i class='icon-cs-home' />
                {this.getTooltip('dashboard', 'Home')}
              </Link></li>
              <li class={this.props.current === '/overview' ? 'active' : ''}
                onMouseEnter={this.showTooltip.bind(this, 'overview')}
                onMouseLeave={this.hideTooltip.bind(this)}
              ><Link to='/overview'>
                <i class='icon-cs-lenderview' />
                {this.getTooltip('overview', 'Credit Factors')}
              </Link></li>
              <li class={this.props.current === '/overview/lender-view' ? 'active' : ''}
                onMouseEnter={this.showTooltip.bind(this, 'lender-view')}
                onMouseLeave={this.hideTooltip.bind(this)}
              ><Link to='/overview/lender-view'>
                <i class='icon-cs-lenderview' />
                {this.getTooltip('lender-view', 'LenderView')}
              </Link></li>
              <li class={this.props.current === '/lenderview/score-booster' ? 'active' : ''}
                onMouseEnter={this.showTooltip.bind(this, 'score-booster')}
                onMouseLeave={this.hideTooltip.bind(this)}
              ><Link to='/lenderview/score-booster'>
                <i class='icon-cs-lenderview' />
                {this.getTooltip('score-booster', 'Score Booster')}
              </Link></li>
              <li class={this.props.current === '/score-booster/my-accounts' ? 'active' : ''}
                onMouseEnter={this.showTooltip.bind(this, 'my-accounts')}
                onMouseLeave={this.hideTooltip.bind(this)}
              ><Link to='/my-accounts'>
                <i class='icon-cs-lenderview' />
                {this.getTooltip('my-accounts', 'My Accounts')}
              </Link></li>
              {
                // <li class={this.props.current === '/credit-cards' ? 'active' : ''}
                //   onMouseEnter={this.showTooltip.bind(this, 'cards')}
                //   onMouseLeave={this.hideTooltip.bind(this)}
                // ><Link to='/credit-cards'>
                //   <i class='icon-cs-cards' />
                //   {this.getTooltip('cards', 'Credit Cards')}
                // </Link></li>
                // <li class={this.props.current === '/loans' ? 'active' : ''}
                //   onMouseEnter={this.showTooltip.bind(this, 'loans')}
                //   onMouseLeave={this.hideTooltip.bind(this)}
                // ><Link to='/loans'>
                //   <i class='icon-cs-loans' />
                //   {this.getTooltip('loans', 'Loans')}
                // </Link></li>
              }
            </ul>
          </nav>
        }
      </div>
    )
  }
}

CSHeader.defaultProps = {
  mainNav: [
    {
      text: 'Credit Report',
      url: '/overview'
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
  ],
  mobileNav: [
    {
      text: 'Resources',
      url: '/articles'
    }
  ]
}
