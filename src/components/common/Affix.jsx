import React from 'react'
import general from '../../components/helper/general'
class Affix extends React.Component {
  constructor () {
    super()
    this.state = {
      affix: false
    }
  }
  

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll.bind(this))
    //this.getBox();
    this.setState({offset:general.getBox()})
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll.bind(this))
  }

  handleScroll () {
    const affix = this.state.affix
    const offset = general.getBox();
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop

    console.log(scrollTop)

    if (!affix && scrollTop <= offset) {
      this.setState({
        affix: true,
        offsetPrint: 0
      })
    }

    if (affix && scrollTop > offset) {
      this.setState({
        affix: false,
        offsetPrint:offset
      })
    }
  };

  render () {
    const affix = this.state.affix ? 'affix' : ''
    const { className, ...props } = this.props

    return (
      <div offset={this.state.offsetPrint} className={`${className || ''} ${affix}`}>
        {this.props.children}
      </div>
    )
  }
}

Affix.defaultProps = {
  offset: 100
}

export default Affix
