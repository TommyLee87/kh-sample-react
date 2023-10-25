// useState를 사용해 시간 업데이트 하기
import {useEffect, useState} from 'react';


// 컴포넌트 : 화면의 동작과 화면을 그려주는 요소가 모두 포함, 반환은 구성된 화면이 반환 됨
const Clock = () => {
    //date는 실제 화면에 나타나는 값, setDate는 값을 변경시켜주는 함수, 값이 변경되면 자동 렌더링
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const tick = () => {//화살표 함수로 만들어진 익명의 함수
            setDate(new Date());
        }    

        const intervalID = setInterval(tick, 1000);

        // 컴포넌트가 언마운트될 때 실행되는 클린업 함수입니다.
        return () => {
            clearInterval(intervalID);
        }
    }, []);  // 빈 의존성 배열을 전달하여 훅이 컴포넌트 마운트 시에만 한 번 실행되도록 합니다.

    return (
        <div>
            <h1>현재 시간을 표시 합니다.</h1>
            <h2>현재 시간은 {date.toLocaleTimeString()}</h2>
        </div>
    )
}

export default Clock;