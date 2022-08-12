import {
   INCREMENT,
   DECREMENT,
   CHANGE_THEME,
   ENABLE_BUTTONS,
   DISABLE_BUTTONS,
} from './types.js'
import { combineReducers } from 'redux'

const counterReducer = (state = 0, action) => {
   switch (action.type) {
      case INCREMENT:
         return state + 1
      case DECREMENT:
         return state - 1
      default:
         return state
   }
}

const initialState = {
   value: 'light',
   isDisabled: false,
}

const themeReducer = (state = initialState, action) => {
   switch (action.type) {
      case CHANGE_THEME:
         return {
            ...state,
            value: action.payload,
         }
      case ENABLE_BUTTONS:
         return {
            ...state,
            isDisabled: false,
         }
      case DISABLE_BUTTONS:
         return {
            ...state,
            isDisabled: true,
         }
      default:
         return state
   }
}

export const rootReducer = combineReducers({
   counter: counterReducer,
   theme: themeReducer,
})
