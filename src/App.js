import React from 'react'
import io from 'socket.io-client'

function App() {
  const socket = io('http://localhost:3000')
  let status = 'disconnected'
  const connect = () => {
    // alert("Connected: " + socket.id)
    status = 'connected'
  }

  const disconnect = () => {
    // alert("Disconected: " + socket.id)
    status = 'disconnected'
  }



  socket.on('connect', connect)
  socket.on('disconnect', disconnect)



  return (
    <div className="App">
      {status}
    </div>
  );
}

export default App;
