// "createStore" is deprecated
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { logger } from 'redux-logger'
import thunk from 'redux-thunk'
import { rootReducer } from './redux/rootReducer.js'
import {
   increment,
   decrement,
   asyncIncrement,
   asyncDecrement,
   changeTheme,
} from './redux/actions.js'
import './css/styles.css'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('subtract')
const asyncAddBtn = document.getElementById('async-add')
const asyncSubBtn = document.getElementById('async-subtract')
const themeBtn = document.getElementById('theme')

const store = createStore(
   rootReducer,
   composeWithDevTools(applyMiddleware(thunk, logger))
)

addBtn.addEventListener('click', () => {
   store.dispatch(increment())
})

subBtn.addEventListener('click', () => {
   store.dispatch(decrement())
})

asyncAddBtn.addEventListener('click', () => {
   store.dispatch(asyncIncrement())
})

asyncSubBtn.addEventListener('click', () => {
   store.dispatch(asyncDecrement())
})

theme.addEventListener('click', () => {
   const currentTheme = document.body.classList.contains('light')
      ? 'dark'
      : 'light'
   store.dispatch(changeTheme(currentTheme))
})

store.subscribe(() => {
   const state = store.getState()

   counter.textContent = state.counter.toString()
   document.body.className = state.theme.value
   ;[addBtn, subBtn, themeBtn, asyncAddBtn, asyncSubBtn].forEach(
      (btn) => (btn.disabled = state.theme.isDisabled)
   )
})

// this dispatch for initial application
store.dispatch({ type: 'INIT_APPLICATION' })
