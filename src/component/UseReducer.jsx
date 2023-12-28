import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "TOGGLE_HIDDEN":
      return { ...state, hidden: !state.hidden };
    default:
      return state;
  }
};
const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0,hidden:false });
  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >+</button>
      <h1>Counter: {state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >-</button>
      <div>
      {state.hidden ? <p>hidden</p>:<p>not hoidden</p>}
        <button onClick={()=>{
          dispatch({type:"TOGGLE_HIDDEN"})
        }}>hide toggle</button>
      </div>
    </div>
  );
};

export default UseReducer;
