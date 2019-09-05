import React from 'react'
import io from 'socket.io-client'

class App extends React.Component {

  state = {
    status: 'disconnected'
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

  render() {
    return (
      <div className="App">
        {this.state.title} - {this.state.status}
      </div>
    );
  }




}

export default App;
