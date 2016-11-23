import * as types from '../constants/actionTypes'


export const goToPage = (index) => {
	return {
		type:types.GO_TO_PAGE,
		payload:index
	}
}
