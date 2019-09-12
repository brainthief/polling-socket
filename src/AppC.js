import React from 'react'
import io from 'socket.io-client'

import Header from './componentsC/Header/Header'
import RoutesC from './routesC'

class App extends React.Component {

  state = {
    status: 'disconnected',
    title: ''
  }

  componentWillMount() {
    this.socket = io('http://localhost:3000')
    this.socket.on('connect', this.connect.bind(this))
    this.socket.on('disconnect', this.disconnect.bind(this))
    this.socket.on('disconnect', this.disconnect.bind(this))
    this.socket.on('welcome', this.welcome.bind(this));
  }

  connect() {
    // alert("Connected: " + this.socket.id)
    this.setState({ status: 'connected' })
  }

  disconnect() {
    // alert("Connected: " + this.socket.id)
    this.setState({ status: 'disconnected' })
  }

  welcome(serverState) {
    this.setState({ title: serverState.title })
  }

  emit(eventName, playload) {
    this.socket.emit(eventName, playload)
  }


  render() {
    return (
      <div className="App">
        <div className="container mt-2">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <Header status={this.state.status} title={this.state.title} />
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
