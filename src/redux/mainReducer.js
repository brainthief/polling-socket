export const UPDATE_CONNECTION_STATUS = 'SOCNET_IO/MAIN_PAGE/UPDATE_CONNECTION_STATUS'
// export const UPDATE_MESSAGE = 'SC/DIALOG_PAGE/UPDATE_MESSAGE'

const initialState = {
 status: false,
}

export const updateConnectionStatusAC = value => {
 return {
  type: UPDATE_CONNECTION_STATUS,
  value
 }
}

// export const updateMessageActionCreator = (value) => {
//   return {
//     type: UPDATE_MESSAGE,
//     value
//   }
// }

const mainReducer = (state = initialState, action) => {
 switch (action.type) {
  case UPDATE_CONNECTION_STATUS:
   return { ...state, status: action.value }
  // case UPDATE_MESSAGE:
  //  newState = { ...state }
  //  newState.newMessage = action.value
  //  return newState
  default:
   return state
 }
}

export default mainReducer