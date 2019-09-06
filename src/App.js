import React from 'react'
import io from 'socket.io-client'
import { connect } from 'react-redux'
import { updateConnectionStatusAC, updateTitleAC } from './redux/mainReducer'
import Routes from './routes'



const App = (props) => {
  const { updateConnectionStatus, updateTitle } = props
  const socket = io('http://localhost:3000')
  socket.on('connect', () => { updateConnectionStatus(true) })
  socket.on('disconnect', () => { updateConnectionStatus(false) })
  socket.on('welcome', (rez) => { updateTitle(rez.title) });



  return (
    <Routes />
  );
}


// const mapStateToProps = (state) => {
//   return {
//     mainPage: state.mainPage
//   }
// }
const mapDispatchToProps = (dispatch) => {
  return {
    updateConnectionStatus: (value) => { dispatch(updateConnectionStatusAC(value)) },
    updateTitle: (rez) => { dispatch(updateTitleAC(rez)) }
  }
}

export default connect(null, mapDispatchToProps)(App)
