import React, { useState, useEffect } from 'react'
import './RegisterUser.css'
import { TextField } from '@mui/material';
import alanBtn from '@alan-ai/alan-sdk-web';


const RegisterUser = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(0);
  const [city, setCity] = useState("");

  
  
  // const nm = new SpeechSynthesisUtterance()
  // nm.text = "Please enter your name"

  const ALAN_key = 'd69d6dd11516e8d2ef0e23b7bc144d2e2e956eca572e1d8b807a3e2338fdd0dc/stage';
  useEffect(() => {
    alanBtn({
        key: ALAN_key,
        onCommand: (commandData) => {
          if(commandData.command === 'name'){
            window.speechSynthesis.cancel()
            setName(commandData.data)
          }
          if(commandData.command === 'phone'){
            setPhone(commandData.data)
          }
          if(commandData.command === 'city'){
            setCity(commandData.data)
          }
          console.log(commandData);
        }
    });
  }, []);

  return (
    <div>
        <div className="sign_up_container">
        
      <h4 className='sign_up_welcome'>Welcome to Udyog Sarthi</h4>

   
      {/* {window.speechSynthesis.speak(nm)} */}
      
      {/* {window.speechSynthesis.pause()} */}
      < TextField id="outlined-basic" label="Name" variant="outlined" type='text' name='name' onChange={(event) => setName(event.target.value)} value={name} className='sign_up_user_Input' color='success' />
      
      
      <TextField id="outlined-basic" label="Phone Number" variant="outlined" type='number' name='phone' onChange={(event) => setPhone(event.target.value)} value={phone} className='sign_up_user_Input' color='success' />

        <TextField id="outlined-basic" label="City" variant="outlined" type='text' name = 'city' onChange={(event) => setCity(event.target.value)} value={city} className='sign_up_user_Input' color='success' />

        <button className="sign_up_btn1">
          <strong>Register</strong>
        </button>
        
        
        
        
    </div>
    </div>
  )
}

export default RegisterUser