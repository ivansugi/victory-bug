/**
 * Created by Marcin on 09.12.2016.
 */
import React from 'react'

import { Link } from 'react-router'

export default class extends React.Component {
  render () {
    return (
      <div className='footmark'>
        <div className='row'>
          <div className='col-lg-8 col-md-8'>
            <p class='intro'>Credit Swift Limited is authorised and regulated by the Financial Conduct Authority (FCA FRN 713043) and you may check this on the Financial Services Register by visiting the FCA website.  We are registered in England and Wales under registration number 9511750, and our registered office is at Brookman House, 145/147 Hatfield Road, St. Albans, Hertfordshire, AL1 4JY.  Credit Swift are registered with the Information Commissioners Office under Registration Reference ZA149590.  This website uses cookies. Continuing to use this website gives consent to cookies being used. For information on how to disable them see our privacy & cookie policy.</p>
          </div>
          <div className='col-lg-4 col-md-4'>
            <div className='accreditation'>
              <a href='#'><span class="helper"></span><img className="align-middle" src='/images/ISO27001_colour_UKAS.jpg' /></a>
              <a href='#'><span class="helper"></span><img className="align-middle" src='/images/CIFAS.jpg' /></a>
              <a href='#'><span class="helper"></span><img className="align-middle" src='/images/equifax_footer.png' /></a>
              <a href='#'><span class="helper"></span><img className="align-middle" src='/images/ICO.jpg' /></a>
              <a href='#'><span class="helper"></span><img className="align-middle" src='/images/equiniti-PANCREDIT.jpg' /></a>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className="col-md-12">
            <ul>
              <li><Link to='/pages/1'>Terms & Conditions</Link></li>
              <li><Link to='/pages/1'>Privacy and Cookie Policy</Link></li>
              <li><Link to='/pages/1'>Terms of Use</Link></li>
              <li><Link to='/pages/1'>Sitemap</Link></li>
              <li><Link to='/pages/1'>Contact</Link></li>
            </ul>
            <p class='copyright'>Copyright &copy;2015 - 2017 Credit Swift Limited.  All Rights Reserved.</p>
          </div>
        </div>
      </div>
    )
  }
}
