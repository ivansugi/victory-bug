import React from 'react'
import {Link} from 'react-router'

import style from './MegaMenuContainer2.scss' // eslint-disable-line

const creditCardMenu = [
  {
    title: 'Products',
    menu: [
      {
        text: 'Best credit cards of 2018',
        to: '/sonewhere'
      },
      {
        text: 'Best 0% APR purchase cards',
        to: '/sonewhere'
      },
      {
        text: 'Best 0% balance transfer cards',
        to: '/sonewhere'
      },
      {
        text: 'Best business cards',
        to: '/sonewhere'
      },
      {
        text: 'Best cards for bad credit',
        to: '/sonewhere'
      },
      {
        text: 'Best rewards cards',
        to: '/sonewhere'
      },
      {
        text: 'Best cash back cards',
        to: '/sonewhere'
      },
      {
        text: 'Best travel cards',
        to: '/sonewhere'
      },
      {
        text: 'Best student cards',
        to: '/sonewhere'
      }
    ]
  },
  {
    title: 'Compare',
    menu: [
      {
        text: 'Compare offers',
        to: '/f'
      },
      {
        text: 'Side by side comparison',
        to: '/f'
      },
      {
        text: 'Card you qualify for ',
        to: '/f'
      },
      {
        text: 'Credit card reviews',
        to: '/f'
      },
      {
        text: 'Rewards programmes',
        to: '/f'
      },
      {
        text: 'Travel credit cards',
        to: '/f'
      },
      {
        text: 'Credit cards vs. Loans',
        to: '/f'
      },
      {
        text: 'Credit Cards vs. Pay Day Loans',
        to: '/f'
      }
    ]
  },
  {
    title: 'Insights',
    menu: [
      {
        text: 'Credit cards ABC',
        to: '/insights'
      },
      {
        text: 'Balance transfers ABC',
        to: '/insights'
      },
      {
        text: 'How to build your Credit ',
        to: '/insights'
      },
      {
        text: 'Avoid the traps!',
        to: '/insights'
      },
      {
        text: 'Top 10 uses for credit cards',
        to: '/insights'
      },
      {
        text: 'Credit cards vs Debit cards',
        to: '/insights'
      },
      {
        text: 'Boost your approval odds',
        to: '/insights'
      },
      {
        text: 'UK credit card facts',
        to: '/insights'
      }
    ]
  },
  {
    title: 'Tools',
    menu: [
      {
        text: '0% Purchase tool',
        to: '/where'
      },
      {
        text: 'Balance transfer savings calculator',
        to: '/where'
      },
      {
        text: '0% APR savings tool',
        to: '/where'
      },
      {
        text: 'Rewards comparison tool',
        to: '/where'
      },
      {
        text: 'Travel credit card comparison',
        to: '/where'
      },
      {
        text: 'Credit card debt calculator',
        to: '/where'
      },
      {
        text: 'Time to pay off calculator ',
        to: '/where'
      }
    ]
  }
]

const loanMenu = [
  {
    title: 'Personal loans',
    menu: [
      {
        text: 'Personal loans Pre-qualified',
        to: '/somewhere'
      },
      {
        text: 'Bad credit loans',
        to: '/somewhere'
      },
      {
        text: 'Debt consolidation loans',
        to: '/somewhere'
      },
      {
        text: 'Peer to peer loans',
        to: '/somewhere'
      },
      {
        text: 'Guarantor loans',
        to: '/somewhere'
      },
      {
        text: 'Home improvement loans',
        to: '/somewhere'
      },
      {
        text: 'Wedding loans',
        to: '/somewhere'
      },
      {
        text: 'Combine all debts into single loan',
        to: '/somewhere'
      }
    ]
  },
  {
    title: 'Secured loans',
    menu: [
      {
        text: 'Best secured loans',
        to: '/foo'
      },
      {
        text: 'Homeowner loans',
        to: '/foo'
      },
      {
        text: 'Compare secured loans',
        to: '/foo'
      },
      {
        text: 'Secured vs Unsecured loans',
        to: '/foo'
      },
      {
        text: 'Cheapest secured loans',
        to: '/foo'
      }
    ]
  },
  {
    title: 'Car Finance Loans',
    menu: [
      {
        text: 'Car loans',
        to: '/baz'
      },
      {
        text: 'Logbook loans',
        to: '/baz'
      },
      {
        text: 'Loans new cars',
        to: '/baz'
      },
      {
        text: 'Loans used cars',
        to: '/baz'
      },
      {
        text: 'Buying vs Leasing',
        to: '/baz'
      },
      {
        text: 'PCP vs PCH',
        to: '/baz'
      },
      {
        text: 'Warranty quotes',
        to: '/baz'
      },
      {
        text: 'Warranty comparisons',
        to: '/baz'
      }
    ]
  },
  {
    title: 'Insights',
    menu: [
      {
        text: 'Unlock the lowest % APR\'s',
        to: '/where'
      },
      {
        text: 'Top 10 rules for getting a loan ',
        to: '/where'
      }
    ]
  },
  {
    title: 'Tools',
    menu: [
      {
        text: 'Loan calculator',
        to: '/where'
      },
      {
        text: 'Interest calculator',
        to: '/where'
      },
      {
        text: 'Bad credit loans calculator',
        to: '/where'
      },
      {
        text: 'Personal Vs Secured comparison',
        to: '/where'
      },
      {
        text: 'How much can I borrow',
        to: '/where'
      },
      {
        text: 'Student loans',
        to: '/articles/student-loan'
      },
      {
        text: 'Credit Card loans',
        to: '/articles/credit-card-loan'
      },
      {
        text: 'Payoff your credit card debt',
        to: '/tools/clear-balance'
      },
      {
        text: 'Rent vs Buy',
        to: '/tools/rent-buy'
      },
      {
        text: 'Credit scores Vs APR %',
        to: '/where'
      },
      {
        text: 'Monthly payment calculator',
        to: '/where'
      }
    ]
  }
]

export default class MegaMenuContainer2 extends React.Component {
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
      <div class={`mega-menu-container-2 col-count-${selectMenu.length}`}
        onMouseEnter={this.props.onMouseEnter}
        onMouseLeave={this.props.onMouseLeave}
      >
        <div className='container-fluid'>
          <div className='no-row'>
            {selectMenu.map((x, i) => (
              <div className='no-col-lg-3' key={i}>
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
