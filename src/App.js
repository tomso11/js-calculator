import {useState} from "react";
import './App.css';


function App() {
  const [display, setDisplay] = useState('0');

  const handleNumber = (event) => {
    const number = event.target.textContent;
    if (display === '0'){
      setDisplay(number);
    } else {
      setDisplay(display + number);
    }
    
  }

  const handleOperator = (event) => {
    const operator = event.target.textContent;
    setDisplay(display + ' ' + operator + ' ');
  }

  const handleEqual = () => {
    const output = eval(display);
    setDisplay(output);
  }

  const handleClear = () => {
    setDisplay('0');
  }

  const handleDecimal = () => {
    const currentDisplay = display.split(' ');
    const last = currentDisplay[currentDisplay.length-1];

    if (!last.includes('.')){
      if( !last.includes(' ') && typeof(parseInt(last)) === 'number' ){
        setDisplay(display + '.');
      }
    }
  }

  return (
    <div className="App">
      <div className="calculator">
        <div id="display" className="row">
          {display}
        </div>
        <div onClick={handleClear} id="clear" className="row">
          AC
        </div>
        <div id="seven" onClick={handleNumber}>7</div>
        <div id="eight" onClick={handleNumber}>8</div>
        <div onClick={handleNumber} id="nine">9</div>
        <div onClick={handleOperator}id="multiply">*</div>
        <div onClick={handleNumber} id="four">4</div>
        <div onClick={handleNumber} id="five">5</div>
        <div onClick={handleNumber} id="six">6</div>
        <div onClick={handleOperator}id="divide">/</div>
        <div onClick={handleNumber} id="one">1</div>
        <div onClick={handleNumber} id="two">2</div>
        <div onClick={handleNumber} id="three">3</div>
        <div onClick={handleOperator}id="add">+</div>
        <div onClick={handleNumber} id="zero">0</div>
        <div onClick={handleDecimal}id="decimal">.</div>
        <div onClick={handleEqual} id="equals">=</div>
        <div onClick={handleOperator}id="subtract">-</div>
      </div>
    </div>
  );
}

export default App;
