import React from 'react'
import ReactSlider from 'react-slider'

class Slider extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: (this.props.value ? this.props.value : (this.props.max - this.props.min) / 2),
      step: this.props.step,
      min: this.props.min,
      max: this.props.max
    }
  }

  decrease () {
    if (this.state.value !== this.state.min) {
      const now = this.state.value - this.state.step
      this.setState({
        value: now
      })
      if (this.props.onChange != null) {
        this.props.onChange(now)
      }
    }
  }

  increase () {
    if (this.state.value !== this.state.max) {
      const now = this.state.value + this.state.step
      this.setState({
        value: now
      })
      if (this.props.onChange != null) {
        this.props.onChange(now)
      }
    }
  }

  change (event) {
    this.setState({
      value: event
    })
    if (this.props.onChange != null) {
      this.props.onChange(event)
    }
  }

  getStep () {
    let steps = []
    for (var i = this.props.min; i <= this.props.max; i++) {
      steps.push(i)
    }

    return steps.map((x) => {
      return (<div key={x}>{x}</div>)
    })
  }

  render () {
    return (
      <div class='cs-slider'>
        <button class='decrease' onClick={this.decrease.bind(this)}><img src='/images/slider/minus.svg' /></button>
        <div class='center'>
          <ReactSlider
            className='horizontal-slider'
            value={this.state.value}
            min={this.state.min}
            max={this.state.max}
            onChange={this.change.bind(this)}
            withBars
          >
            <img src='/images/slider/drag.svg' />
          </ReactSlider>
          { this.props.withScale &&
            <div className='slider-scale'>
              {this.getStep()}
            </div>
          }
        </div>
        <button class='increase' onClick={this.increase.bind(this)}><img src='/images/slider/plus.svg' /></button>
      </div>
    )
  }
}

Slider.defaultProps = {
  min: 0,
  max: 9999,
  value: 500,
  onChange: null,
  step: 500
}

export default Slider
