import React from 'react'
import { Link } from 'react-router'

export default class MobilePager extends React.Component {
  render () {
    const { next, prev } = this.props
    return (
      <div className='mobile-pager container'>
        <div className='row'>
          <div className='col-xs-6 text-left'>
            <Link to={prev.to} className='nav-button'>
              <i className='icon-chevron-left text-lg' />
              <span class=''>Previous</span>
            </Link>
          </div>
          <div className='col-xs-6 text-right'>
            <Link to={next.to} className='nav-button'>
              <span class=''>Next Factor</span>
              <i className='icon-chevron-right text-lg' />
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
