import React from 'react';
import { Link } from 'react-router'
import { Box, BoxBody } from '../common/Box'
import Slider from 'react-slick';

export default class AdFooter extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
     {/*<div class='ad-footer'>
        <Link to='/articles/1'><img src='/images/See-Your-Credit-Factors.png' /></Link>
    </div>*/}
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      centerMode:true,
      draggable: true,
      slidesToShow: 3,

    };
    return (
      <Box className='credit-card-round-up'>
        <BoxBody>
          <h3 class='box-title'>Credit Card Roundup</h3>
          <Slider {...settings}>
            <div className = "container-slider"><h3>+20</h3><p>Go f f f f fix yourself</p></div>
            <div className = "container-slider"><h3>-20</h3><p>Go f f f f fix yourself</p></div>
            <div className = "container-slider"><h3>+20</h3><p>Go f f f f fix yourself</p></div>
            <div className = "container-slider"><h3>-20</h3><p>Go f f f f fix yourself</p></div>
            <div className = "container-slider"><h3>+20</h3><p>Go f f f f fix yourself</p></div>
            <div className = "container-slider"><h3>-20</h3><p>Go f f f f fix yourself</p></div>
          </Slider>
        </BoxBody>
      </Box>
     
    );
  }
}
