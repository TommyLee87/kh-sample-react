import { useState } from "react";

const NameCard = (props) => {
  return (
    <>
      <h1>Name Card</h1>
      <h3>이름 : {props.emp.name}</h3>
      <h3>직책 : {props.emp.job}</h3>
      <h3>회사명 : {props.emp.company}</h3>
      <h3>회사주소 : {props.emp.address}</h3>
      <h3>이메일 : {props.emp.email}</h3>
      <h3>연락처 : {props.emp.phone}</h3>
    </>
  );
};

const UseState = () => {
  const [emp, setEmp] = useState({
    name: "",
    job: "",
    company: "",
    address: "",
    email: "",
    phone: "",
  });

  const [submit, setSubmit] = useState(false);

  const onSubmit = () => {
    setSubmit(true);
  };

  // [1] 따로하는 방식
  const onChangeName = (e) => setEmp(e.target.value); //내용이 입력 될 때 변경 감지
  const onChangeJob = (e) => setEmp(e.target.value);
  const onChangeCompany = (e) => setEmp(e.target.value);
  const onChangeAddress = (e) => setEmp(e.target.value);
  const onChangeEmail = (e) => setEmp(e.target.value);
  const onChangePhone = (e) => setEmp(e.target.value);

  return (
    <>
      <input
        type="text"
        value={emp.name}
        onChange={onChangeName}
        placeholder="이름"
      />
      <br />
      <input
        type="text"
        value={emp.job}
        onChange={onChangeJob}
        placeholder="직책"
      />
      <br />
      <input
        type="text"
        value={emp.company}
        onChange={onChangeCompany}
        placeholder="회사명"
      />
      <br />
      <input
        type="text"
        value={emp.address}
        onChange={onChangeAddress}
        placeholder="회사주소"
      />
      <br />
      <input
        type="text"
        value={emp.email}
        onChange={onChangeEmail}
        placeholder="이메일"
      />
      <br />
      <input
        type="text"
        value={emp.phone}
        onChange={onChangePhone}
        placeholder="연락처"
      />
      <br />
      <button onClick={onSubmit}>제출</button>
      {submit && <NameCard emp={emp} />}
    </>
  );
};

export default UseState;

// [2] 한번에 하는 방식

// const NameCardPrn = (props) => {
//   return (
//     <>
//       <h3>명함 정보 출력</h3>
//       <p>이름 : {props.nameCard.name}</p>
//       <p>직책 : {props.nameCard.position}</p>
//       <p>회사 : {props.nameCard.company}</p>
//       <p>주소 : {props.nameCard.addr}</p>
//       <p>메일 : {props.nameCard.email}</p>
//       <p>전화 : {props.nameCard.phone}</p>
//     </>
//   );
// };

// const NameCard = () => {
//   const [nameCard, setNameCard] = useState({
//     name: "",
//     position: "",
//     company: "",
//     addr: "",
//     email: "",
//   });
//   const [submit, setSubmit] = useState(false);
//   const onChange = (key, value) => {
//     // 계산된 속성명은 ES6에서 추가되었으며 []안에 표현식을 넣으면 됩니다.
//     setNameCard({ ...nameCard, [key]: value });
//   };
//   const onSubmit = () => {
//     setSubmit(true);
//   };

//   return (
//     <>
//       <h1>회원 정보 가입</h1>
//       <input
//         type="text"
//         placeholder="이름 입력"
//         value={nameCard.name}
//         onChange={(e) => onChange("name", e.target.value)}
//       />
//       <br />
//       <input
//         type="text"
//         placeholder="직책 입력"
//         value={nameCard.position}
//         onChange={(e) => onChange("position", e.target.value)}
//       />
//       <br />
//       <input
//         type="text"
//         placeholder="회사 입력"
//         value={nameCard.company}
//         onChange={(e) => onChange("company", e.target.value)}
//       />
//       <br />
//       <input
//         type="text"
//         placeholder="주소 입력"
//         value={nameCard.addr}
//         onChange={(e) => onChange("addr", e.target.value)}
//       />
//       <br />
//       <input
//         type="email"
//         placeholder="메일 입력"
//         value={nameCard.email}
//         onChange={(e) => onChange("email", e.target.value)}
//       />
//       <br />
//       <input
//         type="tel"
//         placeholder="폰 입력"
//         value={nameCard.phone}
//         onChange={(e) => onChange("phone", e.target.value)}
//       />
//       <br />
//       <button onClick={onSubmit}>제출</button>
//       {submit && <NameCardPrn nameCard={nameCard} />}
//     </>
//   );
// };
// export default NameCard;
