import './App.css';
import RegisterUser from './Components/Registration/RegisterUser';
import { useEffect } from 'react';
function App() {
  const msg = new SpeechSynthesisUtterance()
  msg.text = "Hello, Welcome to Udyog Saarthi App!"



  // useEffect(() => {
  //   window.speechSynthesis.speak(msg)
  // }, [msg])

  return (
    <div>
      {window.speechSynthesis.speak(msg)}
      <RegisterUser />
    </div>
  );
}

export default App;
