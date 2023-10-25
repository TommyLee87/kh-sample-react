import { useState }  from "react";

const EventHandler = () => {
    const [userName, setUserName] = useState("");
    const [message, setmessage] = useState("");
    const onChangeUserName = e =>setUserName(e.target.value);
    const onChangemessage = e =>setmessage(e.target.value);
    const onClick = () => {
        alert(userName + " : " + message);
        setUserName("");
        setmessage("");
    };
    const onKeyPress = e => {
        if(e.key === "Enter") onClick();
    }
    return(
        <>
            <h1>이벤트 연습</h1>
            <input type="text" placeholder="사용자명" value={userName} onChange={onChangeUserName} />
            <input type="text" placeholder="아무 메세지" value={message} onChange={onChangemessage} onKeyDown={onKeyPress}/>
            <button onClick={onClick}>확인</button>

        </>
    );
};

export default EventHandler;