import React,{useState, useContext} from 'react';
import { AppContext } from "../../Context/provider";
import DoneIcon from '@material-ui/icons/Done';
import './page.css';

import { 
  Button , 
  TextareaAutosize 
} from '@material-ui/core';


function Page2({next}) {
  const { state, setAns } = useContext(AppContext);

  const [input, setInput] = useState('');
  const [toggleNext, setToggleNext] = useState(false);

  const handleTextArea = (e) => setInput(e.target.value);
  const handleNext = () => {
    if(input.length > 0){
      setAns(1,input);
      next();
    }
    else alert("ענה על השאלה");
  }
  const aproveAns = () => {
    if(input.length > 0)
      setToggleNext(true);
    else alert("ענה על השאלה");
  }
  return (
    <div className='page-container'>
      <h4>המרוויחים הגדולים בתקופת הקורונה</h4>
      <img className='img-page' src={require('../../img/vaknin.jpg')} alt='דקל ועקנין' />
      {state.qustions[1].que}
      { (!toggleNext) ?
      <>
      <TextareaAutosize 
        rows={10} 
        placeholder='ענה על השאלה' 
        style={{width:'70%',height:100,padding:5,fontSize:'1.5rem'}} 
        onChange={handleTextArea}
      /> 
      <DoneIcon className='doneIcon' style={{width:50,height:50}} onClick={aproveAns}/>
      </>:
      <div className='flexDiv'>  
        <h3>כן, דקל וקנין הוא ארגון</h3>
        <Button variant='contained' onClick={handleNext}>הבא</Button>
      </div>
    }
    </div>
  )
  }

  export default Page2;