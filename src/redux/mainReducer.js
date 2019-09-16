const UPDATE_CONNECTION_STATUS = 'SOCKET_IO/MAIN_PAGE/UPDATE_CONNECTION_STATUS'
const UPDATE_TITLE = 'SOCKET_IO/MAIN_PAGE/UPDATE_TITLE'
const UPDATE_JOIN_NAME = 'SOCKET_IO/MAIN_PAGE/UPDATE_JOIN_NAME'
const UPDATE_MEMBER = 'SOCKET_IO/MAIN_PAGE/UPDATE_MEMBER'
const UPDATE_AUDIENCE = 'SOCKET_IO/MAIN_PAGE/UPDATE_AUDIENCE'

const initialState = {
  status: false,
  title: '',
  name: '',
  member: {},
  audience: [],
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

export const updateMemberAC = (member) => {
  return {
    type: UPDATE_MEMBER,
    member
  }
}

export const updateAudienceAC = (audience) => {
  return {
    type: UPDATE_AUDIENCE,
    audience
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
    case UPDATE_MEMBER:
      return { ...state, member: action.member }
    case UPDATE_AUDIENCE:
      return { ...state, audience: [...action.audience] }
    default:
      return state
  }
}

export default mainReducer