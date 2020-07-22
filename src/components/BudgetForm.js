import React from 'react'

const BudgetForm = () => {
    return (
        <div className="card mt-5">
            <div className="card-body">
                <form >
                    <div className="form-group">
                        <h2>Your budget </h2>
                        <input type="number" className="form-control" name="spending"/>
                        <button className="btn btn-primary btn-block mt-4">Define a budget</button>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default BudgetForm;
