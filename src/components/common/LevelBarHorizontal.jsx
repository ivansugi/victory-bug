import React from 'react'

class LevelBarHorizontal extends React.Component {
  printTooltip (min, max, value) {
    //debugger;
    if (max == null && this.props.value == null) {
      return (
        <div role='tooltip' class='tooltip in top'>
          <div class='tooltip-arrow' />
          <div class='tooltip-inner'>YOU</div>
        </div>
      )
    } else if (this.props.value < max && this.props.value >= min) {
      return (
        <div role='tooltip' class='tooltip in top'>
          <div class='tooltip-arrow' />
          <div class='tooltip-inner'>YOU</div>
        </div>
      )
    } else if (this.props.value === value) {
      return (
        <div role='tooltip' class='tooltip in top'>
          <div class='tooltip-arrow' />
          <div class='tooltip-inner'>YOU</div>
        </div>
      )
    } else {
      return null
    }
  }

  render () {
    return (
      <div>
        <ul class={this.props.bottomIndex ? 'level-bar-horizontal bottom-index' : 'level-bar-horizontal'} >
          {this.props.level.map((x, y) => {
            return (
              <li key={y}>
                {x.label}
                { this.printTooltip(x.min, x.max, x.value) }
                { this.props.bottomIndex && !x.index &&
                  <p>{y + 1}</p>
                }
                { x.index &&
                  <p>{x.index}</p>
                }
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default LevelBarHorizontal
