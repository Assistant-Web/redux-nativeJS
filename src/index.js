import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {logger} from 'redux-logger'
import thunk from 'redux-thunk'
import {rootReducer} from './redux/rootReducer.js'
import {increment, decrement, asyncIncrement, changeTheme} from './redux/actions.js'
import './styles.css'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('subtract')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)))

addBtn.addEventListener('click', () => {
   store.dispatch(increment())
})

subBtn.addEventListener('click', () => {
   store.dispatch(decrement())
})

asyncBtn.addEventListener('click', () => {
   store.dispatch(asyncIncrement()) 
})

theme.addEventListener('click', () => {
   const newTheme = document.body.classList.contains('light')
      ? 'dark'
      : 'light'
   store.dispatch(changeTheme(newTheme))
})

store.subscribe(() => {
   const state = store.getState()

   counter.textContent = state.counter.toString()
   document.body.className = state.theme.value;

   [addBtn, subBtn, themeBtn, asyncBtn].forEach(btn => btn.disabled = state.theme.disabled)
})

store.dispatch({type: 'INIT_APPLICATION'})
