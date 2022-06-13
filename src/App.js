import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw, reset } from "./store/balance/slice";
import { selectBalance } from "./store/balance/selectors";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const balance = useSelector(selectBalance);
  const [customAmount, setCustomAmount] = useState(null);

  return (
    <div className="App">
      <p>Balance: {balance}$</p>
      <button onClick={() => dispatch(deposit(10))}>Deposit 10$</button>
      <button onClick={() => dispatch(withdraw(10))}>Withdraw 10$</button>
      <button onClick={() => dispatch(reset())}>Reset Balance</button>
      <br />
      <br />
      <div>
        <input
          type="number"
          value={customAmount}
          onChange={(event) => setCustomAmount(parseInt(event.target.value))}
        />
        <button onClick={() => dispatch(deposit(customAmount))}>
          Deposit custom amount
        </button>
      </div>
    </div>
  );
}

export default App;
