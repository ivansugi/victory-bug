import React from 'react'

export class Box extends React.Component {
  render () {
    const addClass = this.props.className || ''
    return (
      <div className={`box ${addClass}`}>
        {this.props.children}
      </div>
    )
  }
}

export class BoxHeader extends React.Component {
  render () {
    const addClass = this.props.className || ''
    return (
      <div className={`box-header ${addClass}`}>
        {this.props.children}
      </div>
    )
  }
}

export class BoxBody extends React.Component {
  render () {
    const addClass = this.props.className || ''
    return (
      <div className={`box-body ${addClass}`} id={this.props.id}>
        {this.props.children}
      </div>
    )
  }
}

export class BoxFooter extends React.Component {
  render () {
    const addClass = this.props.className || ''
    return (
      <div className={`box-footer ${addClass}`}>
        {this.props.children}
      </div>
    )
  }
}

export class BoxDesktop extends React.Component {
  render () {
    const addClass = this.props.className || ''
    return (
      <div className={`no-box-desktop ${addClass}`}>
        {this.props.children}
      </div>
    )
  }
}
