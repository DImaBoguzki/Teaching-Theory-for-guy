import React, {useContext, useState} from 'react';
import axios from 'axios';
import { Button,Backdrop,CircularProgress } from '@material-ui/core';
import { AppContext } from "../../Context/provider";
import './page.css';
import ReactPlayer from 'react-player/youtube'


function EndPage() {
  const { state } = useContext(AppContext);
  const [load, setLoad] = useState(false);
  const [endToggle, setEndToggle] = useState(false);

  const handleSend = () => {
    const html=`<html>
    <body>
      <h1>${state.student.name}</h1><br>
      <h2>${state.student.email}</h2><br>
      <h3>${state.qustions[0].que}</h3>
      <h3>${state.qustions[0].ans}</h3>
      <p>---------------------------</p>


      <h3>${state.qustions[1].que}</h3>
      <h3>${state.qustions[1].ans}</h3>
      <p>---------------------------</p>
    
      <h3>${state.qustions[2].que}</h3>
      <h3>${state.qustions[2].ans}</h3>
      <p>---------------------------</p>

      <h3>${state.qustions[3].que}</h3>
      <h3>${state.qustions[3].ans}</h3>
      <p>---------------------------</p>

      <h3>${state.qustions[4].que}</h3>
      <h3>${state.qustions[4].ans}</h3>
      <p>---------------------------</p>

      <h3>${state.qustions[5].que}</h3>
      <h3>${state.qustions[5].ans}</h3>
      <p>---------------------------</p>

      <h3>איזה מגזר שייך הארגון של המותג דקל וקנין?</h3>
      <h3>${state.qustions[6].ans}</h3>
      <p>---------------------------</p>

      <h3>${state.qustions[7].que}</h3>
      <h3>${state.qustions[7].ans}</h3>
      <p>---------------------------</p>

      <h3>${state.qustions[8].que}</h3>
      <h3>${state.qustions[8].ans}</h3>
      <p>---------------------------</p>

      <h3>${state.qustions[9].que}</h3>
      <h3>${state.qustions[9].ans}</h3>
      <p>---------------------------</p>
      <h3>${state.qustions[10].que}</h3>
      <h3>${state.qustions[10].ans}</h3>
      <p>---------------------------</p>
  </body>
  </html>`;
    const data = {
      name: state.student.name,
      email : state.student.email,
      body: html
    }
    const header = {
      'Access-Control-Allow-Origin': '*',
    }
    setLoad(true);
    axios.post('/email',data,header)
    .then(data=>{
      setLoad(false);
      console.log(data);
      alert("תשובותך נשלחו בהצלחה");
      setEndToggle(true);
    })
    .catch(err=>{
      setLoad(false);
      console.log(err);
    })
  }
  return (
    <>
      <div className='page-container'>
        { (!endToggle) ? 
        <div className='flexDiv'>
            <h1 style={{textDecoration: 'underline'}}>תודה שהשתתפת!</h1>
            <h3 style={{textDecoration: 'underline'}}>התשובות שלך</h3>
            {
              state.qustions.map((el,i)=>{
                return (
                  <div key={i}>
                    <h6>{el.que}</h6>
                    <p>{el.ans}</p>
                    <div className='divider'></div>
                  </div>
                )
              })
            }
          <div className='action-page'>  
            <Button 
              onClick={handleSend} 
              variant='contained'
              color='primary'
              size='large'
            >
                שלח את התשובות שלך
            </Button>
          </div>
        </div> :
          <div className='flexDiv'>
            <h3>קבלו ברכה בחינם :-)</h3>
          <ReactPlayer 
            url='https://www.youtube.com/watch?v=okaxndUk0sA'
            playing={true}
            width={500}
            height={500}
          />
          <h4> בבקשה מלאו בתשומת לב, בכנות ובהוגנות את טופס המשוב.</h4>
          <a className='link-mashov' href='https://docs.google.com/forms/d/e/1FAIpQLSeLtFoOM_kJ1_7-82Uc6fcPS1qktG-1lGSu4wtZuFNlnwCYaA/viewform'>
            משוב
          </a>
          </div>
        }
      </div>
      <Backdrop style={{zIndex:999,color:'#fff'}} open={load}>
        <CircularProgress color="inherit" />
      </Backdrop>
      </>
    )
  }

  export default EndPage;