import { EMAIL_CHANGED, PASSWORD_CHANGED, R_PASSWORD_CHANGED, NAME_CHANGED, REGISTER_FAILED, REGISTER_SUCCSESS, SAVE_DATA_TO_DB } from './types';
import * as firebase from 'firebase';

export const emailChanged = (text) => {
    return {
      type: EMAIL_CHANGED,
      payload: text
    };
  };

  export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
  };

  export const r_passwordChanged = (text) => {
    return {
        type: R_PASSWORD_CHANGED,
        payload: text
    };
  };


  export const nameChanged = (text) => {
    return {
        type: NAME_CHANGED,
        payload: text
    };
  };


  export const saveDatatoDB = ({email, password}) => {
    return (dispatch) => {
      dispatch({type: SAVE_DATA_TO_DB});

      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => registerSuccess(dispatch,user))
      .catch(() => registerFailed);


    };
  };


  const registerSuccess = (dispatch, user) => {
    dispatch({
      type:REGISTER_SUCCSESS,
      payload: user
    });
  };


  const registerFailed = (dispatch) => {
    dispatch({
      type:REGISTER_FAILED
    });
  };