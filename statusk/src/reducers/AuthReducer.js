import { EMAIL_CHANGED,PASSWORD_CHANGED, R_PASSWORD_CHANGED,NAME_CHANGED,REGISTER_FAILED, REGISTER_SUCCSESS, SAVE_DATA_TO_DB } from '../actions/types';


const INITIAL_STATE = {
    email: '',
    password: '',
    r_password: '',
    name: '',
    user: null,
    loading: false,
    error: ''
  };

export default (state= INITIAL_STATE,action) => {
    console.log(action)
    switch(action.type){
        case EMAIL_CHANGED:
            return {...state , email:action.payload};

        case PASSWORD_CHANGED:
            return { ...state ,password:action.payload };


        case R_PASSWORD_CHANGED:
            return { ...state ,r_password:action.payload };

        case NAME_CHANGED:
            return { ...state, name:action.payload};

        case SAVE_DATA_TO_DB:
            return {...state, loading: true};

        case REGISTER_FAILED:
            return {...state, loading: false, error: "Failed to Register"};

        case REGISTER_SUCCSESS:
            return {...state,loading: false,user: action.payload };
        default:
            return state;
    }
};