import React from 'react'

import NavItem from './NavItem'

export default class QuickLinks extends React.Component {
  render () {
    return (
      <div className='quick-links hidden-lg hidden-xs'>
        <h3>Shortcuts</h3>
        <ul>
          {
            this.props.items.map((x, i) => {
              return <NavItem key={i} to={x.to} >{x.label}</NavItem>
            })
          }
        </ul>
      </div>
    )
  }
}
