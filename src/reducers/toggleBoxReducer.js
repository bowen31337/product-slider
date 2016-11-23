import * as types from '../constants/actionTypes'

const INIT_STATE = {
		payload:true,
}

const toggleBox = (state = INIT_STATE, action) => {
	const { type } = action

	switch(type) {
		case types.TOGGLE_BOX:
			return {
					...INIT_STATE,
					payload:action.payload
			}
		default:
      return state
	}

}

export default toggleBox
