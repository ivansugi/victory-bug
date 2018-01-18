import React from 'react'

import { Col, Row, Grid } from 'react-bootstrap'
import { Link } from 'react-router'

import Footmark from './Footmark'

export default class CSFooter extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      screen: 'full',
      widget: [true, true, true, true]
    }
  }

  componentWillMount () {
    if (window.innerWidth < 768) {
      this.setState({
        screen: 'mobile',
        widget: [true, false, false, false]
      })
    }
  }

  openWidget (i) {
    let newState = [false, false, false, false]
    newState[i] = true
    this.setState({
      widget: newState
    })
  }

  render () {
    return (
      <div class='footer-menu'>
        <div class='container'>
          <Row>
            <Col md={3} sm={6}>
              <div class='footer-widget'>
                <h4 onClick={this.openWidget.bind(this, 0)}>
                      Company Info
                      {
                        this.state.widget[0] === true
                        ? <i className='fa fa-2x fa-angle-down' />
                        : <i className='fa fa-2x fa-angle-up' />
                      }
                </h4>
                {
                      this.state.widget[0] === true &&
                      <ul>
                        <li><Link to='/pages/1'>About Credit Swift</Link></li>
                        {/*<li><Link to='/pages/1'>Careers</Link></li>*/}
                        <li><Link to='/pages/1'>Help Center</Link></li>
                        <li><Link to='/pages/1'>Privacy Policy</Link></li>
                        <li><Link to='/pages/1'>Terms of Use</Link></li>
                      </ul>
                    }

              </div>
            </Col>
            <Col md={3} sm={6}>
              <div class='footer-widget'>
                <h4 onClick={this.openWidget.bind(this, 1)}>
                      Popular Offers
                      {
                        this.state.widget[1] === true
                        ? <i className='fa fa-2x fa-angle-down' />
                        : <i className='fa fa-2x fa-angle-up' />
                      }
                </h4>
                {
                      this.state.widget[1] === true &&
                      <ul>
                        <li><Link to='/pages/1'>Best Credit Cards From Our Partners</Link></li>
                        {/*<li><Link to='/pages/1'>Credit Cards for Limited Credit</Link></li>*/}
                        <li><Link to='/pages/1'>Credit Cards for Poor Credit</Link></li>
                        <li><Link to='/pages/1'>Credit Cards for Good Credit</Link></li>
                        <li><Link to='/pages/1'>Personal Loans</Link></li>
                      </ul>
                    }
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div class='footer-widget'>
                <h4 onClick={this.openWidget.bind(this, 2)}>
                      Credit Resources
                      {
                        this.state.widget[2] === true
                        ? <i className='fa fa-2x fa-angle-down' />
                        : <i className='fa fa-2x fa-angle-up' />
                      }
                </h4>
                {
                      this.state.widget[2] === true &&
                      <ul>
                        <li><Link to='/pages/1'>Credit and Finance Articles</Link></li>
                        <li><Link to='/pages/1'>Credit Card Reviews</Link></li>
                        <li><Link to='/pages/1'>Financial Calculators</Link></li>
                      </ul>
                    }
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div class='footer-widget'>
                <h4 onClick={this.openWidget.bind(this, 3)}>
                  Notable Links
                      {
                        this.state.widget[3] === true
                        ? <i className='fa fa-2x fa-angle-down' />
                        : <i className='fa fa-2x fa-angle-up' />
                      }
                </h4>
                {
                  this.state.widget[3] === true &&
                  <ul>
                    <li><Link to='/pages/1'>What is a Good Credit Score?</Link></li>
                    <li><Link to='/pages/1'>Quick Tips for Your Credit Health</Link></li>
                    {/*<li><Link to='/pages/1'>Free Credit Report</Link></li>
                    <li><Link to='/pages/1'>Free Credit Monitoring</Link></li>*/}
                    <li><Link to='/pages/1'>Free Credit Score</Link></li>
                  </ul>
                }
              </div>
            </Col>
          </Row>
          <ul class='social-links'>
            <li><a href='http://facebook.com' class='Facebook'><i class='fa-2x fa fa-facebook' /></a></li>
            <li><a href='http://twitter.com' class='Twitter'><i class='fa-2x fa fa-twitter' /></a></li>
            <li><a href='http://whatsapp.com' class='WhatsApp'><i class='fa-2x fa fa-whatsapp' /></a></li>
          </ul>
          <Footmark />
        </div>
      </div>
    )
  }
}
