import React from 'react'
// import { Link } from 'react-router'

class Rating extends React.Component {
  render () {
    return (
      <span className={this.props.className + ' rating'}>
        {
          this.props.stars &&
          <span>
            <i className='fa fa-star' />
            <i className='fa fa-star' />
            <i className='fa fa-star' />
            <i className='fa fa-star' />
            {
              this.props.average &&
              <span>&nbsp; 4.0</span>
            }
          </span>
        }
        {
          this.props.count &&
          <span>
            {' '} <a href=''>233 reviews</a>
          </span>
        }
      </span>
    )
  }
}

Rating.defaultProps = {
  count: true,
  stars: true,
  average: true,
  className: ''
}

export default Rating
