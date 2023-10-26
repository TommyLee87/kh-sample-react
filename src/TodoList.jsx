import { useState } from "react";
const TodoList = () => {
  const [todo, setTodo] = useState([
    { id: 1, text: "html 연습" },
    { id: 2, text: "css 복습" },
    { id: 3, text: "자바스크립트" },
    { id: 4, text: "리액트 공부" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);
  const onChange = (e) => setInputText(e.target.value); // 내용이 입력 될 때 변경 감지
  // 버튼이 눌러졌을 때 새로운 todo list 추가
  const onClick = () => {
    const nextTodo = todo.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setTodo(nextTodo); // 새로운 todo list를 반영하고 리렌더링
    setInputText(""); // 입력창을 초기화
  };

  const onRemove = (id) => {
    const removedTodo = todo.filter((e) => e.id !== id);
    setTodo(removedTodo);
  };

  //   const newTodoList = todo.map((e) => <li key={e.id}>{e.text}</li>);

  const newTodoList = todo.map((e) => (
    <li key={e.id} onDoubleClick={() => onRemove(e.id)}>
      {e.text}
    </li>
  ));

  return (
    <>
      <p className="title-name">할 일 목록</p>
      <p className="del-guide">삭제는 해당 항목을 더블 클릭하세요.</p>
      <input type="text" value={inputText} onChage={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{newTodoList}</ul>
    </>
  );
};

export default TodoList;
