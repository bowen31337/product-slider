import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

import fetchContentsReducer from './fetchContentsReducer'
import toggleBoxReducer from './toggleBoxReducer'
import goToPageReducer from './goToPageReducer'

// Updates an entity cache in response to any action with response.entities.

const rootReducer = combineReducers({
  // page:reducer_selectPage,
  fetchContents:fetchContentsReducer,
  toggleBox:toggleBoxReducer,
  goToPage:goToPageReducer,
  routing
})

export default rootReducer
