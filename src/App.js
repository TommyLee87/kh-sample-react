import { Fragment } from 'react';
import './App.css'
import Section from './Section';
import Say from './Say';
import Clock from './Clock';

function App() {
  return (
    <>
      {/* <Section title="스포츠" content="This is the content for section 1."/>
      <Section title="정치" content="This is the content for section 2."/> */}
      {/* <Say name="곰돌이사육사" age={30}>
    </Say> */}
    <Clock/>
    </>
  );
}

export default App;
