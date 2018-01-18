import React from 'react'
import { Link } from 'react-router'

export default class CSSideNav extends React.Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     tooltip: null
  //   }
  // }

  // getTooltip (id, text) {
  //   if (this.state.tooltip === id) {
  //     return (<div class='tooltip right in'> <div class='tooltip-arrow' /> <div class='tooltip-inner'> {text} </div> </div>)
  //   }
  //   return null
  // }

  // showTooltip (tooltip) {
  //   this.setState({tooltip})
  // }

  // hideTooltip () {
  //   this.setState({tooltip: null})
  // }

  render () {
    return (
      <div class='navigation'>
        <div class='navigation__links'>
          <Link class='navigation__link navigation__link--active' aria-current='true' to='/dashboard'>
            <div class='navigation__link-text'>Home</div>
          </Link>
          <Link class='navigation__link' aria-current='true' to='/overview/credit-score'>
            <div class='navigation__link-text'>Credit Score</div>
          </Link>
          <a class='navigation__link' aria-current='false' href='/home/dashboard/goals?trk=nw_ln'>
            <div class='navigation__link-icon navigation__link-icon--active'>
              <svg width='23px' height='23px' viewBox='0 0 23 23'>
                <g stroke='none' stroke-width='1' fill-rule='evenodd'>
                  <g transform='translate(-1.000000, 0.000000)'>
                    <g transform='translate(1.000000, 0.000000)'>
                      <g transform='translate(0.000000, -0.000400)'>
                        <path d='M14.53,8.4604 C14.65,8.5804 14.76,8.7004 14.87,8.8304 L11.96,11.7404 C11.87,11.4004 11.6,11.1304 11.26,11.0404 L14.16,8.1304 C14.29,8.2304 14.41,8.3404 14.53,8.4604 M11,17.0004 C8.24,17.0004 6,14.7604 6,12.0004 C6,9.2404 8.24,7.0004 11,7.0004 C12.16,7.0004 13.27,7.4004 14.16,8.1304 C14.29,8.2304 14.41,8.3404 14.53,8.4604 C14.65,8.5804 14.76,8.7004 14.87,8.8304 C15.6,9.7204 16,10.8304 16,12.0004 C16,14.7604 13.76,17.0004 11,17.0004 Z M12,12.0004 C12,11.9104 11.99,11.8204 11.96,11.7404 C11.87,11.4004 11.6,11.1304 11.26,11.0404 C11.18,11.0104 11.09,11.0004 11,11.0004 C10.45,11.0004 10,11.4504 10,12.0004 C10,12.5504 10.45,13.0004 11,13.0004 C11.55,13.0004 12,12.5504 12,12.0004 Z' />
                        <path d='M22,12.0004 C22,18.0704 17.07,23.0004 11,23.0004 C4.92,23.0004 0,18.0704 0,12.0004 C0,5.9204 4.92,1.0004 11,1.0004 C13.86,1.0004 16.45,2.0904 18.42,3.8704 L17.71,4.5804 L14.88,7.4204 C13.83,6.5404 12.48,6.0004 11,6.0004 C7.69,6.0004 5,8.6904 5,12.0004 C5,15.3104 7.69,18.0004 11,18.0004 C14.31,18.0004 17,15.3104 17,12.0004 C17,10.5204 16.46,9.1604 15.58,8.1204 L18.42,5.2904 L18.42,5.2804 L18.77,4.9304 L19.13,4.5704 C20.91,6.5304 22,9.1404 22,12.0004' />
                        <path d='M22.16,3.4704 L19.27,4.4404 L19.13,4.5704 C19.09,4.5504 19.07,4.5204 19.04,4.4904 C18.96,4.4004 18.87,4.3104 18.78,4.2204 C18.69,4.1304 18.6,4.0404 18.51,3.9504 C18.48,3.9304 18.45,3.9004 18.42,3.8704 L18.56,3.7304 L19.52,0.8404 C19.61,0.5804 19.9,0.4404 20.16,0.5304 C20.42,0.6104 20.56,0.9004 20.47,1.1604 L19.79,3.2204 L21.84,2.5304 C22.1,2.4404 22.39,2.5804 22.47,2.8404 C22.56,3.1004 22.42,3.3904 22.16,3.4704' />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div class='navigation__link-icon navigation__link-icon--inactive'>
              <svg width='22px' height='22px' viewBox='0 0 22 22'>
                <g stroke='none' stroke-width='1' fill-rule='evenodd'>
                  <g transform='translate(-1.000000, -1.000000)'>
                    <g transform='translate(1.000000, 1.000000)'>
                      <g transform='translate(0.000000, -0.000400)'>
                        <path d='M10.9996,5.0009 C7.6856,5.0009 4.9996,7.6869 4.9996,11.0009 C4.9996,14.3149 7.6856,17.0009 10.9996,17.0009 C14.3136,17.0009 16.9996,14.3149 16.9996,11.0009 C16.9996,9.3409 16.3256,7.8379 15.2356,6.7519 C14.1506,5.6699 12.6536,5.0009 10.9996,5.0009 M10.9996,6.0009 C12.3326,6.0009 13.5856,6.5189 14.5296,7.4599 C15.4776,8.4049 15.9996,9.6629 15.9996,11.0009 C15.9996,13.7579 13.7566,16.0009 10.9996,16.0009 C8.2426,16.0009 5.9996,13.7579 5.9996,11.0009 C5.9996,8.2439 8.2426,6.0009 10.9996,6.0009' />
                        <path d='M10.9996,0.0004 C4.9246,0.0004 -0.0004,4.9254 -0.0004,11.0004 C-0.0004,17.0754 4.9246,22.0004 10.9996,22.0004 C17.0746,22.0004 21.9996,17.0754 21.9996,11.0004 C21.9996,7.9624 20.7676,5.2114 18.7766,3.2204 C16.7856,1.2314 14.0366,0.0004 10.9996,0.0004 M10.9996,1.0004 C13.6696,1.0004 16.1806,2.0404 18.0696,3.9284 C19.9586,5.8164 20.9996,8.3284 20.9996,11.0004 C20.9996,16.5144 16.5136,21.0004 10.9996,21.0004 C5.4856,21.0004 0.9996,16.5144 0.9996,11.0004 C0.9996,5.4864 5.4856,1.0004 10.9996,1.0004' />
                        <polyline stroke='#929292' stroke-linecap='round' stroke-linejoin='round' points='10.9996 11.0009 18.9996 3.0009 19.9996 0.0009' />
                        <path d='M19,3.0008 L22,2.0008' stroke='#929292' stroke-linecap='round' stroke-linejoin='round' />
                        <path d='M12,11.0009 C12,11.5539 11.552,12.0009 11,12.0009 C10.447,12.0009 9.999,11.5539 9.999,11.0009 C9.999,10.4479 10.447,10.0009 11,10.0009 C11.552,10.0009 12,10.4479 12,11.0009' />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div class='navigation__link-text'>Goals</div>
          </a>
          <a class='navigation__link' aria-current='false' href='/home/dashboard/credit-score?trk=nw_ln'>
            <div class='navigation__link-icon navigation__link-icon--active'>
              <svg width='24px' height='16px' viewBox='0 0 24 16'>
                <defs>
                  <polygon id='path-1' points='0.0005 16 24 16 24 0.0003 0.0005 0.0003' />
                </defs>
                <g stroke='none' stroke-width='1' fill-rule='evenodd'>
                  <g transform='translate(0.000000, -4.000000)'>
                    <g transform='translate(0.000000, 4.000000)'>>
                      <path d='M12.3555,12.4023 C12.2565,12.5003 12.1285,12.5493 12.0005,12.5493 C11.8735,12.5493 11.7455,12.5023 11.6475,12.4053 C11.4525,12.2103 11.4505,11.8933 11.6445,11.6973 L14.4535,8.8643 C13.7745,8.3313 12.9295,8.0003 12.0005,8.0003 C9.7945,8.0003 8.0005,9.7943 8.0005,12.0003 C8.0005,14.2053 9.7945,16.0003 12.0005,16.0003 C14.2055,16.0003 16.0005,14.2053 16.0005,12.0003 C16.0005,11.0843 15.6785,10.2503 15.1595,9.5753 L12.3555,12.4023 Z M24.0005,12.0003 L24.0005,13.0003 C24.0005,13.5523 23.5525,14.0003 23.0005,14.0003 L16.5775,14.0003 C16.8465,13.3873 17.0005,12.7123 17.0005,12.0003 C17.0005,10.8053 16.5635,9.7233 15.8645,8.8633 L18.3555,6.3523 C18.5495,6.1563 18.5475,5.8403 18.3525,5.6443 C18.1565,5.4503 17.8405,5.4533 17.6445,5.6473 L15.1585,8.1533 C14.2955,7.4433 13.2055,7.0003 12.0005,7.0003 C9.2385,7.0003 7.0005,9.2383 7.0005,12.0003 C7.0005,12.7123 7.1535,13.3873 7.4225,14.0003 L1.0005,14.0003 C0.4475,14.0003 0.0005,13.5523 0.0005,13.0003 L0.0005,12.0003 C0.0005,5.3833 5.3835,0.0003 12.0005,0.0003 C18.6165,0.0003 24.0005,5.3833 24.0005,12.0003 L24.0005,12.0003 Z' />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div class='navigation__link-icon navigation__link-icon--inactive'>
              <svg width='24px' height='17px' viewBox='0 0 24 17'>
                <g stroke='none' stroke-width='1' fill-rule='evenodd'>
                  <g transform='translate(0.000000, -4.000000)'>
                    <g transform='translate(0.000000, 4.000000)'>
                      <path d='M23.0001,13.0004 L16.8991,13.0004 C16.9651,12.6774 17.0001,12.3424 17.0001,12.0004 C17.0001,10.8054 16.5641,9.7234 15.8651,8.8634 L18.3551,6.3524 C18.5501,6.1564 18.5481,5.8394 18.3531,5.6444 C18.1561,5.4504 17.8411,5.4534 17.6451,5.6474 L15.1591,8.1534 C14.2961,7.4434 13.2051,7.0004 12.0001,7.0004 C9.2391,7.0004 7.0001,9.2384 7.0001,12.0004 C7.0001,12.3424 7.0351,12.6774 7.1011,13.0004 L1.0001,13.0004 L1.0001,12.0004 C1.0001,5.9244 5.9251,1.0004 12.0001,1.0004 C18.0751,1.0004 23.0001,5.9244 23.0001,12.0004 L23.0001,13.0004 Z M12.0001,16.0004 C9.7941,16.0004 8.0001,14.2054 8.0001,12.0004 C8.0001,9.7944 9.7941,8.0004 12.0001,8.0004 C12.9291,8.0004 13.7741,8.3314 14.4541,8.8644 L11.6451,11.6974 C11.4501,11.8934 11.4521,12.2104 11.6471,12.4054 C11.7451,12.5024 11.8731,12.5494 12.0001,12.5494 C12.1291,12.5494 12.2571,12.5004 12.3551,12.4024 L15.1591,9.5754 C15.6791,10.2504 16.0001,11.0844 16.0001,12.0004 C16.0001,14.2054 14.2061,16.0004 12.0001,16.0004 L12.0001,16.0004 Z M0.0001,12.0004 L0.0001,13.0004 C0.0001,13.5524 0.4481,14.0004 1.0001,14.0004 L7.4221,14.0004 C8.1951,15.7644 9.9511,17.0004 12.0001,17.0004 C14.0491,17.0004 15.8051,15.7644 16.5781,14.0004 L23.0001,14.0004 C23.5521,14.0004 24.0001,13.5524 24.0001,13.0004 L24.0001,12.0004 C24.0001,5.3834 18.6171,0.0004 12.0001,0.0004 C5.3831,0.0004 0.0001,5.3834 0.0001,12.0004 Z' />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div class='navigation__link-text'>Credit score</div>
          </a>
          <div class='navigation__sublink-container'>
            <a class='navigation__sublink' aria-current='false' href='/home/dashboard/credit-score?trk=nw_ln'>
              <div class='navigation__sublink-text'>Overview</div>
            </a>
            <a class='navigation__sublink' aria-current='false' href='/home/dashboard/credit-score/goal-and-tips?trk=nw_ln'>
              <div class='navigation__sublink-text'>Credit simulator</div>
            </a>
          </div>
          <a class='navigation__link' aria-current='false' href='/home/dashboard/accounts?trk=nw_ln'>
            <div class='navigation__link-icon navigation__link-icon--active'>
              <svg width='22px' height='20px' viewBox='0 0 22 20'>
                <g stroke='none' stroke-width='1' fill-rule='evenodd'>
                  <g transform='translate(-1.000000, -2.000000)'>
                    <g transform='translate(1.000000, 2.000000)'>
                      <g transform='translate(0.000000, -0.000400)'>
                        <path d='M22.0002,18 L22.0002,19 C22.0002,19.55 21.5502,20 21.0002,20 L1.0002,20 C0.4502,20 0.0002,19.55 0.0002,19 L0.0002,18 C0.0002,17.45 0.4502,17 1.0002,17 L21.0002,17 C21.5502,17 22.0002,17.45 22.0002,18 Z' />
                        <path d='M21.9702,6.23 C21.8702,6.68 21.4602,7 21.0002,7 L1.0002,7 C0.5402,7 0.1302,6.68 0.0302,6.23 C-0.0798,5.78 0.1402,5.31 0.5502,5.11 L10.5502,0.11 C10.6902,0.04 10.8502,0 11.0002,0 C11.1502,0 11.3102,0.04 11.4502,0.11 L21.4502,5.11 C21.8602,5.31 22.0802,5.78 21.9702,6.23' />
                        <polygon points='3.5 16 6.5 16 6.5 8 3.5 8' />
                        <polygon points='9.5 16 12.5 16 12.5 8 9.5 8' />
                        <polygon points='15.5 16 18.5 16 18.5 8 15.5 8' />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div class='navigation__link-icon navigation__link-icon--inactive'>
              <svg width='22px' height='20px' viewBox='0 0 22 20'>
                <g stroke='none' stroke-width='1' fill-rule='evenodd'>
                  <g transform='translate(-1.000000, -2.000000)'>
                    <g transform='translate(1.000000, 2.000000)'>
                      <path d='M7,15.9996 L9,15.9996 L9,7.9996 L7,7.9996 L7,15.9996 Z M13,15.9996 L15,15.9996 L15,7.9996 L13,7.9996 L13,15.9996 Z M11,-0.0004 C10.847,-0.0004 10.694,0.0346 10.553,0.1056 L0.553,5.1056 C0.214,5.2746 0,5.6206 0,5.9996 L0,6.9996 C0,7.5516 0.448,7.9996 1,7.9996 L3,7.9996 L3,15.9996 L1,15.9996 C0.448,15.9996 0,16.4476 0,16.9996 L0,18.9996 C0,19.5516 0.448,19.9996 1,19.9996 L21,19.9996 C21.552,19.9996 22,19.5516 22,18.9996 L22,16.9996 C22,16.4476 21.552,15.9996 21,15.9996 L19,15.9996 L19,7.9996 L21,7.9996 C21.552,7.9996 22,7.5516 22,6.9996 L22,5.9996 C22,5.6206 21.786,5.2746 21.447,5.1056 L11.447,0.1056 C11.306,0.0346 11.153,-0.0004 11,-0.0004 L11,-0.0004 Z M6,16.9996 L10,16.9996 L10,6.9996 L6,6.9996 L6,16.9996 Z M12,16.9996 L16,16.9996 L16,6.9996 L12,6.9996 L12,16.9996 Z M11,0.9996 L21,5.9996 L21,6.9996 L18,6.9996 L18,16.9996 L21,16.9996 L21,18.9996 L1,18.9996 L1,16.9996 L4,16.9996 L4,6.9996 L1,6.9996 L1,5.9996 L11,0.9996 L11,0.9996 Z' />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div class='navigation__link-text'>Accounts</div>
          </a>
          <a class='navigation__link' aria-current='false' href='/home/dashboard/transactions?trk=nw_ln'>
            <div class='navigation__link-icon navigation__link-icon--active'>
              <svg width='18px' height='20px' viewBox='0 0 18 20'>
                <g stroke='none' stroke-width='1' fill-rule='evenodd'>
                  <g transform='translate(-3.000000, -2.000000)'>
                    <g transform='translate(3.000000, 2.000000)'>
                      <path d='M8.4796,5.51 L8.4796,8.36 C7.0196,7.99 6.7196,7.59 6.7196,6.94 C6.7996,6.11 7.5696,5.47 8.4796,5.51' />
                      <path d='M11.1796,11.01 C11.1396,11.85 10.3996,12.51 9.4796,12.53 L9.4796,9.57 C10.7696,9.92 11.1796,10.29 11.1796,11.01' />
                      <path d='M9.4796,13.42 L9.4796,14.52 C9.4796,14.77 9.2596,14.98 8.9796,14.98 C8.7096,14.98 8.4796,14.77 8.4796,14.52 L8.4796,13.39 C7.3496,13.27 6.2996,12.81 5.4796,12.09 L5.4796,12.08 C5.3296,11.94 5.3396,11.73 5.4796,11.6 L5.6696,11.42 C5.8196,11.29 6.0496,11.29 6.1996,11.42 C6.8196,11.99 7.6196,12.36 8.4796,12.49 L8.4796,9.33 C7.0796,8.99 5.6896,8.48 5.6896,6.98 C5.7596,5.62 6.9996,4.56 8.4796,4.61 L8.4796,3.46 C8.4796,3.21 8.7096,3 8.9796,3 C9.2596,3 9.4796,3.21 9.4796,3.46 L9.4796,4.65 C10.3596,4.76 11.1896,5.12 11.8396,5.67 C11.9896,5.81 11.9896,6.02 11.8396,6.16 L11.6596,6.34 C11.5096,6.48 11.2796,6.48 11.1296,6.34 C10.6696,5.95 10.0996,5.67 9.4796,5.55 L9.4796,8.61 C10.9296,8.95 12.2096,9.51 12.2096,10.97 C12.1796,12.34 10.9696,13.43 9.4796,13.42 M16.9996,0 L0.9996,0 C0.4496,0 -0.0004,0.45 -0.0004,1 L-0.0004,19.44 C-0.0004,19.68 0.2696,19.82 0.4596,19.69 L2.8296,18.11 C2.9296,18.04 3.0696,18.04 3.1696,18.11 L5.8296,19.89 C5.9296,19.96 6.0596,19.96 6.1596,19.89 L8.8296,18.11 C8.9296,18.04 9.0596,18.04 9.1596,18.11 L11.8296,19.89 C11.9296,19.96 12.0596,19.96 12.1696,19.89 L14.8296,18.11 C14.9296,18.04 15.0696,18.04 15.1696,18.11 L17.5396,19.69 C17.7296,19.82 17.9996,19.68 17.9996,19.44 L17.9996,1 C17.9996,0.45 17.5496,0 16.9996,0' />
                      <g transform='translate(0.000000, -0.000400)' />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div class='navigation__link-icon navigation__link-icon--inactive'>
              <svg width='18px' height='20px' viewBox='0 0 18 20'>
                <g stroke='none' stroke-width='1' fill-rule='evenodd'>
                  <g transform='translate(-3.000000, -2.000000)'>
                    <g transform='translate(3.000000, 2.000000)'>
                      <path d='M17,0 L1,0 C0.448,0 0,0.448 0,1 L0,19.443 C0,19.619 0.144,19.742 0.299,19.742 C0.354,19.742 0.411,19.726 0.463,19.691 L2.835,18.11 C2.885,18.077 2.942,18.06 3,18.06 C3.058,18.06 3.115,18.077 3.165,18.11 L5.834,19.89 C5.884,19.923 5.942,19.94 6,19.94 C6.057,19.94 6.115,19.923 6.165,19.89 L8.834,18.11 C8.884,18.077 8.942,18.06 9,18.06 C9.057,18.06 9.115,18.077 9.165,18.11 L11.835,19.89 C11.885,19.923 11.942,19.94 12,19.94 C12.057,19.94 12.115,19.923 12.165,19.89 L14.835,18.11 C14.885,18.077 14.942,18.06 15,18.06 C15.058,18.06 15.115,18.077 15.165,18.11 L17.537,19.691 C17.589,19.726 17.646,19.742 17.701,19.742 C17.856,19.742 18,19.619 18,19.443 L18,1 C18,0.448 17.552,0 17,0 M17,1 L17,18.132 L15.72,17.278 C15.506,17.136 15.257,17.06 15,17.06 C14.743,17.06 14.494,17.136 14.28,17.278 L12,18.798 L9.72,17.278 C9.506,17.136 9.257,17.06 9,17.06 C8.743,17.06 8.494,17.136 8.28,17.278 L6,18.798 L3.72,17.278 C3.506,17.136 3.257,17.06 3,17.06 C2.743,17.06 2.494,17.135 2.28,17.278 L1,18.132 L1,1 L17,1' />
                      <path d='M9.4823,12.5281 L9.4823,9.5701 C10.7723,9.9201 11.1823,10.2891 11.1823,11.0081 C11.1403,11.8481 10.3953,12.5141 9.4823,12.5281 M6.7223,6.9441 C6.7963,6.1081 7.5723,5.4741 8.4823,5.5061 L8.4823,8.3631 C7.0223,7.9941 6.7223,7.5891 6.7223,6.9441 M12.2123,10.9711 C12.2123,9.5151 10.9323,8.9531 9.4823,8.6121 L9.4823,5.5521 C10.1013,5.6711 10.6723,5.9451 11.1323,6.3451 C11.2803,6.4771 11.5143,6.4771 11.6623,6.3451 L11.8423,6.1611 C11.9863,6.0251 11.9863,5.8081 11.8423,5.6721 C11.1873,5.1171 10.3633,4.7601 9.4823,4.6491 L9.4823,3.4611 C9.4823,3.2061 9.2583,3.0001 8.9823,3.0001 C8.7063,3.0001 8.4823,3.2061 8.4823,3.4611 L8.4823,4.6131 C7.0033,4.5611 5.7573,5.6191 5.6923,6.9811 C5.6923,8.4831 7.0823,8.9901 8.4823,9.3301 L8.4823,12.4911 C7.6203,12.3621 6.8233,11.9881 6.2023,11.4221 C6.0543,11.2901 5.8203,11.2901 5.6723,11.4221 L5.4823,11.5971 C5.3363,11.7291 5.3333,11.9451 5.4753,12.0791 C5.4773,12.0821 5.4803,12.0841 5.4823,12.0861 C6.3013,12.8101 7.3543,13.2701 8.4823,13.3941 L8.4823,14.5181 C8.4823,14.7731 8.7063,14.9791 8.9823,14.9791 C9.2583,14.9791 9.4823,14.7731 9.4823,14.5181 L9.4823,13.4221 C10.9653,13.4271 12.1793,12.3371 12.2123,10.9711' />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div class='navigation__link-text'>Transactions</div>
          </a>
        </div>
        {
          // <div class="navigation__beta">
          //   <svg width="80px" height="23px">
          //     <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.420000017">
          //       <g transform="translate(-82.000000, -815.000000)" fill="#000000">
          //         <g transform="translate(82.000000, 815.000000)">
          //           <path d="M55.089,22 L55.089,14.3 L58.367,14.3 C59.247,14.3 59.94,14.553 60.38,14.982 C60.699,15.312 60.875,15.719 60.875,16.214 L60.875,16.236 C60.875,17.237 60.259,17.754 59.654,18.018 C60.567,18.293 61.304,18.821 61.304,19.877 L61.304,19.899 C61.304,21.219 60.193,22 58.51,22 L55.089,22 Z M59.995,16.357 L59.995,16.335 C59.995,15.576 59.39,15.081 58.29,15.081 L55.947,15.081 L55.947,17.732 L58.224,17.732 C59.269,17.732 59.995,17.259 59.995,16.357 Z M60.424,19.822 C60.424,18.986 59.72,18.502 58.378,18.502 L55.947,18.502 L55.947,21.219 L58.532,21.219 C59.698,21.219 60.424,20.702 60.424,19.844 L60.424,19.822 Z M65.374,22.132 C63.812,22.132 62.536,20.933 62.536,19.173 L62.536,19.151 C62.536,17.512 63.691,16.192 65.264,16.192 C66.947,16.192 67.915,17.534 67.915,19.195 C67.915,19.305 67.915,19.371 67.904,19.47 L63.394,19.47 C63.515,20.702 64.384,21.395 65.396,21.395 C66.177,21.395 66.727,21.076 67.189,20.592 L67.717,21.065 C67.145,21.703 66.452,22.132 65.374,22.132 Z M63.394,18.843 L67.057,18.843 C66.969,17.809 66.375,16.907 65.242,16.907 C64.252,16.907 63.504,17.732 63.394,18.843 Z M71.303,22.099 C71.71,22.099 72.029,22.011 72.326,21.857 L72.326,21.131 C72.029,21.274 71.787,21.329 71.501,21.329 C70.929,21.329 70.544,21.076 70.544,20.383 L70.544,17.061 L72.348,17.061 L72.348,16.313 L70.544,16.313 L70.544,14.597 L69.697,14.597 L69.697,16.313 L68.905,16.313 L68.905,17.061 L69.697,17.061 L69.697,20.493 C69.697,21.648 70.39,22.099 71.303,22.099 Z M75.538,22.121 C74.482,22.121 73.415,21.516 73.415,20.35 L73.415,20.328 C73.415,19.129 74.405,18.491 75.846,18.491 C76.572,18.491 77.089,18.59 77.595,18.733 L77.595,18.535 C77.595,17.512 76.968,16.984 75.901,16.984 C75.23,16.984 74.702,17.16 74.174,17.402 L73.921,16.709 C74.548,16.423 75.164,16.236 75.989,16.236 C76.792,16.236 77.408,16.445 77.826,16.863 C78.211,17.248 78.409,17.798 78.409,18.524 L78.409,22 L77.595,22 L77.595,21.142 C77.199,21.659 76.539,22.121 75.538,22.121 Z M75.703,21.45 C76.748,21.45 77.606,20.812 77.606,19.91 L77.606,19.36 C77.188,19.239 76.627,19.118 75.934,19.118 C74.867,19.118 74.273,19.58 74.273,20.295 L74.273,20.317 C74.273,21.032 74.933,21.45 75.703,21.45 Z" />
          //           <path d="M0.26,11 L1.954,11 L1.954,4.028 L7.358,11 L8.8,11 L8.8,1.2 L7.106,1.2 L7.106,7.976 L1.856,1.2 L0.26,1.2 L0.26,11 Z M14.512,11.168 C12.37,11.168 10.718,9.614 10.718,7.332 L10.718,7.304 C10.718,5.19 12.216,3.454 14.33,3.454 C16.682,3.454 17.872,5.302 17.872,7.43 C17.872,7.584 17.858,7.738 17.844,7.906 L12.412,7.906 C12.594,9.11 13.448,9.782 14.54,9.782 C15.366,9.782 15.954,9.474 16.542,8.9 L17.536,9.782 C16.836,10.622 15.87,11.168 14.512,11.168 Z M12.398,6.786 L16.192,6.786 C16.08,5.694 15.436,4.84 14.316,4.84 C13.28,4.84 12.552,5.638 12.398,6.786 Z M19.566,11 L21.274,11 L21.274,8.186 C21.274,6.226 22.31,5.26 23.794,5.26 L23.892,5.26 L23.892,3.468 C22.59,3.412 21.736,4.168 21.274,5.274 L21.274,3.608 L19.566,3.608 L19.566,11 Z M28.414,11.154 C26.678,11.154 24.984,9.768 24.984,7.318 L24.984,7.29 C24.984,4.84 26.65,3.454 28.414,3.454 C29.632,3.454 30.402,4.056 30.934,4.756 L30.934,0.78 L32.628,0.78 L32.628,11 L30.934,11 L30.934,9.768 C30.388,10.538 29.618,11.154 28.414,11.154 Z M28.82,9.684 C29.954,9.684 30.962,8.732 30.962,7.318 L30.962,7.29 C30.962,5.862 29.954,4.924 28.82,4.924 C27.658,4.924 26.692,5.834 26.692,7.29 L26.692,7.318 C26.692,8.746 27.672,9.684 28.82,9.684 Z M37.598,11.07 L39.096,11.07 L41.504,4.028 L43.912,11.07 L45.41,11.07 L48.812,1.2 L47.006,1.2 L44.668,8.466 L42.26,1.172 L40.804,1.172 L38.396,8.466 L36.058,1.2 L34.196,1.2 L37.598,11.07 Z M52.508,11.154 C51.122,11.154 49.876,10.356 49.876,8.872 L49.876,8.844 C49.876,7.248 51.136,6.464 52.942,6.464 C53.768,6.464 54.356,6.59 54.93,6.772 L54.93,6.59 C54.93,5.54 54.286,4.98 53.096,4.98 C52.27,4.98 51.654,5.162 50.982,5.442 L50.52,4.112 C51.346,3.748 52.144,3.51 53.32,3.51 C54.426,3.51 55.252,3.804 55.77,4.336 C56.316,4.868 56.568,5.652 56.568,6.618 L56.568,11 L54.916,11 L54.916,10.076 C54.412,10.678 53.642,11.154 52.508,11.154 Z M52.984,9.922 C54.104,9.922 54.958,9.278 54.958,8.34 L54.958,7.836 C54.524,7.668 53.95,7.542 53.278,7.542 C52.186,7.542 51.542,8.004 51.542,8.774 L51.542,8.802 C51.542,9.516 52.172,9.922 52.984,9.922 Z M58.682,11 L60.39,11 L60.39,0.78 L58.682,0.78 L58.682,11 Z M62.686,11 L64.394,11 L64.394,0.78 L62.686,0.78 L62.686,11 Z M69.994,11.168 C67.852,11.168 66.2,9.614 66.2,7.332 L66.2,7.304 C66.2,5.19 67.698,3.454 69.812,3.454 C72.164,3.454 73.354,5.302 73.354,7.43 C73.354,7.584 73.34,7.738 73.326,7.906 L67.894,7.906 C68.076,9.11 68.93,9.782 70.022,9.782 C70.848,9.782 71.436,9.474 72.024,8.9 L73.018,9.782 C72.318,10.622 71.352,11.168 69.994,11.168 Z M67.88,6.786 L71.674,6.786 C71.562,5.694 70.918,4.84 69.798,4.84 C68.762,4.84 68.034,5.638 67.88,6.786 Z M77.54,11.126 C78.184,11.126 78.646,10.986 79.066,10.748 L79.066,9.362 C78.73,9.53 78.394,9.614 78.016,9.614 C77.442,9.614 77.106,9.348 77.106,8.69 L77.106,5.064 L79.094,5.064 L79.094,3.608 L77.106,3.608 L77.106,1.578 L75.412,1.578 L75.412,3.608 L74.474,3.608 L74.474,5.064 L75.412,5.064 L75.412,8.956 C75.412,10.58 76.294,11.126 77.54,11.126 Z" />
          //         </g>
          //       </g>
          //     </g>
          //   </svg>
          //   <div class="navigation__beta-link">Send feedback</div>
          // </div>
        }
      </div>

    )
  }
}
