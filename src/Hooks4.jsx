// useMemo : 컴포넌트 성능을 최적화 하기 위해 사용. 이전 계산값을 재사용함.
import { useState, useMemo, useCallback, useRef } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중" + numbers);
  if (numbers.length === 0) return 0;
  // 두개의 입력 값을 받아 하나의 결과값으로 만들고 다음의 요소 연산
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  // 컴포넌트 이름은 대문자
  const [list, setList] = useState([]);
  const [number, setNumber] = useState(0);
  const inputEl = useRef(null);

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []); // 빈 배열을 넣으면 처음 렌더링될 때만 함수 호출

  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber(0);
    inputEl.current.focus();
  }, [number, list]);

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값 : </b> {avg}
      </div>
    </div>
  );
};
export default Average;
