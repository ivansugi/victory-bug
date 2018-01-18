import React from 'react'
import { Link } from 'react-router'

export default class AdTower extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="ad-tower">
        <Link className='disclosure'>Advertiser Disclosure</Link>
        <ul>
          <li>      
            <Link to='/articles/1'><img src="/images/side/banner2.jpg"/></Link>
          </li>
          <li>
            <Link to='/articles/1'><img src="/images/side/banner1.png"/></Link>
          </li>
        </ul>
      </div>
    )
  }
}
