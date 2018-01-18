import React from 'react'
import { Link } from 'react-router'

import style from './MobilePageHeader.scss' // eslint-disable-line

export default class MobilePageHeader extends React.Component {
  render () {
    return (
      <div className='text-center mobile-page-header'>
        <Link to={this.props.back} className='back-button'>
          <i className='icon-chevron-left text-lg' />
        </Link>
        <span>{this.props.children}</span>
      </div>
    )
  }
}
