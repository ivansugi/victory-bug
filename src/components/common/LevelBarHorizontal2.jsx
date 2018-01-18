import React from 'react'

class LevelBarHorizontal2 extends React.Component {
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

    if (result) {
      result = <p class='active'>{index}</p>
    } else {
      result = <p>{index}</p>
    }

    return result
  }
  render () {
    return (
      <div>
        <ul class={this.props.bottomIndex ? 'level-bar-horizontal-2 bottom-index' : 'level-bar-horizontal-2'} >
          {this.props.level.map((x, y) => {
            return (
              <li key={y}>
                { x.label }
                { this.printTooltip(x.index, x.min, x.max, x.value) }
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default LevelBarHorizontal2
