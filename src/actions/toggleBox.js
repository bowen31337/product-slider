import * as types from '../constants/actionTypes'


export const toggleBox = (flag) => {
	return {
		type:types.TOGGLE_BOX,
		payload:!flag
	}
}
