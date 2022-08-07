import {INCREMENT, DECREMENT, CHANGE_THEME, ENABLE_BUTTONS, DISABLE_BUTTONS} from './types.js'

export function increment() {
   return {type: INCREMENT}
}

export function decrement() {
   return {type: DECREMENT}
}

export function enableButtons() {
   return {type: ENABLE_BUTTONS}
}

export function disabledButtons() {
   return {type: DISABLE_BUTTONS}
}

export function changeTheme(newTheme) {
   return {
      type: CHANGE_THEME,
      payload: newTheme
   }
}

export function asyncIncrement() {
   return function(dispatch) {
      dispatch(disabledButtons())
      setTimeout(() => {
         dispatch(increment())
         dispatch(enableButtons())
      }, 1500)
   }
}
