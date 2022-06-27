import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";


function App() 
{
  const [name , setName] = useState('');
  const [age , setAge] = useState('');
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [phno , setPhno] = useState('');


  const handleChange =(e)=>{
    setName(e.target.value);
  }


  const handleEmailChange =(e)=>{
    setEmail(e.target.value);
  } 
  const handlePasswordChange =(e)=>{
    setPassword(e.target.value);
  } 
  const handleConfPasswordChange =(e)=>{
    setPhno(e.target.value);
  }
  const handleSubmit=(e)=>{
 
      alert('A form was submitted with Name :"' + name +
      '" ,Age :"'+age +'" and Email :"' + email + '"');
      
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name,

      email:email,
      phno:phno,
      password:password


      
      })
    };
    const response = fetch('/sign_up', requestOptions);
    const data =  response.json();
    this.setState({ postId: data.id });
    
    e.preventDefault();

  }
return (
  <div className="App">
  <header className="App-header">
  <form onSubmit={(e) => {handleSubmit(e)}}>
  <h3> Sign-up Form </h3>
      <label >
        Name:
      </label><br/>
      <input type="text" value={name} required onChange={function (e) { handleChange(e); }} /><br/>
      
      <br/>
      <label>
        Email:
      </label><br/>
      <input type="email" value={email} required onChange={function (e) { handleEmailChange(e); }} /><br/>
      <label>
        Password:
      </label><br/>
      <input type="password" value={password} required onChange={function (e) { handlePasswordChange(e); }} /><br/>
      <label>
      phno:
      </label><br/>
      <input type="password" value={phno} required onChange={function (e) { handleConfPasswordChange(e); }} /><br/>
      <input type="submit" value="Submit"/>
    </form>
  </header>
  </div>
);
}

export default App;
