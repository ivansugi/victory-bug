import React from 'react'
import { connect } from 'react-redux'

import MobileNavigation from './MobileNavigation'
import WebTopMenu2 from './WebTopMenu2.jsx'
import SideNav3 from './SideNav3'

import { toggleLoginModal, toggleSideNav } from '../../modules/layout'
import { attemptLogout } from '../../modules/login'

class CSHeader extends React.Component {
  render () {
    return (
      <div>
        <div className='hidden-lg'>
          <MobileNavigation
            user={this.props.user}
            email={this.props.email}
            onLogin={this.props.onLoginClick.bind(this)}
            onLogout={this.props.onLogout}
          />
        </div>
        <div className='visible-lg'>
          <WebTopMenu2
            user={this.props.user}
            email={this.props.email}
            current={this.props.routing}
            onLogout={this.props.onLogout}
            onLogin={this.props.onLoginClick.bind(this)}
            subMenu={this.props.subMenu}
          />
          { this.props.sideNav && this.props.email &&
            <SideNav3 current={this.props.routing} />
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    user: state.login.user,
    email: state.login.user.email,
    routing: state.routing.locationBeforeTransitions.pathname,
    sideNavOpen: state.layout.sideNavOpen
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onLoginClick: () => dispatch(toggleLoginModal()),
    onToggleSideNav: () => dispatch(toggleSideNav()),
    onLogout: () => dispatch(attemptLogout())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CSHeader)

export { CSHeader }
