import {LOGIN} from '../constant/ActionType';

export const LoginAction = (params) => {
  // localStorage.setItem("accessToken", JSON.stringify(params.accessToken));
  console.log(params, 'loginAction')
  return {
    type: LOGIN,
    payload: params,
  };
};