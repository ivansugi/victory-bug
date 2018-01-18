/**
 * Created by Marcin on 18.01.2017.
 */
import {loginServiceHost, loginServiceEndpoints} from "./api/index";
import apiHandler from './api/WSConnectionProvider';



const FIRST_STEP = "register/FIRST_STEP";
const SECOND_STEP = "register/SECOND_STEP";
const THIRD_STEP = "register/THIRD_STEP";
const FOURTH_STEP = "register/FOURTH_STEP";
const FIFTH_STEP = "register/FIFTH_STEP";

const defaultState = {
    email: null,
    first_name: null,
    middle_initials: null,
    last_name: null,
    date_of_birth: {
        day: null,
        month: null,
        year: null,
    },
    password: null,
    security_question_no: 0,
    security_answer: null,
    steps: {
        one: true,
        two: false,
        three: false,
        four: false,
        five: false,
    }
};

export default function reducer(state = defaultState, action = {}) {
    switch (action.type) {
        case FIRST_STEP:
            return {
                ...state,
                email: action.email,
                steps: {
                    one: state.steps.one,
                    two: action.steps.two,
                    three: state.steps.three,
                    four: state.steps.four,
                    five: state.steps.five,
                }
            };
            break;
        case SECOND_STEP:
            return {
                ...state,
                first_name: action.first_name,
                middle_initials: action.middle_initials,
                last_name: action.last_name,
                date_of_birth: action.day_of_birth + "/" + action.month_of_birth + "/" + action.year_of_birth,
                password: action.password,
                security_question_no: action.security_question_no,
                security_answer: action.security_answer,
                steps: {
                    one: state.steps.one,
                    two: state.steps.two,
                    three: action.steps.three,
                    four: state.steps.four,
                    five: state.steps.five,
                }
            };
            break;
        case THIRD_STEP:
            return {
                ...state,
                steps:  {
                    one: state.steps.one,
                    two: state.steps.two,
                    three: state.steps.three,
                    four: action.steps.four,
                    five: state.steps.five,
                }
            };
            break;
        case FOURTH_STEP:
            return {
                ...state,
                steps:  {
                    one: state.steps.one,
                    two: state.steps.two,
                    three: state.steps.three,
                    four: state.steps.four,
                    five: action.steps.five,
                }
            };
            break;
         case FIFTH_STEP:
            return {
                ...state,
                steps:  {
                    one: state.steps.one,
                    two: state.steps.two,
                    three: state.steps.three,
                    four: state.steps.four,
                    five: action.steps.five,
                }
            };
            break;
        default: return state;
    }
}


export function RegisterEmailStep(email) {
    return dispatch => {
        return new Promise(resolve => {
            dispatch({
                type: FIRST_STEP,
                email: email,
                steps: {
                    two: true,
                }
            });
            resolve();
        })
    }
}

export function RegisterAccountInfo(data) {
    return dispatch => {
        return new Promise(resolve => {
            dispatch({
                type: SECOND_STEP,
                steps: {
                    three: true,
                },
                ...data,
            });
            resolve(data);
        })
    }
}
export function RegisterAddressLookup(data) {
    return dispatch => {
        return new Promise(resolve => {
            dispatch({
                type: THIRD_STEP,
                steps: {
                    four: true,
                },
            });
            resolve(data);
        })
    }
}

export function RegisterPersonalInformation(data) {
    return dispatch => {
        return new Promise(resolve => {
            dispatch({
                type: FOURTH_STEP,
                steps: {
                    five: true,
                },
            });
            resolve(data);
        })
    }
}

export function RegisterIdentityInformation(data) {
    return dispatch => {
        return new Promise(resolve => {
            dispatch({
                type: FIFTH_STEP,
            });
            resolve(data);
        })
    }
}