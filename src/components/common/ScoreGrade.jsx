import React from 'react'

const defaultValue = 100
const defaultLevel = [
  {
    'index': 'Very Poor',
    'label': '0 - 40',
    'min': 0,
    'max': 40
  },
  {
    'index': 'Poor',
    'label': '41 - 80',
    'min': 41,
    'max': 80
  },
  {
    'index': 'Fair',
    'label': '81 - 120',
    'min': 81,
    'max': 120
  },
  {
    'index': 'Good',
    'label': '121 - 160',
    'min': 121,
    'max': 160
  },
  {
    'index': 'Excellent',
    'label': '161 - 200',
    'min': 161,
    'max': 200
  }
]

export default class ScoreGrade extends React.Component {
  render () {
    const value = this.props.value || defaultValue
    const level = this.props.level || defaultLevel
    return (
      <ul class='score-grade'>
        {level.map((x, y) => (
          <li key={y} class={value <= x.max && value >= x.min && 'active'}>
            <div class='index'>
              &nbsp;
              { value <= x.max && value >= x.min ? x.index : '' }
              &nbsp;
            </div>
            <div class='color' />
            <div class='name'>{x.label}</div>
          </li>
        ))}
      </ul>
    )
  }
}
