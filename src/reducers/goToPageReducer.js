import * as types from '../constants/actionTypes'

const INIT_STATE = {
		payload:null,
}

const goToPage = (state = INIT_STATE, action) => {
	const { type } = action

	switch(type) {
		case types.GO_TO_PAGE:
			return {
					...INIT_STATE,
					payload:action.payload
			}
		default:
      return state
	}

}

export default goToPage
