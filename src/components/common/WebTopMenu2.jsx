import React from 'react'
import { Link } from 'react-router'
import MegaMenuContainer2 from './MegaMenuContainer2.jsx'
import style from './WebTopMenu2.scss' // eslint-disable-line

const testSubMenu2 = [
  {
    text: 'Best credit cards of 2017',
    to: '/somewhere'
  },
  {
    text: 'Best rewards cards',
    to: '/somewhere'
  },
  {
    text: 'Best cash back cards',
    to: '/somewhere'
  },
  {
    text: 'Best travel cards',
    to: '/somewhere'
  },
  {
    text: 'Best balance transfer cards',
    to: '/somewhere'
  },
  {
    text: 'Best 0% APR cards',
    to: '/somewhere'
  },
  {
    text: 'Best student cards',
    to: '/somewhere'
  },
  {
    text: 'Best cards for bad credit',
    to: '/somewhere'
  }
]

class MenuItem extends React.Component {
  getActiveClass () {
    const { current, to, index } = this.props
    if (index && current && current.indexOf(to) === 0) {
      return 'active'
    } else if (to === current) {
      return 'active'
    } else {
      return ''
    }
  }
  render () {
    const { current, index, to, children, subMenu, ...props } = this.props
    return (
      <li className={this.getActiveClass(current, index)}>
        <Link {...props} to={to}>
          {children}
          {subMenu &&
            <ul class='sub-sub-menu'>
              {subMenu.map((x, i) => (
                <li key={i}><Link to={x.to}>{x.text}</Link></li>
              ))}
            </ul>
          }
        </Link>
      </li>
    )
  }
}
// function mapStateToProps (state) {
//   return {
//     user: state.login.user,
//    // scores: state.login.csFrontEnd.scores[state.login.csFrontEnd.scores.length - 1],
//     // scores: state.login.csFrontEnd.scores[state.login.csFrontEnd.scores.length - 1],
//     // factors: state.login.csFrontEnd.uiFactors,
//     // cSScore: state.login.csFrontEnd.csScore,
//     // user: state.login.user
//   }
// }

// function mapDispatchToProps (dispatch) {
//   return {
//   }
// }
export default class WebTopMenu2 extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      megaMenu: null,
      hovering: false,
      hoverIntent: false,
      profileOpen: false,
      hoveringHome: false
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

  hoveringHome () {
    this.setState({
      hoveringHome: !this.state.hoveringHome
    })
  }

  render () {
    const { current, email, subMenu } = this.props

    const rotateChevron = this.state.profileOpen ? 'rotate-chevron-up' : 'rotate-chevron-down'
    return (
      <div className='web-top-menu-2-container' style={{
        height: subMenu ? 80 : 40
      }}>
        <header className='web-top-menu-2'>
          <nav class='navbar navbar-default navbar-main'>
            <div class='container-fluid'>
              <div class='navbar-header'>
                <Link to={this.props.email ? '/dashboard' : '/'} className='navbar-brand'>
                  <img src='/images/logo/combination.png' />
                </Link>
              </div>
              <div class='navbar-collapse'>
                <ul class='nav navbar-nav nav-main'>
                  {
                    // <MenuItem current={current} to='/dashboard' index>CREDIT REPORT</MenuItem>
                    // <MenuItem current={current} to='/overview/lender-view' index>LENDERVIEW®</MenuItem>
                  }
                  <MenuItem
                    current={current}
                    to='/credit-cards'
                    onMouseEnter={this.showSubNav.bind(this, 'credit-cards')}
                    onMouseLeave={this.hideSubNav.bind(this)}
                    index
                  >CREDIT CARD {this.state.megaMenu === 'credit-cards' && <div class='triangle' />}</MenuItem>
                  <MenuItem
                    current={current}
                    to='/loans'
                    onMouseEnter={this.showSubNav.bind(this, 'loans')}
                    onMouseLeave={this.hideSubNav.bind(this)}
                    index
                  >LOANS {this.state.megaMenu === 'loans' && <div class='triangle' />}</MenuItem>
                  <MenuItem current={current} to='/debt-solutions' index>DEBT SOLUTIONS</MenuItem>
                  <MenuItem current={current} to='/tools' index>TOOLS</MenuItem>
                  {
                    // <MenuItem current={current} to='/articles' index>RESOURCES</MenuItem>
                  }
                </ul>
                <div class='navbar-form navbar-right'>
                  { !email
                    ? <button type='button' class='btn btn-cs-primary btn-sm' onClick={this.props.onLogin}>Join or log in</button>
                    : <div class={this.state.profileOpen ? 'btn-group open' : 'btn-group'}>
                      <button
                        type='button'
                        class='btn btn-link dropdown-toggle'
                        onClick={() => this.setState({profileOpen: false})}
                        onMouseEnter={() => this.setState({profileOpen: true})}
                      >
                        Hi, {this.props.user.firstName} <i className={`icon-chevron-down ${rotateChevron}`} />
                        {this.state.profileOpen &&
                          <div class='triangle' />
                        }
                      </button>
                      <ul class='dropdown-menu' onMouseLeave={() => this.setState({profileOpen: false})}>
                        <li><Link to='/profile'>Profile</Link></li>
                        <li><a href='#'>Action</a></li>
                        <li><a href='#'>Another action</a></li>
                        <li><a href='#'>Something else here</a></li>
                        <li role='separator' class='divider' />
                        <li><a onClick={this.props.onLogout}>Log Out</a></li>
                      </ul>
                    </div>
                  }
                </div>
              </div>
            </div>
          </nav>
          { subMenu &&
            <nav class='navbar navbar-default navbar-sub'>
              <div class='container-fluid'>
                <div class='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
                  <ul class='nav navbar-nav nav-sub'>
                    <li class='home-link-container'>
                      <Link to='/dashboard' onMouseEnter={this.hoveringHome.bind(this)} onMouseLeave={this.hoveringHome.bind(this)}>
                        { !this.state.hoveringHome
                          ? <div class='icon cs-home-svg' style={{
                            backgroundSize: 'contain',
                            width: 20,
                            height: 20
                          }} />
                          : <div class='icon cs-home-blue-svg' style={{
                            backgroundSize: 'contain',
                            width: 20,
                            height: 20
                          }} />
                        }
                      </Link>
                    </li>
                    <MenuItem current={current} to='/debt-solutions/best-of' subMenu={testSubMenu2}>Best of</MenuItem>
                    <MenuItem current={current} to='/debt-solutions/compare'>Compare</MenuItem>
                    <MenuItem current={current} to='/debt-solutions/calculators'>Calculators</MenuItem>
                    <MenuItem current={current} to='/debt-solutions/read-learn'>Read & learn</MenuItem>
                  </ul>
                </div>
              </div>
            </nav>
          }
          { this.state.megaMenu &&
            <MegaMenuContainer2
              onMouseEnter={this.hovering.bind(this)}
              onMouseLeave={this.hideSubNav.bind(this)}
              menuSet={this.state.megaMenu || 'credit-cards'}
            />
          }
        </header>
      </div>
    )
  }
}
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(WebTopMenu2)
