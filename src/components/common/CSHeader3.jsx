import React, { Component } from 'react'

// import CSSideNav from './CSSideNav'
import SideNav3 from './SideNav3'
// import WebTopMenu from './WebTopMenu.jsx'
import WebTopMenu2 from './WebTopMenu2.jsx'
import MobileTopMenu from './MobileTopMenu.jsx'
// import MobileTopMenu2 from './MobileTopMenu2.jsx'

export default class CSHeader3 extends Component {
  constructor (props) {
    super(props)
    this.state = {
      screen: 'desktop'
    }
  }

  componentWillMount () {
    if (window.innerWidth < 1199) {
      this.setState({ screen: 'mobile' })
    }
  }

  render () {
    return (
      <div>
        { this.state.screen === 'desktop' &&
          <WebTopMenu2
            email={this.props.email}
            screen={this.state.screen}
            current={this.props.current}
            onLogout={this.props.onLogout}
            onLogin={this.props.onLogin}
          />
        }
        { this.state.screen === 'mobile' &&
          <MobileTopMenu
            email={this.props.email}
            screen={this.state.screen}
            current={this.props.current}
            onLogout={this.props.onLogout}
            onLogin={this.props.onLogin}
          />
        }
        { this.props.email &&
          <SideNav3
            current={this.props.current}
          />
        }
      </div>
    )
  }
}
