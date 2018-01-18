import { push } from 'react-router-redux'

import { loginServiceHost, loginServiceEndpoints } from './api/index'
import apiHandler from './api/WSConnectionProvider'
import sessionProvider from './api/SessionProvider'
import { toggleLoginModal } from './layout'

const ATTEMPT_LOGIN = 'login/ATTEMPT_LOGIN'
const SUCCESSFUL_LOGIN = 'login/SUCCESSFUL_LOGIN'
const FAILED_LOGIN = 'login/FAILED_LOGIN'
const DENY_ACCESS = 'login/DENY_ACCESS'

const SUCCESSFUL_LOGOUT = 'login/SUCCESSFUL_LOGOUT'

const DEFAULT_STATE = {
  'reportDate': 0,
  'cards': [],
  'equiries': [],
  'loans': [],
  'scores': [],
  'user': {
    'homeowner': null,
    'dob_day': null,
    'dob_month': null,
    'dob_year': null,
    'gross_household_income': null,
    'latest_score': null,
    'length_residency': null,
    'mortgage_balance': null,
    'employment_start': null,
    'emp_status': null,
    'marital_status': null,
    'addressId': null,
    'country': null,
    'county': null,
    'email': null,
    'first_name': null,
    'home_phone': null,
    'middle_names': null,
    'mobile': null,
    'other_phone': null,
    'password': null,
    'postcode': null,
    'prevAddressId': null,
    'prev_country': null,
    'prev_county': null,
    'prev_length_residency': null,
    'prev_postcode': null,
    'prev_street_name': null,
    'prev_street_number': null,
    'prev_street_prefix': null,
    'prev_town': null,
    'salt': null,
    'status': null,
    'street_name': null,
    'street_number': null,
    'street_prefix': null,
    'surname': null,
    'town': null,
    'id': null
  },
  'factors': {
    'creditHistoryUI': null,
    'creditSearchesUI': null,
    'creditUtilUI': null,
    'electrolRollUI': null,
    'paymntHistoryUI': null,
    'publicRecordUI': null,
    'telecomsUI': null,
    'totalAcctsUI': null,
    'accountMix': null,
    'amtOnPromoRate': null,
    'totalBalOnCards': 0,
    'totalIntPayable': 0,
    'totalLimitOnCards': null,
    'consolidate': false,
    'consolidateApr': [

    ],
    'consolidateMthPmt': [

    ],
    'consolidateMthSav': [

    ],
    'consolidateYrlySav': [

    ],
    'amtToNxtUtilLvl': null,
    'cifa': null,
    'cifaNext': null,
    'cifaUpdated': null,
    'consolidateAmt': null,
    'consolidateTtlPayable': null,
    'corrections': null,
    'correctionsNext': null,
    'correctionsUpdated': null,
    'creditHistoryActual': null,
    'creditHistoryTarget': null,
    'creditScoreTarget': null,
    'creditSearchesActual': null,
    'creditSearchesTarget': null,
    'creditUtilActual': null,
    'creditUtilTarget': null,
    'currAssoc': null,
    'currAssocNext': null,
    'currAssocUpdated': null,
    'currentCCApr': null,
    'electrolRollActual': null,
    'electrolRollTarget': null,
    'gains': null,
    'gainsNext': null,
    'gainsUpdated': null,
    'insightsActualCreditScore': null,
    'insightsTargetCreditScore': null,
    'insightsTargetDelta': null,
    'minMonPayCC': null,
    'minMonPayTr': null,
    'missedPmtDt': null,
    'missedPmtTimeLeft': null,
    'pastAssoc': null,
    'pastAssocNext': null,
    'pastAssocRemoved': null,
    'paymntHistoryActual': null,
    'paymntHistoryTarget': null,
    'publicRecordActual': null,
    'publicRecordTarget': null,
    'publicRecordsDt': null,
    'publicRecordsTimeLeft': null,
    'recentCreditEquiries': null,
    'telecomsActual': null,
    'telecomsTarget': null,
    'timeToPayoffCc': null,
    'totalAcctsActual': null,
    'totalAcctsTarget': null,
    'insightsActualRating': null,
    'insightsPayoff': null,
    'productChance': null,
    'insightsTargetRating': null
  },
  'extras': {
    'creditHistoryUI': null,
    'creditSearchesUI': null,
    'creditUtilUI': null,
    'electrolRollUI': null,
    'paymntHistoryUI': null,
    'publicRecordUI': null,
    'telecomsUI': null,
    'totalAcctsUI': null,
    'accountMix': null,
    'amtOnPromoRate': null,
    'totalBalOnCards': null,
    'totalLimitOnCards': null,
    'consolidate': false,
    'consolidateApr': [

    ],
    'consolidateMthPmt': [

    ],
    'consolidateMthSav': [

    ],
    'consolidateYrlySav': [

    ],
    'amtToNxtUtilLvl': null,
    'cifa': null,
    'cifaNext': null,
    'cifaUpdated': null,
    'consolidateAmt': null,
    'consolidateTtlPayable': null,
    'corrections': null,
    'correctionsNext': null,
    'correctionsUpdated': null,
    'creditHistoryActual': null,
    'creditHistoryTarget': null,
    'creditScoreTarget': null,
    'creditSearchesActual': null,
    'creditSearchesTarget': null,
    'creditUtilActual': null,
    'creditUtilTarget': null,
    'currAssoc': null,
    'currAssocNext': null,
    'currAssocUpdated': null,
    'currentCCApr': null,
    'electrolRollActual': null,
    'electrolRollTarget': null,
    'gains': null,
    'gainsNext': null,
    'gainsUpdated': null,
    'insightsActualCreditScore': null,
    'insightsTargetCreditScore': null,
    'insightsTargetDelta': null,
    'minMonPayCC': null,
    'minMonPayTr': null,
    'missedPmtDt': null,
    'missedPmtTimeLeft': null,
    'pastAssoc': null,
    'pastAssocNext': null,
    'pastAssocRemoved': null,
    'paymntHistoryActual': null,
    'paymntHistoryTarget': null,
    'publicRecordActual': null,
    'publicRecordTarget': null,
    'publicRecordsDt': null,
    'publicRecordsTimeLeft': null,
    'recentCreditEquiries': null,
    'telecomsActual': null,
    'telecomsTarget': null,
    'timeToPayoffCc': null,
    'totalAcctsActual': null,
    'totalAcctsTarget': null
  },
  'recommendations': [],
  isLoggedIn: false,

  'cards': [

  ],
  'ccjs': [

  ],
  'enquiries': [

  ],
  'loans': [

  ],
  'otherAccounts': [

  ],
  'policies': [

  ],
  'scores': [

  ],
  'recommendations': [

  ],
  'affordabilityLV': {
    'debtIncomeRatio': 0,
    'paydayLoans': 0,
    'creditCashAdv': 0,
    'hardSearchCount': 0,
    'ccLimitExceed': 0,
    'ccPctUsage': 0
  },
  'creditStatusLV': {
    'score': 0,
    'noCreditAggr': 0,
    'accountMix': 0,
    'ageOldestAcct': 0,
    'noAccounts': 0
  },
  'employmentLV': {
    'emplymntStatus': 0,
    'contractType': 0,
    'lenWithEmploy': 0
  },
  'residentialLV': {
    'lenOnElectoral': 0,
    'onElectoralRoll': 0,
    'lenAtProperty': 0,
    'prevAddrCount': 0,
    'residentialStatus': 0
  },
  'badCreditLV': {
    'bankruptIva': 0,
    'ccj': 0,
    'ccjSat': 0,
    'ccjAmt': 0,
    'defaultLn': 0,
    'missedMort': 0,
    'missedPers': 0,
    'missedOth': 0,
    'lastMissed': 0
  }
}

export default function reducer (state = DEFAULT_STATE, action = {}) {
  switch (action.type) {
    case SUCCESSFUL_LOGIN:
      console.log(JSON.stringify(action.payload))
            /* var extraReturn = {
                 factors: action.payload.csFrontEnd.factors,
                 //cards: action.payload.csFrontEnd.cards,
                 ccjs: action.payload.csFrontEnd.cjs,
                 enquiries: action.payload.csFrontEnd.enquiries,
                 loans: action.payload.csFrontEnd.loans,
                 otherAccounts: action.payload.csFrontEnd.otherAccounts,
                 scores: action.payload.csFrontEnd.scores,
                 recommendations: action.payload.csFrontEnd.recommendations,
                 residentialLV: action.payload.csFrontEnd.residentialLV,
                 badCreditLV: action.payload.csFrontEnd.badCreditLV,
                 affordabilityLV: action.payload.csFrontEnd.affordabilityLV,
                 creditStatusLV: action.payload.csFrontEnd.creditStatusLV,
                 employmentLV: action.payload.csFrontEnd.employmentLV,
             } */
      return {
        ...state,
        ...action.payload,
        isLoggedIn: true
                // extras: extraReturn,

      }
      break
    case FAILED_LOGIN:
      alert(action.payload)
      return state
      break
    case SUCCESSFUL_LOGOUT:
      return {...DEFAULT_STATE }
      break

    default:
      return state
  }
}

export function attemptLogin (username, password) {
  return function (dispatch, getStore) {
    dispatch({
      type: ATTEMPT_LOGIN,
      username: username,
      password: password
    })
    return new Promise(function (success, error) {
            //  debugger;
      apiHandler.getConnection(loginServiceHost)
                .then(function (app) {
                  sessionProvider.loginUser(app, username, password).then((session) => {
                    session.ask(loginServiceEndpoints.GET_USER)
                            .then((results, err) => {
                              if (err) {
                                dispatch({
                                  type: FAILED_LOGIN,
                                  payload: err
                                })
                                error()
                              }

                              dispatch({
                                type: SUCCESSFUL_LOGIN,
                                payload: results
                              })
                              dispatch(push('/dashboard'))
                              success()
                            })
                  }).catch((err) => {
                    dispatch({
                      type: FAILED_LOGIN,
                      payload: err
                    })
                    error()
                  })
                })
                .catch((err) => {
                  console.log(err)
                  dispatch({
                    type: FAILED_LOGIN,
                    payload: err
                  })
                  error()
                })
    })
  }
}

export function denyAccess () {
  return function (dispatch, getStore) {
    dispatch({
      type: DENY_ACCESS
    })
        // TODO : i think this should be a login page instead of the homepage
    dispatch(push('/'))
    dispatch(toggleLoginModal())
  }
}

export function attemptLogout () {
  return function (dispatch) {
        // TODO : switch to promoise : ATTEMPT LOGOUT, the logout api request here, SUCCESSFULL LOGOUT
    dispatch({
      type: SUCCESSFUL_LOGOUT
    })
    dispatch(push('/goodbye'))
  }
}
