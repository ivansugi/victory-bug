const defaultState = {
    amount: 0,
    score: "V"

}
export default function reducer(state = defaultState, action = {}) {
    console.log(action.payload);
    switch (action.type) {

        case 'CLOSE_LOAN_HOW_MUCH_MODAL':
            {

                return {...state, ...action.payload }
            }
        default:
            {
                return {...state }
            }
    }
}


export function insertLoanHowMuchModal(amount, score) {
    console.log(amount);
    console.log(score);
    //toggleLoanModal();
    return {
        type: 'CLOSE_LOAN_HOW_MUCH_MODAL',
        payload: {
            amount: amount,
            score: score,
        }
    }
}