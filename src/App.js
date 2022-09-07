import './styles.css';
import DigitButton from './DigitButton';


export const ACTIONS = {
  ADD_DIGIT: 'add_digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  EVALUATE: 'evaluate'
}

function userReducer() {
}

function reducer(state, {type, payload}){
  switch(type) {
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
        currentOperand:`${currentOperand || ""}${payload.digit}`,
      }
    default: {}

  }
}

function App() {
  const [{currentOperand, previousOperand, operation}, dispatch] = userReducer(reducer, {})

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {previousOperand} {operation}
        </div>
        <div className="current-operand">
          {currentOperand}
        </div>
      </div>
      <button className="span-two">AC</button>
      <button>DEL</button>
      <DigitButton digit="/" dispatch={dispatch} />
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>x</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button className="span-two">=</button>

    </div>
  )
}

export default App;
