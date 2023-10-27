import { useReducer } from "react";
// useState와 마찬가지로 상태 관리를 위해 사용. 복잡한 로지을 가진 상태를 관리하는데 유용함.
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECRERENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
};

const Counter2 = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <>
      <p>현재 카운트 값은 {state.value}입니다.</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>증가</button>
      <button onClick={() => dispatch({ type: "DECRERENT" })}>감소</button>
    </>
  );
};

export default Counter2;
