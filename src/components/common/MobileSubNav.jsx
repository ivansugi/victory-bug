import React from 'react'
import {Link} from 'react-router'

export default class MobileSubNav extends React.Component {
  // constructor (props) {

  render () {
    return (
      <div className='mobile-sub-nav'>
        <Link class='back-link' to={this.props.backTo}><i class='fa fa-chevron-left' /></Link>
        <h3 class='lender-mobile text-center' dangerouslySetInnerHTML={{__html: this.props.title}} />
        <div class='lender-menu-mobile'>
          <Link to={this.props.leftTo} className='lm-left'><i class='fa fa-chevron-left' /></Link>
          <Link to={this.props.rightTo} className='lm-right'><i class='fa fa-chevron-right' /></Link>
        </div>
        <ul class='dotted'>
          {this.props.dots.map((x, y) => (
            <li key={y}><Link to={x.to} className={x.class}>&nbsp;</Link></li>
          ))}
        </ul>
      </div>
    )
  }
}
