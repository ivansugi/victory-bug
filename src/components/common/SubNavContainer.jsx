import React from 'react'

export default class SubNavContainer extends React.Component {
  render () {
    const style = this.props.style || {}
    const addClass = this.props.className || ''
    return (
      <div className={`cs-sub-nav ${addClass}`} style={style}>
        <div className='container'>
          {this.props.children}
        </div>
      </div>
    )
  }
}
