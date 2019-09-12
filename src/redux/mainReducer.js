const UPDATE_CONNECTION_STATUS = 'SOCKET_IO/MAIN_PAGE/UPDATE_CONNECTION_STATUS'
const UPDATE_TITLE = 'SOCKET_IO/MAIN_PAGE/UPDATE_TITLE'
const UPDATE_JOIN_NAME = 'SOCKET_IO/MAIN_PAGE/UPDATE_JOIN_NAME'

const initialState = {
  status: false,
  title: '',
  name: '',
}

export const updateConnectionStatusAC = value => {
  return {
    type: UPDATE_CONNECTION_STATUS,
    value
  }
}

export const updateTitleAC = value => {
  return {
    type: UPDATE_TITLE,
    value
  }
}

export const updateJoinNameAC = (name) => {
  return {
    type: UPDATE_JOIN_NAME,
    name
  }
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CONNECTION_STATUS:
      return { ...state, status: action.value }
    case UPDATE_TITLE:
      return { ...state, title: action.value }
    case UPDATE_JOIN_NAME:
      return { ...state, name: action.name }
    default:
      return state
  }
}

export default mainReducer