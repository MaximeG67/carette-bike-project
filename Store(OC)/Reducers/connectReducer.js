// const initialState = { 
//     userState: [ {
//     isLoading: true,
//     isSignout: false,
//     userToken: null
// } ] 
// }

// function toggleUserState(state = initialState,action) {
//     let prevState
//     switch (action.type) {
//         case 'RESTORE_TOKEN':
    
//           return {
//             ...prevState,
//             userToken: action.token,
//             isLoading: false,
//           };
//         case 'SIGN_IN':

//           return {
//             ...prevState,
//             isSignout: false,
//             userToken: action.token,
//             isLoading: false,
//           };
//         case 'SIGN_OUT':
//           return {
//             ...prevState,
//             isSignout: true,
//             userToken: null,
//             isLoading: false
//           };
//           case 'IS_LOADING':
//             return {
//               isLoading: true
//             }
//     }
// }
// export default toggleUserState