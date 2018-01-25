import { combineReducers } from 'redux';
import { EMAIL_CHANGED } from '../actions/types';

import { emailChanged } from '../actions/index';

const INITIAL_STATE = {
    email: '',
    password: ''
  };

function saveUserData(state= INITIAL_STATE,action) {
    switch(action.type){
        case EMAIL_CHANGED:
            return {...state , email:action.payload};
        default:
            return state;
    }
}


const rootReducer = combineReducers({
    saveUserData
});


export default rootReducer;