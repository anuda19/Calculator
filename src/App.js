import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [res, setRes] = useState('')

  const handleClick = (e) => {
    setRes(res.concat(e.target.value))
  }

  const handleClear = ()=>{
    setRes("")
  }

  const backSpace = ()=>{
    setRes(res.slice(0, -1))
  }

  const calculate = ()=>{
    setRes(eval(res).toString())
  }

  return (
    <div className="App">
      <input type="text" placeholder='0' id='answer' value={res} />
      <input type="button" value="9" className="buttn" onClick={handleClick} />
      <input type="button" value="8" className="buttn" onClick={handleClick} />
      <input type="button" value="7" className="buttn" onClick={handleClick}/>
      <input type="button" value="6" className="buttn" onClick={handleClick}/>
      <input type="button" value="5" className="buttn" onClick={handleClick}/>
      <input type="button" value="4" className="buttn" onClick={handleClick}/>
      <input type="button" value="3" className="buttn" onClick={handleClick}/>
      <input type="button" value="2" className="buttn" onClick={handleClick}/>
      <input type="button" value="1" className="buttn" onClick={handleClick}/>
      <input type="button" value="0" className="buttn" onClick={handleClick}/>
      <input type="button" value="." className="buttn" onClick={handleClick}/>
      <input type="button" value="+" className="buttn" onClick={handleClick}/>
      <input type="button" value="-" className="buttn" onClick={handleClick}/>
      <input type="button" value="*" className="buttn" onClick={handleClick}/>
      <input type="button" value="/" className="buttn" onClick={handleClick}/>
      <input type="button" value="%" className="buttn" onClick={handleClick}/>
      <input type="button" value="Clear" className="buttn buttn1" onClick={handleClear} />
      <input type="button" value="=" className="buttn buttn1" onClick={calculate} />
      <input type="button" value="<" className="buttn buttn1" onClick={backSpace} />
    </div>
  );
}

export default App;
