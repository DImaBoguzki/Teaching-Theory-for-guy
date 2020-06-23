import React,{useState, useContext} from 'react';
import { AppContext } from "../../Context/provider";
import './page.css';
import { 
  Button , 
  TextField ,
} from '@material-ui/core';


function Page8({next}) {
  const { state, setAns } = useContext(AppContext);
  const [input, setInput] = useState('');

  const handleInput = (e) => setInput(e.target.value);
  const handleNext = () => {
    if(input.length > 0){
      setAns(10,input);
      next();
    }
    else alert("ענה על השאלה");
  }
  return (
    <div className='page-container'>
      <h4>תרגיל 2</h4>
      <div>
        <img className='img-page' style={{width:350,height:200}} src={require('../../img/toys2.jpg')} alt='toys1' />
      </div>
      <ul>
        <li>בעקבות הקורונה ההוצאות הקבועות ירדו ל200000 ₪</li>
        <li>וההוצאות המשתנות בכל מכירת צעצוע עלתה ל100 ש"ח בעקבות המשלוחים</li>
        <li>מחיר הצעצוע נשאר זהה – 400 ש"ח</li>
        {state.qustions[10].que}
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

  export default Page8;