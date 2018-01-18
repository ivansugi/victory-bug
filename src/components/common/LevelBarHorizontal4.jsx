import React from 'react'

class LevelBarHorizontal4 extends React.Component {
  getClass (index, min, max, value) {
    let result = true
    if (max == null && this.props.value == null) {
      result = true
    } else if (this.props.value < max && this.props.value >= min) {
      result = true
    } else if (this.props.value === value) {
      result = true
    } else {
      result = false
    }
    let ret = ''
    if (result) {
      ret = 'active'
    }
    return ret
  }

  printTooltip (index, min, max, value) {
    let result = true
    if (max == null && this.props.value == null) {
      result = true
    } else if (this.props.value < max && this.props.value >= min) {
      result = true
    } else if (this.props.value === value) {
      result = true
    } else {
      result = false
    }
    let ret = ''
    
    if (result) {
      if (this.props.additional) {
        ret = <p class='active'>{this.props.additional}</p>
      } else {
        ret = <p class='active'>{this.props.value}</p>
      }
    }
    return ret
  }

  render () {
    return (
      <div>
        <ul class={this.props.bottomIndex ? 'level-bar-horizontal-4 bottom-index' : 'level-bar-horizontal-4'} >
          {this.props.level.map((x, y) => {
            return (
              <li key={y}>
                { x.label }
                {this.printTooltip(x.index, x.min, x.max, x.value)}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default LevelBarHorizontal4
