import React,{useState, useContext} from 'react';
import { AppContext } from "../../Context/provider";
import './page.css';
import { 
  Button , 
  TextField ,
} from '@material-ui/core';


function Page7({next}) {
  const { state, setAns } = useContext(AppContext);
  const [input, setInput] = useState('');

  const handleInput = (e) => setInput(e.target.value);
  const handleNext = () => {
    if(input.length > 0){
      setAns(9,input);
      next();
    }
    else alert("ענה על השאלה");
  }
  return (
    <div className='page-container'>
      <h4>תרגיל 1</h4>
      <div>
        <img className='img-page' style={{width:350,height:200}} src={require('../../img/toys.jpg')} alt='toys' />
      </div>
      <ul>
        <li>חברת הידד מוכרת צעצועים לילדים . </li>
        <li>לחברה הוצאות קבועות ומשתנות</li>
        <li>הוצאות קבועות 300000 ש"ח</li>
        <li>הוצאות משתנות בכל מכירת צעצוע 50 ₪</li>
        <li>מחיר כל צעצוע 400 ₪</li>
        {state.qustions[9].que}
      </ul>
      <TextField 
        type='number' 
        variant='outlined' 
        style={{backgroundColor:'#fff'}} 
        placeholder='ענה על השאלה' 
        onChange={handleInput}
      />
      <div className='action-page'>
        <Button variant='contained' onClick={handleNext}>הבא</Button>
      </div>
    </div>
  )
  }

  export default Page7;