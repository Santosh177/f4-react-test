import {createStore} from 'redux'
import { reducer } from './reducer'
export const INITIAL_VALUE = {
    celcius : false,
    fahrenheit : false,
}

export const store = createStore(reducer,INITIAL_VALUE);