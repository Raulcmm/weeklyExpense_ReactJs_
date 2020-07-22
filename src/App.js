import React from 'react'
import BudgetForm from './components/BudgetForm'

const App = () => {
  return (
    <div className="container mt-5 text-center">
      <h1>Weekly expense</h1>

      <div className="row">
        <div className="col">
          <BudgetForm/>
        </div>
      </div>
    </div>
  )
}

export default App
