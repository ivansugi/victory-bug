import React, { Component } from 'react'
import { Link } from 'react-router'

class CSHeaderNavItem2 extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hoverIntent: false
    }
  }
  openSubMenu () {
    if (this.props.onMouseEnter) {
      this.props.onMouseEnter()
      // console.log('open');
      // if (this.timer && this.state.hoverIntent === true) {
      //   console.log('cancel');
      //   clearTimeout(this.timer)
      //   this.timer = null
      // }
    }
  }

  closeSubMenu () {
    if (this.props.onMouseLeave) {
      this.props.onMouseLeave()
      // const that = this
      // this.setState({
      //   hoverIntent: true
      // })
      // console.log('closing');
      // this.timer = setTimeout(function () {
      //   that.setState({hoverIntent: false})
      //   that.props.onMouseLeave()
      //   console.log('closed');
      // }, 1000)
    }
  }

  render () {
    const { current, link } = this.props
    const { to, text } = link
    return (
      <li className={current === to ? 'active' : ''}>
        <Link
          to={to}
          onMouseEnter={this.openSubMenu.bind(this)}
          onMouseLeave={this.closeSubMenu.bind(this)}
        >
          <span dangerouslySetInnerHTML={{__html: text}} />
        </Link>
      </li>
    )
  }
}

export default CSHeaderNavItem2
