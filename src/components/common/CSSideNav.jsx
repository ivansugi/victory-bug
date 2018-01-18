import React from 'react'
import { Link } from 'react-router'

export default class CSSideNav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      tooltip: null
    }
  }

  getTooltip (id, text) {
    if (this.state.tooltip === id) {
      return (<div class='tooltip right in'> <div class='tooltip-arrow' /> <div class='tooltip-inner'> {text} </div> </div>)
    }
    return null
  }

  showTooltip (tooltip) {
    this.setState({tooltip})
  }

  hideTooltip () {
    this.setState({tooltip: null})
  }

  render () {
    return (
      <nav className='cs-side-nav'>
        <ul>
          <li
            class={this.props.current === '/dashboard' ? 'active' : ''}
            onMouseEnter={this.showTooltip.bind(this, 'dashboard')}
            onMouseLeave={this.hideTooltip.bind(this)}
          ><Link to='/dashboard'>
            <i class='icon-cs-home-svg' />
            {this.getTooltip('dashboard', 'Home')}
          </Link></li>
          <li class={this.props.current === '/overview' ? 'active' : ''}
            onMouseEnter={this.showTooltip.bind(this, 'overview')}
            onMouseLeave={this.hideTooltip.bind(this)}
          ><Link to='/overview'>
          <i class='icon-cs-lenderview' />
          {/*<i data-reactid="29"><svg viewBox="0 0 20 20"><g stroke="none" stroke-width="1" fill-rule="evenodd"><g id="Group-Copy" transform="translate(1.000000, 1.000000)"><path d="M15.7222965,11.3349389 C16.4988398,11.3392074 17.2849328,11.136758 17.9999795,10.7090202 C17.9999932,10.7154666 18,10.7219146 18,10.7283642 C18,13.0636773 17.0994658,15.2550714 15.5270797,16.8732113 C15.0876202,17.3254583 14.3753096,17.3252586 13.9360895,16.8727652 C13.4968693,16.4202718 13.4970633,15.6868349 13.9365227,15.2345879 C14.9535604,14.1879561 15.5861831,12.8184039 15.7222965,11.3349389 Z M17.6421098,5.46005084 C18.3076979,6.54052979 17.9965926,7.97199985 16.9472365,8.65732871 C15.8978803,9.34265757 14.5076433,9.02232512 13.8420551,7.94184617 C12.9177921,6.44144884 11.3186894,5.51571555 9.5625,5.51571555 C6.76655845,5.51571555 4.5,7.84949784 4.5,10.7283642 C4.5,11.7779799 4.79951403,12.7756917 5.35359852,13.6264074 C6.0457229,14.6890633 5.77016168,16.1282347 4.7381153,16.8408868 C3.70606892,17.5535389 2.30835236,17.2698048 1.61622799,16.2071489 C0.568772919,14.5989348 0,12.7042941 0,10.7283642 C0,5.29050553 4.28127708,0.882250087 9.5625,0.882250087 C12.8758648,0.882250087 15.9008996,2.6334668 17.6421098,5.46005084 Z" id="Credit-Score-Icon-Copy"></path></g></g></svg></i>*/}
            {this.getTooltip('overview', 'Credit Factors')}
          </Link></li>
          <li class={this.props.current === '/overview/lender-view' ? 'active' : ''}
            onMouseEnter={this.showTooltip.bind(this, 'lender-view')}
            onMouseLeave={this.hideTooltip.bind(this)}
          ><Link to='/overview/lender-view'>
          <i class='icon-cs-lenderview' />
         {/* <i data-reactid="37"><svg viewBox="0 0 20 20"><g stroke="none" stroke-width="1" fill-rule="evenodd"><g id="Group-Copy" transform="translate(4.000000, 1.000000)"><path d="M11.21,3.064 C10.055,2.266 8.69,1.69132917 7.199,1.50232917 L7.199,1.25 L7.199,1.25 C7.199,0.69771525 6.75128475,0.25 6.199,0.25 L5.84445055,0.25 L5.84445055,0.250000003 C5.29631773,0.250000003 4.85034106,0.691255055 4.84450719,1.23935683 C4.84289666,1.39066894 4.84070228,1.47832639 4.83792405,1.50232917 C2.3493755,1.85229362 0.71,3.35709387 0.71,5.584 C0.71,8.01881997 2.07698951,9.16017068 4.84783915,9.97181794 C4.83601558,10.1666667 4.84783915,13.0833333 4.83601558,13.3253372 C3.76185235,13.0369248 2.81547268,12.4854885 1.802,11.716 L0.164,14.11 C1.480829,15.1075977 3.13886985,15.801896 4.84995987,16.0668237 C4.84995987,16.2381475 4.84880924,16.4631199 4.84650798,16.7417408 L4.84650798,16.7417408 C4.84194655,17.2940067 5.28594876,17.7454045 5.83821467,17.7499659 C5.84096768,17.7499886 5.84372077,17.75 5.84647387,17.75 L6.199,17.75 L6.199,17.75 C6.75128475,17.75 7.199,17.3022847 7.199,16.75 L7.199,16.1694031 C9.845,15.8964031 11.756,14.362 11.756,12.01 C11.756,9.616 10.391,8.335 7.199,7.474 L7.199,4.282 C8.06,4.513 8.963,4.954 9.803,5.521 L11.21,3.064 Z M8.69,12.136 L8.69,12.178 C8.69,12.934 8.186,13.375 7.199,13.522 L7.199,10.582 C8.333,11.002 8.69,11.443 8.69,12.136 Z M3.776,5.437 L3.776,5.395 C3.776,4.81217608 4.09192608,4.3557226 4.84707908,4.16264049 C4.85689104,4.33333333 4.83066667,6.4281564 4.85689104,6.80242872 C4.00574073,6.4281564 3.776,6.03103851 3.776,5.437 Z" id="Spending-Icon"></path></g></g></svg></i>*/}
            {this.getTooltip('lender-view', 'LenderView')}
          </Link></li>
          <li class={this.props.current === '/lenderview/score-booster' ? 'active' : ''}
            onMouseEnter={this.showTooltip.bind(this, 'score-booster')}
            onMouseLeave={this.hideTooltip.bind(this)}
          ><Link to='/lenderview/score-booster'>
          <i class='icon-cs-lenderview' />
         {/* <i data-reactid="45"><svg viewBox="0 0 20 20"><g stroke="none" stroke-width="1" fill-rule="evenodd"><g id="Group-Copy" transform="translate(2.000000, 1.000000)"><path d="M7.54690774,0.4900242 C7.78691619,0.355938415 8.18258369,0.359036954 8.41820658,0.4900242 L15.0632749,4.18414412 C15.3044715,4.3182299 15.4999918,4.64848761 15.4999815,4.92809282 L15.4999605,5.49846971 C15.4999402,6.05007554 15.0510058,6.49724041 14.4924449,6.49724041 L1.50747885,6.49724041 C0.951063645,6.49724041 0.5,6.05818038 0.5,5.49846971 L0.5,4.92809282 C0.5,4.65130708 0.700111557,4.31513137 0.93457374,4.18414412 L7.54690774,0.4900242 Z M11.75,8.99699977 C11.75,8.30677674 12.304831,7.74724041 13,7.74724041 L13,7.74724041 C13.6903559,7.74724041 14.25,8.30188622 14.25,8.99699977 L14.25,12.747481 C14.25,13.4377041 13.695169,13.9972404 13,13.9972404 L13,13.9972404 C12.3096441,13.9972404 11.75,13.4425946 11.75,12.747481 L11.75,8.99699977 Z M1.50748397,17.7472404 C0.95106594,17.7472404 0.5,17.3002905 0.5,16.7447997 L0.5,16.2496812 C0.5,15.6960484 0.948920205,15.2472404 1.50748397,15.2472404 L14.492516,15.2472404 C15.0489341,15.2472404 15.5,15.6941903 15.5,16.2496812 L15.5,16.7447997 C15.5,17.2984324 15.0510798,17.7472404 14.492516,17.7472404 L1.50748397,17.7472404 Z M6.75,8.75141104 C6.75,8.19682291 7.1969499,7.74724041 7.75244075,7.74724041 L8.24755925,7.74724041 C8.80119199,7.74724041 9.25,8.196725 9.25,8.75141104 L9.25,12.9930698 C9.25,13.5476579 8.8030501,13.9972404 8.24755925,13.9972404 L7.75244075,13.9972404 C7.19880801,13.9972404 6.75,13.5477558 6.75,12.9930698 L6.75,8.75141104 Z M1.75,8.75141104 C1.75,8.19682291 2.1969499,7.74724041 2.75244075,7.74724041 L3.24755925,7.74724041 C3.80119199,7.74724041 4.25,8.196725 4.25,8.75141104 L4.25,12.9930698 C4.25,13.5476579 3.8030501,13.9972404 3.24755925,13.9972404 L2.75244075,13.9972404 C2.19880801,13.9972404 1.75,13.5477558 1.75,12.9930698 L1.75,8.75141104 Z" id="account_balance"></path></g></g></svg></i>*/}
            {this.getTooltip('score-booster', 'Score Booster')}
          </Link></li>
          <li class={this.props.current === '/score-booster/my-accounts' ? 'active' : ''}
            onMouseEnter={this.showTooltip.bind(this, 'my-accounts')}
            onMouseLeave={this.hideTooltip.bind(this)}
          ><Link to='/my-accounts'>
          <i class='icon-cs-lenderview' />
         {/* <i data-reactid="53"><svg viewBox="0 0 20 20"><g id="Frankenstein" stroke="none" stroke-width="1" fill-rule="evenodd"><g id="Group-Copy" transform="translate(1.000000, 2.000000)"><path d="M9.8203125,9.6796875 L9.8203125,6.3203125 L8.1796875,6.3203125 L8.1796875,9.6796875 L9.8203125,9.6796875 Z M9.8203125,13 L9.8203125,11.3203125 L8.1796875,11.3203125 L8.1796875,13 L9.8203125,13 Z M0.691772509,13.9981221 L8.13506151,1.17032617 L8.13506151,1.17032617 C8.41224102,0.692633833 9.02418555,0.530086066 9.50187789,0.807265569 C9.65243366,0.894625093 9.77757896,1.0197704 9.86493849,1.17032617 L17.3082275,13.9981221 L17.3082275,13.9981221 C17.585407,14.4758144 17.4228592,15.087759 16.9451669,15.3649385 C16.792702,15.4534058 16.6195615,15.5 16.443289,15.5 L1.556711,15.5 L1.556711,15.5 C1.00442625,15.5 0.556710996,15.0522847 0.556710996,14.5 C0.556710996,14.3237275 0.603305237,14.150587 0.691772509,13.9981221 Z" id="warning"></path></g></g></svg></i>*/}
            {this.getTooltip('my-accounts', 'My Accounts')}
          </Link></li>
          {
                // <li class={this.props.current === '/credit-cards' ? 'active' : ''}
                //   onMouseEnter={this.showTooltip.bind(this, 'cards')}
                //   onMouseLeave={this.hideTooltip.bind(this)}
                // ><Link to='/credit-cards'>
                //   <i class='icon-cs-cards' />
                //   {this.getTooltip('cards', 'Credit Cards')}
                // </Link></li>
                // <li class={this.props.current === '/loans' ? 'active' : ''}
                //   onMouseEnter={this.showTooltip.bind(this, 'loans')}
                //   onMouseLeave={this.hideTooltip.bind(this)}
                // ><Link to='/loans'>
                //   <i class='icon-cs-loans' />
                //   {this.getTooltip('loans', 'Loans')}
                // </Link></li>
              }
        </ul>
      </nav>
    )
  }
}
