import React, { Component } from 'react'
import { Link } from 'react-router'

class CSHeaderNavItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hoverIntent: false
    }
  }
  openSubMenu () {
    if (this.props.subMenu) {
      this.props.onMouseEnter()
    }
    if (this.timer && this.state.hoverIntent === true) {
      clearTimeout(this.timer)
      this.timer = null
    }
  }

  closeSubMenu () {
    if (this.props.subMenu) {
      const that = this
      this.setState({
        hoverIntent: true
      })

      this.timer = setTimeout(function () {
        console.log('closing sub menu')
        that.props.onMouseLeave()
      }, 100)
    }
  }

  render () {
    const { current, to, className, subMenu, text } = this.props
    return (
      <li className={current === to ? 'active' : ''}>
        <Link
          to={to}
          className={className}
          onMouseEnter={this.openSubMenu.bind(this)}
          onMouseLeave={this.closeSubMenu.bind(this)}
        ><span dangerouslySetInnerHTML={{__html: text}} />{subMenu}</Link>
      </li>
    )
  }
}

export default CSHeaderNavItem
