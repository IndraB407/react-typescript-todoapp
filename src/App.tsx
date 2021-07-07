import React from 'react'
import { ToDoListApp } from './components/ToDoListApp'

function App() {
  return (
    <React.Fragment>
      <div style={{
        position: 'absolute', left: '50%', top: '25%',
        transform: 'translate(-50%, -50%)', backgroundColor: 'rgba(44, 114, 251, 0.5)', padding: '10px'
      }}>
        <h1 style={{ textAlign: 'center', backgroundColor: 'rgba(44, 114, 251, 1)' }}>TO DO LIST APP</h1>
        <ToDoListApp />
      </div>
    </React.Fragment>
  )
}

export default App