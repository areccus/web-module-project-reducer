import React, {useReducer} from 'react';
import reducer, {initialState} from '../reducers/index'
import {applyNumber, changeOperator, clear, mem} from '../actions/index'
import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

    const handleNum = (number) => {
      console.log('clicked')
      dispatch(applyNumber(number))
    }

    const handleOperator = (operator) => {
      dispatch(changeOperator(operator))
    }

    const handleClear = () => {
      dispatch(clear())
    }

    const handleMem = () => {
      dispatch(mem())
    }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={handleMem}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              {/* Couldn't figure the infinite loop out appreciate the solution vid. */}
              <CalcButton value={1} onClick={()=> handleNum(1)}/>
              <CalcButton value={2} onClick={()=> handleNum(2)}/>
              <CalcButton value={3} onClick={()=> handleNum(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={()=> handleNum(4)}/>
              <CalcButton value={5} onClick={()=> handleNum(5)}/>
              <CalcButton value={6} onClick={()=> handleNum(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={()=> handleNum(7)}/>
              <CalcButton value={8} onClick={()=> handleNum(8)}/>
              <CalcButton value={9} onClick={()=> handleNum(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={()=>handleOperator('+')}/>
              <CalcButton value={"*"} onClick={()=>handleOperator('*')}/>
              <CalcButton value={"-"} onClick={()=>handleOperator('-')}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={()=>handleClear()}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
