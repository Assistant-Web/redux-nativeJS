import {
   INCREMENT,
   DECREMENT,
   CHANGE_THEME,
   ENABLE_BUTTONS,
   DISABLE_BUTTONS,
} from './types.js'

export const increment = () => ({ type: INCREMENT })
export const decrement = () => ({ type: DECREMENT })

export const enableButtons = () => ({ type: ENABLE_BUTTONS })
export const disabledButtons = () => ({ type: DISABLE_BUTTONS })

export const changeTheme = (currentTheme) => ({
   type: CHANGE_THEME,
   payload: currentTheme,
})

export const asyncIncrement = () => (dispatch) => {
   dispatch(disabledButtons())
   setTimeout(() => {
      dispatch(increment())
      dispatch(enableButtons())
   }, 1500)
}

export const asyncDecrement = () => (dispatch) => {
   dispatch(disabledButtons())
   setTimeout(() => {
      dispatch(decrement())
      dispatch(enableButtons())
   }, 1500)
}
