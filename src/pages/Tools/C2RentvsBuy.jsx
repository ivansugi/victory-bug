import React from 'react'
import { Alert, Row, Col, Table, Checkbox, FormControl, ControlLabel, Button, InputGroup, ButtonGroup } from 'react-bootstrap'


import CurrencyInput from 'react-currency-input'
import { Box, BoxHeader, BoxBody, BoxFooter } from '../../components/common/Box'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import RentVsBuy from '../../components/Loans/RentVsBuy'

export default class C2RentvsBuy extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loanAmount: 246500,
      deposit: 24650,
      legal: 0,
      apr: 2.1,
      duration: 25,
      payment: 0,
      payment25: 0,
      totalPayment: 0,
      totalPayment25: 0,
      yearlyPay: 0,
      yearlyPay25: 0,
      monthlyInterest: 0,
      monthlyInterest25: 0,
      yearlyInterest: 0,
      yearlyInterest25: 0,
      totalInterest: 0,
      totalInterest25: 0,
      stamp: 0,
      mortgageArrangement: 0,
      popover: false,
      why: 'test',
      propertySurvey: 0,
      valuation: 0,
      solicitorFee: 0,
      searches: 0,
      landRegistry: 0,
      brokerFee: 0,
      isFreehold: 'Freehold',
      aprView: 2.1
    }
  }
  

  
  render () {
    return (
      <div className='content-wrapper'>
        <div className='tools tools-debt-consolidation col-md-8 col-xs-12 col-md-offset-3'>
          <header className='page-header'>
            <h1 className='page-title'>Tools: RentVsBuy</h1>
            <RentVsBuy/>
            {/* <div class="box-tools pull-right oversize hidden-xs" style={{marginTop:"-5.2rem"}}>
              <img src="/images/house.png" class=""/>
            </div> */}
          </header>

          
        </div>
        <div className='clearfix' />
      </div>
    )
  }
}
