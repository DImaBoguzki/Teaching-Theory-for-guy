import React,{useState, useContext} from 'react';
import { AppContext } from "../../Context/provider";
import './page.css';

import { 
  Button , 
  TextareaAutosize 
} from '@material-ui/core';


function Page1({next}) {
  const { state, setAns } = useContext(AppContext);

  const [input, setInput] = useState('');
  const handleTextArea = (e) => setInput(e.target.value);
  const handleNext = () => {
    if(input.length > 0){
      setAns(0,input);
      next();
    }
    else alert("ענה על השאלה")
  }
  return (
    <div className='page-container'>
      {state.qustions[0].que}
      <TextareaAutosize 
        rows={10} 
        placeholder='ענה על השאלה' 
        style={{width:'100%',padding:5,fontSize:'1.5rem'}} 
        onChange={handleTextArea}
      />
      <div className='action-page'>  
        <Button variant='contained' onClick={handleNext}>הבא</Button>
      </div>
    </div>
  )
  }

  export default Page1;