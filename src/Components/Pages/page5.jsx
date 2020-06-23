import React,{useState, useContext} from 'react';
import DoneIcon from '@material-ui/icons/Done';
import { AppContext } from "../../Context/provider";
import './page.css';

import { 
  Button , 
  TextField 
} from '@material-ui/core';


function Page4({next}) {
  const { state, setAns } = useContext(AppContext);
  const [input, setInput] = useState('');
  const [toggleNext, setToggleNext] = useState(false);

  const handleInput = (e) => setInput(e.target.value);
  const handleNext = () => {
    if(input.length > 0){
      setAns(7,input);
      next();
    }
    else alert("ענה על השאלה");
  }
  const aproveAns = () => {
    if(input.length > 0)
      setToggleNext(true);
  } 
  return (
    <div className='page-container'>
      <h4>מתווה היציאה מהקורונה</h4>
      <ul>
        <li>ההוצאות הקבועות בהופעה של נועה קירל הן 40,000 ₪</li>
        <li>ההוצאות המשתנות של צופה בהופעה הן 20 ₪</li>
        <li>מחיר כרטיס להופעה הינו 100 ₪</li>
        {state.qustions[7].que}
      </ul>
      <div>
        <img className='img-page' style={{width:350,height:200}} src={require('../../img/q1.jpg')} alt='נוסחה 2' />
      </div>
      { (!toggleNext) ?
        <div>
          <TextField 
            type='number' 
            variant='outlined' 
            style={{backgroundColor:'#fff'}} 
            placeholder='ענה על השאלה' 
            onChange={handleInput}
          />
          <DoneIcon className='doneIcon' style={{width:50,height:50}} onClick={aproveAns}/>
          
        </div> : 
        <div className="flexDiv">
        <img className='img-page' style={{width:350,height:200}} src={require('../../img/q2.jpg')} alt='נוסחה 2' />
          <h5>{"אתה ענית " +input}</h5>
        </div>
      }
      <div className='action-page'>
        {toggleNext ? <Button variant='contained' onClick={handleNext}>הבא</Button> : null}
      </div>
    </div>
  )
  }

  export default Page4;