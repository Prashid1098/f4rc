import React, {useState} from "react";
import ReactDOM  from "react-dom";
import "./styles.css";

function Display()
{
const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('');

  const handleNum1Change = (event) => {
    setNum1(event.target.value);
  };

  const handleNum2Change = (event) => {
    setNum2(event.target.value);
  };

  const handleOperatorClick = (selectedOperator) => {
    setOperator(selectedOperator);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Pass num1, num2, and operator to the Calculate function or perform any other action
    Calculate(num1, num2, operator);
  };

  return (
    <div className="container">
      <div>React Calculator</div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            name="num1"
            value={num1}
            onChange={handleNum1Change}
          />
          <br />
          <input
            type="number"
            name="num2"
            value={num2}
            onChange={handleNum2Change}
          />
          <br />
          <div className="operators">
            <button onClick={() => handleOperatorClick('+')}>+</button>
            <button onClick={() => handleOperatorClick('-')}>-</button>
            <button onClick={() => handleOperatorClick('*')}>*</button>
            <button onClick={() => handleOperatorClick('/')}>/</button>
          </div>
          <br />
        </form>
      </div>
    </div>
  );
}

const Calculate = (num1, num2, operator) => {
  // Perform your calculations based on the operator here
  let result;
  if(num1.trim()==="" || num2.trim()==="")
  {
    console.log(100);
    result='error';
    // ReactDOM.render(<Output result={result} />, document.getElementById("results"));
  }
  else{
  switch (operator) {
    case '+':
      result = parseInt(num1) + parseInt(num2);
      break;
    case '-':
      result = parseInt(num1) - parseInt(num2);
      break;
    case '*':
      result = parseInt(num1) * parseInt(num2);
      break;
    case '/':
      result = parseInt(num1) / parseInt(num2);
      break;
    default:
      result ='-1';
  }
}
  ReactDOM.render(<Output result={result} />, document.getElementById("results"));
//   Output(result);
  console.log("Result:", result);
};

function Output({result})
{
    // console.log("Here");
    if(result==='error')
    {
        return(
            <div className="err-res">
                <div className="Error">Error!</div>
                <div>Num is missing</div>
            </div>
        )
    }
    else
    {
    return(
        <div className="res">
            <div className="success">Success!</div>
            <div>{result}</div>
        </div>
    )
    }
}

ReactDOM.render(<Display />, document.getElementById("calc"));