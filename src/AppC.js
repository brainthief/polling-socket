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
  }

  connect() {
    // alert("Connected: " + this.socket.id)
    this.setState({ status: 'connected' })
  }

  disconnect() {
    // alert("Connected: " + this.socket.id)
    this.setState({ status: 'disconnected' })
  }

  render() {
    return (
      <div className="App">
        {this.state.status}
      </div>
    );
  }




}

export default App;
