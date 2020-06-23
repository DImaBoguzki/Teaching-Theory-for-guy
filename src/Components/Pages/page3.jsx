/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState, useEffect, useRef, useContext} from 'react';
import { AppContext } from "../../Context/provider";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import './page.css';

import { 
  Button , 
  TextareaAutosize,
  IconButton 
} from '@material-ui/core';


function Page3({next}) {
  const { state, setAns } = useContext(AppContext);
  const textAreaRef = useRef(null);
  const quesionRef = useRef(null);

  const [input, setInput] = useState('');
  const [queNum, setQueNum] = useState(2);
  const [toggleNext, setToggleNext] = useState(false);

  useEffect(()=>{
    if(textAreaRef.current!==null){
      textAreaRef.current.value=state.qustions[queNum].ans;
      quesionRef.current.className=""
      setTimeout(()=>{
        if(quesionRef.current!==null)
          quesionRef.current.className="question"
      },10);
    }
  },[queNum])

  const handleTextArea = (e) => setInput(e.target.value);
  const handleSetQue = (num) => setQueNum(num);

  const handleNextQuestion = () => {
    if(input.length > 0) {
      setAns(queNum,input);
      if(queNum < 6){
        setQueNum(queNum+1);
        textAreaRef.current.focus();
      }
      else 
        setQueNum(2);
        if(validAns())
          setToggleNext(true);
    }
    else alert("לא הכנסת תשובה")
  }
  const validAns = () => {
    for(let i=2;i<7;i++)
      if(!(state.qustions[i].ans.length>0))
        return false;
    return true;
  }
  const styleNumButons = (num) => {
    return {
      backgroundColor: queNum===num ?  'rgba(0,0,0,0.3)' : null,
      color: state.qustions[num].ans.length > 0 ? 'green' : '#fff'
    }
  }
  return (
    <div className='page-container'>
      <h2>ארגון - הגדרה</h2>
      <h3> 
          <span className='emphasis-label'> קבוצת אנשים </span>
          בעלי
          <span className='emphasis-label'>  מטרה משותפת </span>
           , הפועלים
           <span className='emphasis-label'> בתיאום </span>
            ולרשותם
            <span className='emphasis-label'>  המשאבים הדרושים </span>
              להשגת
            <span className='emphasis-label'>  המטרה </span> . 
      </h3>
      {(!toggleNext) ?
      <div className='flexDiv'>
        <div ref={quesionRef} className='question' style={{minHeight:180}}>
            <h4>{state.qustions[queNum].que}</h4>
        </div>
        <TextareaAutosize 
          ref={textAreaRef}
          rows={10} 
          placeholder='ענה על השאלה' 
          style={{width:'100%',padding:5,fontSize:'1.5rem'}} 
          onChange={handleTextArea}
        />

        <IconButton style={{margin:10,backgroundColor: toggleNext ? '#00af00' : '#aaa'}} variant='contained' onClick={handleNextQuestion}>
            <ArrowForwardIcon style={{color: '#fff'}}/>
        </IconButton> 
        <ul className='list-button'>
          <li><Button color='inherit' onClick={()=>handleSetQue(2)} style={styleNumButons(2)}>1</Button></li>
          <li><Button color='inherit' onClick={()=>handleSetQue(3)} style={styleNumButons(3)}>2</Button></li>
          <li><Button color='inherit' onClick={()=>handleSetQue(4)} style={styleNumButons(4)}>3</Button></li>
          <li><Button color='inherit' onClick={()=>handleSetQue(5)} style={styleNumButons(5)}>4</Button></li>
          <li><Button color='inherit' onClick={()=>handleSetQue(6)} style={styleNumButons(6)}>5</Button></li>
        </ul>
      </div> :
      <div>
        <ul>
          <li>איזו קבוצת אנשים? קבוצת האנשים בארגון של דקל וקנין היא : אח שלו שמייצג אותו, איש שיווק , מנהל חשבונות וכו</li>
          <li>מה המטרה? – המטרה בארגון של דקל וקנין היא להרוויח כסף</li>
          <li>מה התיאום? –התיאום  בארגון של דקל וקנין נעשה בין כל קבוצת האנשים המפעילים את הארגון</li>
          <li>מהם המשאבים? – המשאבים בארגון של דקל וקנין הם המשאב האנושי (דקל-הקול שלו) וכל מי שפועל בארגון</li>
        </ul>
      </div>
      }
      { toggleNext ? 
      <div className='action-page'> 
        <Button variant='contained' onClick={()=>next()}>הבא</Button>
      </div> : null
      }
    </div>
  )
  }

  export default Page3;