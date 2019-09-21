import React from 'react'
import io from 'socket.io-client'
import { connect } from 'react-redux'
import { updateConnectionStatusAC, updateTitleAC, updateMemberAC, updateAudienceAC } from './redux/mainReducer'
import Routes from './routes'
import Header from './components/Header/Header'



const App = (props) => {
  const { updateConnectionStatus, updateTitle, updateMember, updateAudience } = props
  // const { name } = props.mainPage

  const socket = io('http://localhost:3000')
  socket.on('connect', () => { updateConnectionStatus(true) })
  socket.on('disconnect', () => { updateConnectionStatus(false) })
  socket.on('welcome', (rez) => { updateTitle(rez.title) })
  socket.on('joined', (rez) => { updateMember(rez) })
  socket.on('audience', (rez) => { updateAudience(rez) })


  const emit = (eventName, playload) => {
    socket.emit(eventName, playload)
  }

  const member = sessionStorage.member ? JSON.parse(sessionStorage.member) : null
  if (member) {
    emit('join', member)
  }

  return (
    <div className="App">
      <div className="container mt-2">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <Header />
              </div>
              <Routes emit={emit} />
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
    updateTitle: (rez) => { dispatch(updateTitleAC(rez)) },
    updateMember: (rez) => { dispatch(updateMemberAC(rez)) },
    updateAudience: (rez) => { dispatch(updateAudienceAC(rez)) },
  }
}

export default connect(null, mapDispatchToProps)(App)
