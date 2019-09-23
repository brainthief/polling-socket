import React from 'react'
import io from 'socket.io-client'

import Header from './componentsC/HeaderC/HeaderC'
import RoutesC from './routesC'

class App extends React.Component {

  state = {
    status: 'disconnected',
    title: '',
    name: '',
    audience: [],
    member: {},
    speaker: {}
  }

  componentWillMount() {
    this.socket = io('http://localhost:3000')
    this.socket.on('connect', this.connect.bind(this))
    this.socket.on('disconnect', this.disconnect.bind(this))
    this.socket.on('welcome', this.welcome.bind(this))
    this.socket.on('joined', this.joined.bind(this))
    this.socket.on('audience', this.audience.bind(this))
    this.socket.on('start', this.welcome.bind(this))
  }

  connect() {
    // alert("Connected: " + this.socket.id)
    const member = sessionStorage.member ? JSON.parse(sessionStorage.member) : null
    if (member) {
      this.emit('join', member)
    }
    this.setState({ status: 'connected' })
  }

  disconnect() {
    // alert("Connected: " + this.socket.id)
    this.setState({ status: 'disconnected' })
  }

  welcome(serverState) {
    this.setState({ title: serverState.title, speaker: { name: serverState.speaker } })
  }

  emit(eventName, playload) {
    this.socket.emit(eventName, playload)
  }

  joined(playload) {
    sessionStorage.member = JSON.stringify(playload)
    this.setState({ member: playload })
  }

  audience(audience) {
    this.setState({ audience })
  }


  render() {
    return (
      <div className="App">
        <div className="container mt-2">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <Header status={this.state.status} title={this.state.title} speaker={this.state.speaker} />
                </div>
                <RoutesC {...this.state} emit={this.emit.bind(this)} />
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default App;
