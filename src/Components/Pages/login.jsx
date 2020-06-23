import React, {useContext, useState} from 'react';
import { AppContext } from "../../Context/provider";
import './page.css';
import { TextField, Button} from '@material-ui/core';

const isValidInput = (inp) => {
  let inputPattern = /^[a-zA-Z0-9._א-ת]/;
  return inputPattern.test(inp); 
}
function isValidEmail(emal){
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(emal); 
}


function LogIn({next}) {
  const { setStudent } = useContext(AppContext);
  const [name, setName] = useState({val:'',invalid:false});
  const [email, setEmail] = useState({val:'',invalid:false});
  const handleStart = () => {
    if(isValidInputs()){
      setStudent({name:name.val,email:email.val});
      next();
    }
  }

  const isValidInputs = () => {
    let flag=true;
    if(isValidInput(name.val) && name.val.length!==0){
      setName({...name,invalid:false});
    }
    else {
      setName({...name,invalid:true});
      flag=false;
    }
    if(isValidEmail(email.val) && email.val.length!==0){
      setEmail({...name,invalid:false});
    }
    else {
      setEmail({...name,invalid:true});
      flag=false;
    }
    
    return flag;
  }
  return (
      <div className='page-container'>
        <TextField error={name.invalid} onChange={(e)=>setName({...name,val:e.target.value})} variant='filled' label={"שם מלא"} style={{backgroundColor:'#fff',marginBottom:10}}/>
        <TextField error={email.invalid} onChange={(e)=>setEmail({...email,val:e.target.value})}  variant='filled' label={"אי-מייל"} style={{backgroundColor:'#fff',marginBottom:10}}/>
        <Button variant='contained' onClick={handleStart}>התחל</Button>
      </div>
    )
  }

  export default LogIn;