import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Alert, Row, Col, Table, Checkbox, FormControl, ControlLabel, Button, InputGroup } from 'react-bootstrap'
import CurrencyInput from 'react-currency-input'



import { Box, BoxHeader, BoxBody, BoxFooter } from '../common/Box'

import Slider, { createSliderWithTooltip } from 'rc-slider'
import { monthsShort } from 'moment';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
//import * as V from 'victory';
import {VictoryChart, VictoryLine, VictoryCursorContainer} from 'victory';

const SliderWithTooltip = createSliderWithTooltip(Slider)
const style = { width: '100%', marginTop:"50px"}
function mapDispatchToProps (dispatch) {
  return {
    onLoginClick: () => dispatch(toggleLoginModal()),
    onToggleSideNav: () => dispatch(toggleSideNav()),
    onLogout: () => dispatch(attemptLogout())
  }
}
class RentVsBuy extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
          ret : "",
          loanAmount:2000,
          monthly:800,
          minimum:20,
          apr :0,
          rent:1000,
          month:0,
          payment:20,
          mp : 2,
          totalInterest:0,
          totalInterestMinimum:0,
        }
    }
    dataRent = () => {
        var data = [];
        var baseline = this.state.rent;
        for (var i = 1; i <= 25; i++) {
            baseline = baseline+ (baseline *5/100);
            data[i] = {
                a:i,
                b:baseline
            }
        }
       // debugger;
        return data;
    }
    dataMortgage = () => {
        var data = [];
        var baseline = this.state.monthly;
        for (var i = 1; i <= 25; i++) {
            baseline = baseline+ (baseline *1/100);
            data[i] = {
                a:i,
                b:baseline
            }
        }
        //debugger;
        return data;
    }
    onUpClick (type="") {
        if (type == "balance") {
            this.setState({ loanAmount: parseFloat(this.state.loanAmount) + 100 })
            this.calculateMinimumPayment (parseFloat(this.state.loanAmount) + 100, 0) 
        } else if (type == "apr") {
            this.setState({ apr: parseFloat(this.state.apr) + 0.1 })
            this.calculateMinimumPayment (0,parseFloat(this.state.apr) + 0.1) 
        }else if (type == "minimum") {
            this.setState({ minimum: parseFloat(this.state.minimum) + 10 })
            this.calculateHowLong (this.state.loanAmount,parseFloat(this.state.minimum) + 10, "minimum") 
        }
        else if (type == "payment") {
            this.setState({ payment: parseFloat(this.state.payment) + 10 })
            this.calculateHowLong (this.state.loanAmount,parseFloat(this.state.payment) + 10, "non minimum") 
        }
        //this.onCalculateClicked()
    }
    render() {
        //const CustomContainer = createContainer("cursor", "selection");
        return (
            <Box className="tools">
               <BoxBody>
              
                <Col md={4} className='card-list'>
                    <Col md={12} className='card-list text-center'>
                        <ControlLabel>Your Postcode </ControlLabel><br/>
                        <InputGroup>
                            <FormControl
                                type="text"
                                
                                placeholder="Enter postcode"
                               
                            />
                        </InputGroup>
                    </Col>
                    
                    <Col md={12} className='card-list text-center'>
                        <ControlLabel>Target Monthly Rent </ControlLabel><br/>
                        <InputGroup>
                            <InputGroup.Addon onClick={e=> this.onUpClick(
                                    "balance"
                                )}
                            >+</InputGroup.Addon>
                            <CurrencyInput
                            prefix="£"
                            value={this.state.loanAmount}
                            className='form-control'
                            
                            precision='0'
                            />
                            <InputGroup.Addon onClick={e=> this.onDownClick(
                                    "balance"
                                )}
                            >-</InputGroup.Addon>
                            
                        </InputGroup>
                    </Col>
                    <Col md={12} className='card-list text-center'>
                        <ControlLabel>Target Home Price</ControlLabel><br/>
                        <InputGroup>
                            <InputGroup.Addon onClick={e=> this.onUpClick(
                                    "apr"
                                )}
                            >+</InputGroup.Addon>
                            <CurrencyInput
                            suffix=" %"
                            value={this.state.apr}
                            className='form-control'
                            
                            
                            precision='2'
                            />
                            <InputGroup.Addon onClick={e=> this.onDownClick(
                                    "apr"
                                )}
                            >-</InputGroup.Addon>
                            
                        </InputGroup>
                    </Col>
                    <Col md={12} className='card-list text-center'>
                        <ControlLabel>Available Down Payment</ControlLabel><br/>
                        <InputGroup>
                            <InputGroup.Addon onClick={e=> this.onUpClick(
                                    "payment"
                                )}
                            >+</InputGroup.Addon>
                           
                            <CurrencyInput
                            prefix="£"
                            value={this.state.payment}
                            className='form-control'
                            
                            precision='0'
                            />
                            <InputGroup.Addon onClick={e=> this.onDownClick(
                                    "payment"
                                )}
                            >-</InputGroup.Addon>
                        </InputGroup>
                    </Col>
                   
                    
                </Col>
                <Col md={8} className='card-list border-left'>
                            {/* <Col md={12} className='card-list text-center'>
                        <ControlLabel>Pay off Credit Card debt quickly</ControlLabel><br/>
                        <p>By making fixed payments of £{this.state.payment.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})} per month - you could reduce your time to pay by: </p>
                        {this.calculateDiff()}<br/>
                        <ControlLabel>Important note</ControlLabel><br/>
                        <p>Please be aware these are only ESTIMATES for your costs and the time taken to repay.</p>
                        <p>If you enter a fixed monthly repayment that's less than the initial minimum repayment, it will
                        take longer to pay off than paying the minimum payment.</p>
                        <p>Please note the following assumptions made:</p>
                            </Col>*/}
                    
                    
                    <div>
                    <VictoryChart
                        domainPadding={{ x: 20 }}
                        animate={{duration: 500}}
                        containerComponent={
                            <VictoryCursorContainer/>
                          }
                    >
                       <VictoryLine
                        style={{
                            data: { stroke: "tomato" }
                        }}
                        data={this.dataRent()}
                        x="a"
                        y="b"
                        />
                        <VictoryLine
                        style={{
                            data: { stroke: "blue" }
                        }}
                        data={this.dataMortgage()}
                        x="a"
                        y="b"
                        />

        
                    </VictoryChart>
                    </div>
                    <div className='clearfix' />
                    
                    <Col md={12} className='card-list'>
                    
                        <p>These results exclude any annual card fees, late payment fees, foreign transaction or cash
                        withdrawals fees.</p>
                        <p>It assumes that no further debt is added to the card and that the interest rate remains the same for the lifetime of the balance.</p>
                        <p>Some card providers have different minimum payment criteria but most common are the higher of 1% of the balance plus interest OR a minimum of £5 or £25 per month. Please check your statement if you are unsure.</p>

                    
                    </Col>
                    <div className="clearfix" />
                </Col>
                <div className="clearfix" />
                </BoxBody>
            </Box>
        );
    }
}
function mapStateToProps (state) {
    return {
      user: "",
      email: "",
      routing: state.routing.locationBeforeTransitions.pathname,
    }
  }
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(RentVsBuy)