import React from 'react'
import { Checkbox, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router'

export default class LoginForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      'email': '',
      'password': ''
    }
  }

  onSubmit (e) {
    e.preventDefault()
    this.props.onSubmit(this.state.email, this.state.password)
  }

  handleEmailChange (e) {
    this.setState({email: e.target.value})
  }
  handlePasswordChange (e) {
    this.setState({password: e.target.value})
  }

  render () {
    return (
      <form onSubmit={this.onSubmit.bind(this)} className='form-primary'>
        <FormGroup>
          <ControlLabel>Email Address</ControlLabel>
          <FormControl type='email' name='email' ref='email' value={this.state.email} onChange={this.handleEmailChange.bind(this)} />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Password</ControlLabel>
          <FormControl type='password' name='password' ref='password' value={this.state.password} onChange={this.handlePasswordChange.bind(this)} />
        </FormGroup>
        <FormGroup>
          <Checkbox>Remember my email for next time</Checkbox>
        </FormGroup>
        <FormGroup className='text-center'>
          <p>
            <Button type='submit' bsStyle='primary' className='side-padded'>Log In</Button>
          </p>
          <p>
            <Link to='/forgot-password'>I forgot my password</Link>
          </p>
        </FormGroup>
      </form>
    )
  }
}
