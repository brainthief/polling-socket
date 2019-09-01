import React from 'react'
import io from 'socket.io-client'

function App() {
  const socket = io('http://localhost:3000')
  const connect = () => {
    alert("Connected: " + socket.id)
  }

  socket.on('connect', connect)



  return (
    <div className="App">
      run
    </div>
  );
}

export default App;
