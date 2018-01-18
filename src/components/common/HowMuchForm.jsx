import React from 'react'
import { Checkbox, FormGroup, ControlLabel, FormControl, Button,Radio } from 'react-bootstrap'
import { Link } from 'react-router'
import { connect } from 'react-redux';
@connect( // eslint-disable-line 
  store => {
    return {
      
    }
  },
  dispatch => {
    return {
      handleHowMuchChange: (e) => {
        return dispatch(howMuchChange(e));
      },
      handleScoreChange: (e) => {
        return dispatch(scoreChange(e));
      },
     
    }
  }
)
export default class HowMuchForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      how_much: 'inline-block',
      credit_score: 'none',
      how_much_value : 0,
      credit_score_value : null
    }
  }

  onSubmit (e) {
    e.preventDefault()
    this.props.onSubmit(this.state.email, this.state.password)
  }

  next (e) {
    e.preventDefault()
    this.setState({how_much: 'none',
    credit_score: 'inline-block'})
  }
  back (e) {
    e.preventDefault()
    this.setState({how_much: 'inline-block',
    credit_score: 'none'})
  }

  howMuchChange (e) {
    console.log(e.target.value);
    this.setState({how_much_value: e.target.value})
  }
  scoreChange (e) {
    console.log(e.target.value);
    
    this.setState({credit_score_value: e.target.value})
      
    
  }
  onAccept (e) {
    e.preventDefault()
    console.log(this.state.credit_score_value);
    console.log(this.state.how_much_value);
    this.props.onAccept(this.state.credit_score_value, this.state.how_much_value)
    this.props.onHide();
  }
  render () {
    return (
      <form className='form-primary'>
        <FormGroup style={{display:this.state.how_much}}>
          <ControlLabel>How much do you need?</ControlLabel>
          <FormControl type='text' name='howmuch' ref='email' pattern="[0-9]*" onChange= {this.howMuchChange.bind(this)}  />
        </FormGroup>
        <FormGroup style={{display:this.state.credit_score}}>
          <ControlLabel>What's your credit score?</ControlLabel>
          <Radio inputRef={ref => { this.input = ref; }} title={"Excellent (720-850)"} value="E" onChange= {this.scoreChange.bind(this)} > <span class="label-text">Excellent (720-850)</span> </Radio>
          <Radio inputRef={ref => { this.input = ref; }} title={"Good (690-719)"} value="G" onChange= {this.scoreChange.bind(this)} ><span class="label-text">Good (690-719)</span> </Radio>
          <Radio inputRef={ref => { this.input = ref; }} title={"Average (630-689)"} value="F" onChange= {this.scoreChange.bind(this)} ><span class="label-text">Average (630-689)</span></Radio>
          <Radio inputRef={ref => { this.input = ref; }} title={"Poor (350-629)"} value="P" onChange= {this.scoreChange.bind(this)} ><span class="label-text">Poor (350-629)</span></Radio>
          <Radio inputRef={ref => { this.input = ref; }} title={"Very Poor (0-350)"} value="V" onChange= {this.scoreChange.bind(this)} ><span class="label-text">Very Poor (0-350)</span></Radio>
        </FormGroup>
        <FormGroup className='text-center'>
          <p>
          <Link to='/register' class="prequal-button btn btn-primary" style={{display:this.state.how_much, marginTop:"4rem"}}>Get personalized rates</Link>
          </p>
          <p>
          <Link to='#' class="pull-left transparent btn btn-primary" onClick = {this.back.bind(this)} style={{display:this.state.credit_score}}> ‹ Back </Link> <Link to='#' class="pull-right btn btn-primary transparent"  style={{display:this.state.credit_score}} onClick = {this.onAccept.bind(this)}> Finish ›</Link> <Link to='#' class="pull-right btn btn-primary transparent"  style={{display:this.state.how_much}} onClick = {this.next.bind(this)}> Next ›</Link>
          </p>
          
        </FormGroup>
        <FormGroup className='overflow'>
        <p>
          <Link class="pull-right transparent btn btn-primary" style={{display:this.state.how_much}} onClick = {this.onAccept.bind(this)} >No Thanks, Estimate My rate</Link>
          </p>
        </FormGroup>
      </form>
    )
  }
}
