import React from 'react'
import io from 'socket.io-client'
import { connect } from 'react-redux'
import { updateConnectionStatusAC } from './redux/mainReducer'
import Header from './components/Header/Header'

const App = (props) => {
  const { updateConnectionStatus } = props
  const socket = io('http://localhost:3000')
  socket.on('connect', () => { updateConnectionStatus(true) })
  socket.on('disconnect', () => { updateConnectionStatus(false) })



  return (
    <div className="App">
      <Header />
    </div>
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
    // updateMessage: (e) => { dispatch(updateMessageActionCreator(e.target.value)) }
  }
}

export default connect(null, mapDispatchToProps)(App)
