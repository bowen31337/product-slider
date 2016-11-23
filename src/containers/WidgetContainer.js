import { connect } from 'react-redux'
import Widget from '../components/Widget'

import * as action from '../actions/fetchContents'
import {toggleBox} from '../actions/toggleBox'
import {goToPage} from '../actions/goToPage'

const mapStateToProps = (state) => {
  return {
  		title:state.fetchContents.payload.title || '',
  		items:state.fetchContents.payload.content || [],
  		loading:state.fetchContents.loading,
  		error:state.fetchContents.error,
  		page:state.goToPage.payload || 0,
  		flag:state.toggleBox.payload
  }
}

const mapDispatchToProps = (dispatch, ownPros) => {
  return {
   	fetchContents:() => {
      let result = dispatch(action.fetchContents()).payload
   		result.then(response => {
   			console.log(response)
   				if (response.status === 200) {
	            dispatch(action.fetchContentsSuccess(response.data))
          } else {
            dispatch(action.fetchContentsFailure(response.statusText))
          }
   		})
   	},
   	toggleBox:(flag) => {
				dispatch(toggleBox(flag))
   	},
   	goToPage:(page) => {
				dispatch(goToPage(page))
   	}


  }
}


const WidgetContainer = connect(mapStateToProps, mapDispatchToProps)(Widget)

export default WidgetContainer