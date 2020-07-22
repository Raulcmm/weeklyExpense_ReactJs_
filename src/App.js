import React from 'react'
import SpendingForm from './components/SpendingForm'

const App = () => {
  return (
    <div className="container mt-5 text-center">
      <h1>Weekly expense</h1>

      <div className="row">
        <div className="col">
          <SpendingForm/>
        </div>
      </div>
    </div>
  )
}

export default App
