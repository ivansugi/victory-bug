import React from 'react'
import { Link } from 'react-router'

export default class CSSideNav extends React.Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     tooltip: null
  //   }
  // }

  // getTooltip (id, text) {
  //   if (this.state.tooltip === id) {
  //     return (<div class='tooltip right in'> <div class='tooltip-arrow' /> <div class='tooltip-inner'> {text} </div> </div>)
  //   }
  //   return null
  // }

  // showTooltip (tooltip) {
  //   this.setState({tooltip})
  // }

  // hideTooltip () {
  //   this.setState({tooltip: null})
  // }

  render () {
    return (
      <div class='navigation'>
        <div class='navigation__links'>
          <Link class='navigation__link navigation__link--active' aria-current='true' to='/dashboard'>
            <div class='navigation__link-text'>Home</div>
          </Link>
          <Link class='navigation__link' aria-current='true' to='/overview'>
            <div class='navigation__link-text'>Credit Score</div>
          </Link>
          <div class='navigation__sublink-container'>
            <Link class='navigation__sublink' aria-current='false' to='/overview'>
              <div class='navigation__sublink-text'>Overview</div>
            </Link>
            <Link class='navigation__sublink' aria-current='false' to='/credit-factors/credit-usage'>
              <div class='navigation__sublink-text'>Credit Factors</div>
            </Link>
          </div>
          <Link class='navigation__link' aria-current='true' to='/overview/lender-view'>
            <div class='navigation__link-text'>LenderView</div>
          </Link>
          <div class='navigation__sublink-container'>
            <Link class='navigation__sublink' aria-current='false' to='/overview/lender-view'>
              <div class='navigation__sublink-text'>Overview</div>
            </Link>
            <Link class='navigation__sublink' aria-current='false' to='/lender-view/credit-status'>
              <div class='navigation__sublink-text'>LenderView Factors</div>
            </Link>
          </div>
          <Link class='navigation__link' aria-current='false' to='/lender-view/score-booster'>
            <div class='navigation__link-text'>Booster</div>
          </Link>
        </div>
      </div>
    )
  }
}
