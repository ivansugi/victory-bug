import React from 'react'
import { Link, IndexLink, withRouter, browserHistory } from 'react-router'
import { FormControl } from 'react-bootstrap'

var LinkComponent = Link

class LeftMenuItem extends React.Component {
  render () {
    var additionalItems = []
    var classNames = 'left-menu__button'
    if (this.props.isIndex) {
      LinkComponent = IndexLink
    }
    if (this.props.counter > 0) {
      additionalItems.push(<div className='left-menu__counter'>{this.props.counter}</div>)
    }
    return <li>
      <LinkComponent
        className={classNames} to={this.props.to}
        activeClassName='left-menu__button--active'
      >
        <i class={this.props.icon} />
        <span dangerouslySetInnerHTML={{__html: this.props.label}} />
        {additionalItems}
      </LinkComponent>
    </li>
  }
}

LeftMenuItem.defaultProps = {
  'name': 'button',
  'isActive': false,
  'to': '/',
  'counter': 0
}

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      navMode: 'desktop',
      current: null
    }
  }

  componentWillMount () {
    if (window.innerWidth < 767) {
      this.setState({
        navMode: 'mobile'
      })
    }
  }

  navigate (event) {
    this.setState({current: event.target.value})
    browserHistory.push(event.target.value)
  }

  render () {
    return (
      <div class='hidden-xs hidden-lg'>
        { this.state.navMode === 'desktop' &&
          <ul className='left-menu'>
            {this.props.items.map((x, y) => {
              return <LeftMenuItem key={x.to} icon={x.icon} to={x.to} label={x.label} />
            })}
          </ul>
        }
        { this.state.navMode === 'mobile' &&
          <div className='select-wrapper block'>
            <FormControl ref='navigate' componentClass='select' placeholder='select' onChange={this.navigate.bind(this)} value={this.state.current}>
              {this.props.items.map((x, y) => {
                return <option key={x.to} value={x.to} dangerouslySetInnerHTML={{__html: x.label}} />
              })}
            </FormControl>
          </div>
        }
      </div>
    )
  }
}
