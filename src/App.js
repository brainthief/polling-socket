import React from 'react'
import io from 'socket.io-client'
import { connect } from 'react-redux'
import { updateConnectionStatusAC, updateTitleAC } from './redux/mainReducer'
import Header from './components/Header/Header'

const App = (props) => {
  const { updateConnectionStatus, updateTitle } = props
  const socket = io('http://localhost:3000')
  socket.on('connect', () => { updateConnectionStatus(true) })
  socket.on('disconnect', () => { updateConnectionStatus(false) })
  socket.on('welcome', (rez) => { updateTitle(rez.title) });



  return (

    <div className="App">
      <div class="container mt-2">
        <div className="row">
          <div className="col-12">

            <div className="card">
              <div class="card-header">
                <Header />
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Vestibulum at eros</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div >
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
