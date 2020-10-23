import {createStore} from 'redux';
import {reducer} from './reducers';

export let store = createStore(reducer)



// initializing a store and passing the reducers to it