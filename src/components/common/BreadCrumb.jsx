import React from 'react'
import { Link } from 'react-router'

export default class BreadCrumb extends React.Component {
  // constructor (props) {
  //   super(props)
  // }

  render () {
    return (
      <ol class='breadcrumb'>
        <li><Link to='/'> <i className="fa fa-chevron-left"></i> Home</Link></li>
      </ol>
    )
  }
}
