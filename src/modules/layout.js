const defaultState = {
  loginModalOpen: false,
  loanModalOpen: false,
  sideNavOpen: false

}
export default function reducer (state = defaultState, action) {
  switch (action.type) {
    case '@@router/LOCATION_CHANGE':
      {
        window.scrollTo(0, 0)
        return {
          ...state,
          loginModalOpen: false,
          loanModalOpen: false
        }
      }
    case 'login/SUCCESSFUL_LOGIN':
      {
        return { ...state, loginModalOpen: false }
      }
    case 'login/DENY_ACCESS':
      {
        return { ...state, loginModalOpen: true }
      }
    case 'TOGGLE_LOGIN_MODAL':
      {
        return { ...state, loginModalOpen: !state.loginModalOpen }
      }
    case 'TOGGLE_LOAN_MODAL':
      {
        return { ...state, loanModalOpen: !state.loanModalOpen }
      }
    case 'TOGGLE_SIDE_NAV':
      {
        return { ...state, sideNavOpen: !state.sideNavOpen }
      }

    default:
      {
        return { ...state }
      }
  }
}

export function toggleLoginModal () {
  return {
    type: 'TOGGLE_LOGIN_MODAL'
  }
}

export function toggleLoanModal () {
  return {
    type: 'TOGGLE_LOAN_MODAL'
  }
}

export function toggleSideNav () {
  return {
    type: 'TOGGLE_SIDE_NAV'
  }
}
