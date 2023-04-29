import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseCounter, increaseCounter, setCounter } from './store/counterReducer';
import { changeAge, changeName } from './store/userReducer';

function App() {
  const counter = useSelector(state => state.counter) ;
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  const increase = () =>{
    dispatch(increaseCounter());
  }

  const decrease = () =>{
    dispatch(decreaseCounter());
  }

  const setCount = (e) => {
    dispatch(setCounter(e.currentTarget.
      value));
  }

  const onChangeName = (e) =>{
    dispatch(changeName(e.currentTarget.
      value));
  }
  const onChangeAge = (e) =>{
    dispatch(changeAge(e.currentTarget.
      value));
  }
  console.log('we got here')
  return (
    <>
    <h1>Hello, {user.name}!</h1>
    <h3>You are {user.age} years old</h3>
    <form action="">
      <label htmlFor="">Your Name:
        <input type="text" onChange={onChangeName}/>    
      </label>
      <label htmlFor="">Your Age:
        <input type="text" onChange={onChangeAge}/>    
      </label>
    </form>

    <h3>Counter: {counter.count}</h3>
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>Decrease</button>
    <input type="number" onChange={setCount}/>
    </>
  )
}

export default App;
