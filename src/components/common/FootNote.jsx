import React from 'react'
// import { Grid } from 'react-bootstrap'

import style from './FootNote.scss' // eslint-disable-line

export default class FootNote extends React.Component {
  // constructor (props) {
  //   super(props)
  // }

  render () {
    return (
      <div className='foot-note'>
        <h3>PLEASE NOTE THE FOLLOWING</h3>
        <p>
          Warning: Late repayment can cause you serious money problems. For help, go to moneyadviceservice.org.uk. The actual loan rate available will depend upon your circumstances. <br />
          THINK CAREFULLY BEFORE SECURING OTHER DEBTS AGAINST YOUR HOME. YOUR HOME MAY BE REPOSSESSED IF YOU DO NOT KEEP UP REPAYMENTS ON A MORTGAGE OR ANY OTHER DEBT SECURED ON IT. <br />
          MISSING PAYMENTS WILL HAVE SEVERE CONSEQUENCES AND MAY MAKE OBTAINING CREDIT MORE DIFFICULT IN THE FUTURE.
        </p>
        <h3>ABOUT THIS SERVICE</h3>
        <p>
          Credit Swift Limited has partnered with Equifax Limited to provide you with your credit report on an information only basis.            <br />
          Credit Swift Limited has selected Pancredit Systems Limited to provide you financial product comparison listings on an information only basis.<br />
          Listings are provided by Credit Swift Limited on a non-advised basis.  The table shows a range of products from the market and this service does not consider your personal financial circumstances.  This means that no advice is given or implied and you are solely responsible for deciding whether the product is suitable for your needs. If you are not sure which is the right product for you, you should seek advice.<br />
          Credit Swift Limited is acting as a credit broker, not a lender and may receive a commission or fee for any products that you choose to apply for. <br />
          Credit Swift will not charge you a fee for using this service, but you should check with your chosen provider if they will charge a fee for giving you credit.            <br />
          If you would like to make a complaint, complete the online complaint form or email Credit Swift at complaints@creditswift.co.uk.  If your complaint is still unresolved, you can ask for a review from The Financial Ombudsman Service. They will be able to help if your complaint fulfils certain criteria.<br />
          We suggest you read the Credit Swift Terms & Conditions (this includes further information on Customer Services and Complaints) and Credit Swift Terms of Use.  If you would like more information about how your data will be used, please read our Privacy and Cookies Policy.
        </p>
      </div>
    )
  }
}
