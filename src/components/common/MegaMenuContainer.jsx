import React from 'react'
import {Link} from 'react-router'

import style from './MegaMenuContainer.scss' // eslint-disable-line

const creditCardMenu = [
  {
    title: 'Best of',
    menu: [
      {
        text: 'Best credit cards of 2017',
        to: '/somewhere'
      },
      {
        text: 'Best rewards cards',
        to: '/somewhere'
      },
      {
        text: 'Best cash back cards',
        to: '/somewhere'
      },
      {
        text: 'Best travel cards',
        to: '/somewhere'
      },
      {
        text: 'Best balance transfer cards',
        to: '/somewhere'
      },
      {
        text: 'Best 0% APR cards',
        to: '/somewhere'
      },
      {
        text: 'Best student cards',
        to: '/somewhere'
      },
      {
        text: 'Best cards for bad credit',
        to: '/somewhere'
      }
    ]
  },
  {
    title: 'Compare cards',
    menu: [
      {
        text: 'TD Ameritrade',
        to: '/foo'
      },
      {
        text: 'Merrill Edge',
        to: '/foo'
      },
      {
        text: 'Wealthfront',
        to: '/foo'
      },
      {
        text: 'E-Trade vs. TD Ameritrade',
        to: '/foo'
      },
      {
        text: 'Wealthfront vs. Betterment',
        to: '/foo'
      }
    ]
  },
  {
    title: 'Reviews',
    menu: [
      {
        text: 'Credit card reviews',
        to: '/baz'
      },
      {
        text: 'Rewards programs',
        to: '/baz'
      },
      {
        text: 'Sign-up bonuses',
        to: '/baz'
      }
    ]
  },
  {
    title: 'Read & Learn',
    menu: [
      {
        text: 'Credit cards 101',
        to: '/where'
      },
      {
        text: 'Pick the best credit card',
        to: '/where'
      },
      {
        text: 'Boost your approval odds',
        to: '/where'
      },
      {
        text: 'Balance transfers 101',
        to: '/where'
      },
      {
        text: 'Credit card debt study',
        to: '/where'
      },
      {
        text: 'Range of credit scores',
        to: '/where'
      },
      {
        text: 'How to build credit',
        to: '/where'
      },
      {
        text: 'Debt calculator',
        to: '/where'
      }
    ]
  }
]

const loanMenu = [
  {
    title: 'Best of',
    menu: [
      {
        text: 'Best loans of 2017',
        to: '/somewhere'
      },
      {
        text: 'Best rewards loans',
        to: '/somewhere'
      },
      {
        text: 'Best cash back loans',
        to: '/somewhere'
      },
      {
        text: 'Best travel loans',
        to: '/somewhere'
      },
      {
        text: 'Best balance transfer loans',
        to: '/somewhere'
      },
      {
        text: 'Best 0% APR loans',
        to: '/somewhere'
      },
      {
        text: 'Best student loans',
        to: '/somewhere'
      },
      {
        text: 'Best loans for bad credit',
        to: '/somewhere'
      }
    ]
  },
  {
    title: 'Compare loans',
    menu: [
      {
        text: 'TD Ameritrade',
        to: '/foo'
      },
      {
        text: 'Merrill Edge',
        to: '/foo'
      },
      {
        text: 'Wealthfront',
        to: '/foo'
      },
      {
        text: 'E-Trade vs. TD Ameritrade',
        to: '/foo'
      },
      {
        text: 'Wealthfront vs. Betterment',
        to: '/foo'
      }
    ]
  },
  {
    title: 'Reviews',
    menu: [
      {
        text: 'Credit card reviews',
        to: '/baz'
      },
      {
        text: 'Rewards programs',
        to: '/baz'
      },
      {
        text: 'Sign-up bonuses',
        to: '/baz'
      }
    ]
  },
  {
    title: 'Read & Learn',
    menu: [
      {
        text: 'Credit loans 101',
        to: '/where'
      },
      {
        text: 'Pick the best credit card',
        to: '/where'
      },
      {
        text: 'Boost your approval odds',
        to: '/where'
      },
      {
        text: 'Balance transfers 101',
        to: '/where'
      },
      {
        text: 'Credit card debt study',
        to: '/where'
      },
      {
        text: 'Range of credit scores',
        to: '/where'
      },
      {
        text: 'How to build credit',
        to: '/where'
      },
      {
        text: 'Debt calculator',
        to: '/where'
      }
    ]
  }
]

export default class MegaMenuContainer extends React.Component {
  getMenu (e) {
    let menuSet = []
    switch (e) {
      case 'credit-cards':
        menuSet = creditCardMenu
        break
      case 'loans':
        menuSet = loanMenu
        break
      default:
        // statements_def
        break
    }
    return menuSet
  }
  render () {
    const selectMenu = this.getMenu(this.props.menuSet)
    return (
      <div class={`mega-menu-container col-count-${selectMenu.length}`}
        onMouseEnter={this.props.onMouseEnter}
        onMouseLeave={this.props.onMouseLeave}
      >
        <div className='container'>
          <div className='row'>
            {selectMenu.map((x, i) => (
              <div className='col-lg-3' key={i}>
                <h4>{x.title}</h4>
                <ul className='list-unstyled'>
                  {x.menu.map((y, j) => (
                    <li key={j}><Link to={y.to}>{y.text}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
