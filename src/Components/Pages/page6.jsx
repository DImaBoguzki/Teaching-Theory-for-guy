import React,{useState, useContext} from 'react';
import { AppContext } from "../../Context/provider";
import './page.css';
import DoneIcon from '@material-ui/icons/Done';
import { 
  Button , 
  TextField ,
} from '@material-ui/core';


function Page4({next}) {
  const { state, setAns } = useContext(AppContext);
  const [input, setInput] = useState('');
  const [toggleNext, setToggleNext] = useState(false);

  const handleInput = (e) => setInput(e.target.value);
  const handleNext = () => {
    if(input.length > 0){
      setAns(8,input);
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
        <li>הממשלה החליטה שעקב הקורונה חייבים להקטין את מספר הצופים בהופעה פי-2</li>
        <h4>{state.qustions[8].que}</h4>
      </ul>
      <div className='divTwoImg'>
        <img className='img-page' style={{width:350,height:200}} src={require('../../img/q4.jpg')} alt='נוסחה 4' />
        <img className='img-page' style={{width:350,height:200}} src={require('../../img/q3.jpg')} alt='3 נוסחה' />
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
          <h4>P=180</h4>
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