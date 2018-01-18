import React from 'react'

import style from './LevelBarHorizontal3.scss' // eslint-disable-line

class LevelBarHorizontal3 extends React.Component {
  printTooltip (index, min, max, value) {
    let result = 'true'
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
  render () {
    return (
      <div>
        <ul class='level-bar-horizontal-3' >
          {this.props.level.map((x, y) => {
            return (
              <li key={y} className={this.printTooltip(x.index, x.min, x.max, x.value)}>
                { x.label }
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default LevelBarHorizontal3
