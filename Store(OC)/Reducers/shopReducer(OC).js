


// const initialState = { shoppingList: [] } // state initial dans lequel on initialise une variable 'shoppingList' avec un tableau vide 

// function toggleShopping(state = initialState,action) { /// REDUCER QUI PRENDS EN PARAMETRE LE STATE ET UNE ACTION /// STATE = INITIALSTATE PERMET D'INITIALISER LE STATE POUR LA PREMIERE FOIS AVEC UN TABLEAU VIDE
//     let nextState
//     switch (action.type) {
//         case 'TOGGLE_SHOPPING': /// CETTE ACTION PERMET AUTOMATIQUEMENT DE SAVOIR SI IL FAUT AJOUTER OU SUPPRIMER UN OBJET DE LA SHOPPINGLIST
//             const shoppingListIndex = state.shoppingList.findIndex(item => item.id === action.value.id) /// FIND INDEX PERMET DE VERIFIER SI UN OBJET EST DEJA PRESENT DANS LA SHOPPINGLIST
//             if (shoppingListIndex !== -1) {
//                 /// SUPPRESSION DE L'ARTICLE SI CELUI CI EST DEJA PRESENT DANS LA SHOPPINGLIST
//                 nextState = {
//                     ...state, /// PERMET DE CREER UN NOUVEAU STATE, PRINCIPE D'IMMUABLE
//                    shoppingList: state.shoppingList.filter((item,index) => index !== shoppingListIndex) 
//                 }
//             } else{
//                 /// AJOUT DE L'ARTICLE SI CELUI CI N'EST PAS PRESENT DANS LA SHOPPINGLIST
//                 nextState ={
//                     ...state,
//                     shoppingList :[...state.shoppingList, action.value]
//                 }
//             }
//             return nextState || state /// RENVOI NEXTSTATE SI IL N'EST PAS UNDEFINED ET SI IL VAUT UNDEFINED, IL RENVOIE STATE . C'EST UNE SECURITE 
//         default:
//             return state
//     }
// }
// export default toggleShopping