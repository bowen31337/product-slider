import * as types from '../constants/actionTypes'
import axios from 'axios'

const contentEndpointUrl =  '/api/content.json'

export const fetchContents = () => {
	// const request = fetch(contentEndpointUrl)
	const request = axios({
    method: 'get',
    url: contentEndpointUrl,
    headers: []
  })

	return {
		type:types.FETCH_CONTENTS,
		payload:request
	}
}

export const fetchContentsSuccess = (data) => {
	return {
		type:types.FETCH_CONTENTS_SUCCESS,
		payload:data
	}
}

export const fetchContentsFailture = (error) => {
	return {
		type:types.FETCH_CONTENTS_SUCCESS,
		payload:error
	}
}



