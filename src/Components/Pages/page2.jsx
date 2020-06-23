import React,{useState, useContext} from 'react';
import { AppContext } from "../../Context/provider";
import './page.css';

import { 
  Button , 
  TextareaAutosize 
} from '@material-ui/core';


function Page2({next}) {
  const { state, setAns } = useContext(AppContext);

  const [input, setInput] = useState('');
  const handleTextArea = (e) => setInput(e.target.value);
  const handleNext = () => {
    if(input.length > 0){
      setAns(1,input);
      next();
    }
    else alert("ענה על השאלה");
  }
  return (
    <div className='page-container'>
      <h4>המרוויחים הגדולים בתקופת הקורונה</h4>
      <img className='img-page' src={require('../../img/vaknin.jpg')} alt='דקל ועקנין' />
      {state.qustions[1].que}
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

  export default Page2;