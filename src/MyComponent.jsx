// props 기본값 설정 : defaultProps
const MyComponent = ({name, age, children}) => {
    // 비구조화 할당(구조 분해) : props 객체의 속성과 값을 변수에 대입함.

    return ( 
    <div>
        안녕하세요. 제 이름은 {name}입니다. 나이는{age}, 인사말{children} 
    </div>
    );    
};
MyComponent.dafaultProps = {
    name: "기본이름",
    age:20
};

export default MyComponent;