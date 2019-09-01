import React from 'react'
import io from 'socket.io-client'

class App extends React.Component {
  componentWillMount() {
    this.socket = io('http://localhost:3000')
    this.socket.on('connect', this.connect)
  }

  connect() {
    alert("Connected: " + this.socket.id)
  }

  render() {
    return (
      <div className="App">
        run
      </div>
    );
  }




}

export default App;
