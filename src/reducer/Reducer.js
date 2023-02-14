import {LOGIN} from '../constant/ActionType';
let auth = localStorage.getItem('accessToken')
const loginDetails = {
  isLogin:auth ? true : false,
  accessToken:''
}

export const LoginReducer = (state = loginDetails, action) => {
  // alert('test')
  console.log(action, 'LoginReducer')
  switch (action.type){
    case LOGIN: 
    return {
      ...state,
      accessToken: localStorage.setItem("accessToken", JSON.stringify(action.payload.stsTokenManager.accessToken)),
      isLogin: localStorage.getItem('accessToken') ? true : false
    }
    default : 
      return {
        ...state
      }
  }
}


// export const ListReducer = (state = toggleData, action) => {
//   switch (action.type) {
//     case TOGGLELIST:
//       console.log(localStorage.getItem('removeList'), 'test:::::::');
//       return {
//         ...state,
//         toggleData: !localStorage.getItem('removeList')
//           ? action.payload
//           : JSON.parse(localStorage.getItem('removeList')),
//       };
//     case REMOVELIST:
//       let remaningItems = state.toggleData.filter((key) => {
//         return !action.payload.id.includes(key.id);
//       });
//       localStorage.setItem('removeList', JSON.stringify(remaningItems));
//       if (!localStorage.getItem('removeList')) {
//         return {
//           ...state,
//           toggleData: JSON.parse(localStorage.getItem('removeList')),
//         };
//       }
//       return {
//         ...state,
//         toggleData: remaningItems,
//       };

//     default:
//       return {
//         ...state,
//       };
//   }
// };