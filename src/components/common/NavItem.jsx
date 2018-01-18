import React, { Component } from 'react'
import { Link, IndexLink, withRouter } from 'react-router'

class NavItem extends Component {
  render () {
    const { router } = this.props
    const { index, to, children, className } = this.props

    let isActive = true
    if (router) {
      if (router.isActive('/', true) && index) {
        isActive = true
      } else {
        isActive = router.isActive(to, true)
      }
    }
    //console.log("navitem"+index)
    const LinkComponent = index ? IndexLink : Link

    return (
      <li className={isActive ? 'active' : ''}>
        <LinkComponent to={to} className={className} >{children}</LinkComponent>
      </li>
    )
  }
}

NavItem = withRouter(NavItem) // eslint-disable-line

export default NavItem
