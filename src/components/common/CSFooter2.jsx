import React from 'react'

import style from './CSFooter2.scss' // eslint-disable-line

export default class CSFooter2 extends React.Component {
  render () {
    const offset = this.props.offset ? 'offset' : ''
    return (
      <footer id='global-footer' class={`global-footer ${offset}`}>
        <div class='global-footer__inner-wrapper'>
          <div class='global-footer__row'>
            <nav>
              <div class='global-footer__column'>
                <a class='global-footer__link' href='/credit-cards/?trk=nw_gf_5.0'>Credit Cards</a>
                <a class='global-footer__link' href='/blog/category/banking/?trk=nw_gf_5.0'>Banking</a>
                <a class='global-footer__link' href='/blog/category/investing/?trk=nw_gf_5.0'>Investing</a>
                <a class='global-footer__link' href='/blog/category/mortgages/?trk=nw_gf_5.0'>Mortgages</a>
                <a class='global-footer__link' href='/blog/universities/?trk=nw_gf_5.0'>University</a>
              </div>
              <div class='global-footer__column'>
                <a class='global-footer__link' href='/blog/category/insurance/?trk=nw_gf_5.0'>Insurance</a>
                <a class='global-footer__link' href='/blog/category/loans/?trk=nw_gf_5.0'>Loans</a>
                <a class='global-footer__link' href='/blog/category/shopping/?trk=nw_gf_5.0'>Shopping</a>
                <a class='global-footer__link' href='/blog/category/utilities/?trk=nw_gf_5.0'>Utilities</a>
                <a class='global-footer__link' href='/blog/category/taxes/?trk=nw_gf_5.0'>Taxes</a>
              </div>
              <div class='global-footer__column'>
                <a class='global-footer__link' href='/about-us/?trk=nw_gf_5.0'>About</a>
                <a class='global-footer__link' href='/company/?trk=nw_gf_5.0'>Company</a>
                <a class='global-footer__link' href='/in-the-news/?trk=nw_gf_5.0'>Press</a>
                <a class='global-footer__link' href='/careers/?trk=nw_gf_5.0'>Careers</a>
                <a class='global-footer__link' href='/leadership/?trk=nw_gf_5.0'>Leadership</a>
              </div>
              <div class='global-footer__column'>
                <a class='global-footer__link' href='https://support.creditswift.com/?trk=nw_gf_5.0'>Help</a>
                <a class='global-footer__link' target='_blank' rel='noopener noreferrer' href='/security/?trk=nw_gf_5.0'>Security</a>
              </div>
            </nav>
            <ul class='global-footer__social-links'>
              <div class='global-footer__message'>
                <span class='global-footer__message-content'>Credit Swift's tailored advice, content and tools ensure you're getting more from your money.</span>
              </div>
              <li class='global-footer__social-link global-footer__social-link--twitter'>
                <a href='https://twitter.com/Credit Swift'>Twitter</a>
              </li>
              <li class='global-footer__social-link global-footer__social-link--facebook'>
                <a href='https://www.facebook.com/Credit Swift'>Facebook</a>
              </li>
              <li class='global-footer__social-link global-footer__social-link--instagram'>
                <a href='https://www.instagram.com/creditswift/'>Instagram</a>
              </li>
              <div class='global-footer__social-apps'>
                <li class='global-footer__social-link global-footer__social-link--apple-store'>
                  <a href='https://creditswift.app.link/4rsZgPN5Sz' aria-label='Download iOS app' />
                </li>
                <li class='global-footer__social-link global-footer__social-link--google-play'>
                  <a href='https://creditswift.app.link/4rsZgPN5Sz' aria-label='Download Android app' />
                </li>
              </div>
            </ul>
          </div>
          <div class='global-footer__row'>
            <div class='global-footer__copyright'>
              logo
              <span class='global-footer__copyright-text'> © 2017 Credit Swift, Inc. All Rights Reserved</span>
            </div>
            <div class='global-footer__secondary-nav'>
              <a class='global-footer__link' href='/blog/terms-of-use/?trk=nw_gf_5.0'>Terms of Use</a>
              <a class='global-footer__link' href='/blog/privacy-policy/?trk=nw_gf_5.0'>Privacy Policy</a>
            </div>
          </div>
          <section id='footer-disclaimer' class='global-footer__disclaimer'>
            <p class='disclaimer'>
              <span class='title'>Disclaimer: </span>
              <span>Credit Swift strives to keep its information accurate and up to date. This information may be different than what you see when you visit a financial institution, service provider or specific product’s site. All financial products, shopping products and services are presented without warranty. When evaluating offers, please review the financial institution’s Terms and Conditions. Pre-qualified offers are not binding. If you find discrepancies with your credit score or information from your credit report, please contact TransUnion® directly.</span>
            </p>
            <p class='disclaimer'>
              <span>Advertiser Disclosure: So how do we make money? We receive compensation from our partners when someone applies or gets approved for a financial product through our site.  But, the results of our tools (like our credit card comparison tool) and editorial reviews are based on quantitative and qualitative assessments of product features — nothing else. Compensation may influence the products we review and write about, the order in which categories appear in “best of” articles, whether products appear on our site and where they’re placed. While we try to feature as many product offers on our site as we can maintain (1,200+ credit cards and financial products!), we recognize that our site does not feature every company or financial product available on the market.</span>
            </p>
          </section>
        </div>
      </footer>
    )
  }
}
