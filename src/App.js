import React, { useEffect,useState } from 'react';
import './App.css';
import CustomInput from './components/CustomInput';
function App() {
  const [ width, setWidth] = useState(window.innerWidth)
  const [ firstName, setFirstName] = useState('')
  const [ lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [addres, setAddres] = useState('')
  const [noTelp, setNoTelp] = useState('')
  const [alamat, setAlamat] = useState('')
  const [validate, setValidatePassword] = useState('')
  const [warning, setwarning] = useState(false)

  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

    useEffect(() => { 
      if (firstName.length || 0  < 15) setwarning(true);
      else setwarning(false);
     } , [firstName]);
    

     useEffect(() => {
      if (lastName.length || 0  < 15) setwarning(true);
      else setwarning(false);
     } , [lastName]);
    
     return (
       <div className="App">
       <div className="wrapper">
       <CustomInput
       title="Nama depan"
       type="Nama depan"
       value={firstName}
       onchange={(val) => setFirstName(val)}
       />
       <CustomInput
       title="Nama belakang"
       type="Nama depan"
       value={lastName}
       onchange={(val) => setLastName(val)}
       />
       <CustomInput
       title="password"
       type=" password"
       value={password}
       onchange={(val) => setPassword(val)}
       />
       <CustomInput
       title="password"
       type="match"
       matchData={password}
       value={setValidatePassword}
       onchange={(val) => setPassword(val)}
       />

       </div>
       <div>window width: {width}</div>
       <div>{firstName}{lastName}</div>
       </div>
       
            );
     }  
export default App;