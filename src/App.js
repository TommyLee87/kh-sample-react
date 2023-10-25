import { Fragment } from "react";
import "./App.css";
import Section from "./Section";
import Say from "./Say";
import Clock from "./Clock";
import EventPractice from "./onChange";
import EventHandler from "./EventHandler";
import FruitSelect from "./FruitSelect";
import RadioButton from "./RadioButton";
import Table from "./Table";
import TableMap1 from "./TableMap1";
import CreateRef from "./UseRef";

function App() {
  return (
    <>
      {/* <Section title="스포츠" content="This is the content for section 1."/>
      <Section title="정치" content="This is the content for section 2."/> */}
      {/* <Say name="곰돌이사육사" age={30}>
        안녕하세요.
    </Say> */}
      {/* <MyComponent></MyComponent> */}
      {/* <Clock/> */}
      {/* <EventPractice/>*/}
      {/* <EventHandler/>*/}
      {/* <FruitSelect/>*/}
      {/* <RadioButton/> */}
      {/* <Table /> */}
      {/* <TableMap1 /> */}
      <CreateRef />
    </>
  );
}

export default App;
