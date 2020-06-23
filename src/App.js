import React,{useState, useEffect, useContext} from 'react';
import { AppContext } from "./Context/provider";
import './App.css';
import Welcome from './Components/Welcome/welcome';
import LogIn from './Components/Pages/login';
import Page1 from './Components/Pages/page1';
import Page2 from './Components/Pages/page2';
import Page3 from './Components/Pages/page3';
import CustomPage from './Components/Pages/customPage';
import Page5 from './Components/Pages/page5';
import Page6 from './Components/Pages/page6';
import Page7 from './Components/Pages/page7';
import Page8 from './Components/Pages/page8';
import EndPage from './Components/Pages/endPage';

const setDelay = (mls) => {
  return new Promise(resolve => setTimeout(resolve, mls));
}

function App() {
  const { state } = useContext(AppContext);
  const [welcomeToggle, setWelcomeToggle] = useState(true);
  const [page, setPage] = useState(0);
  const [moutPage, setMoutPage] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setWelcomeToggle(false);
    },3000);
  }, []);
  useEffect(()=>{
  }, [page]);
  const handleNext = async () => {
    setMoutPage(false);
    await setDelay(10);
    setMoutPage(true);
    setPage(page+1);
  }
  const pageView = () => {
    switch(page){
      case 0:
        return <LogIn next={handleNext}/>
      case 1:
        return <Page1 next={handleNext}/>
      case 2:
        return <Page2 next={handleNext}/>
      case 3:
        return <Page3 next={handleNext}/>
        case 4:
          return( 
            <CustomPage next={handleNext}>
              <h4>עכשיו נעבור לכלכלה בזמן קורונה</h4>
              <img className='img-page' src={require('./img/noa.jpg')} alt='נועה קילר' />
              <h6>כולם יודעים מי זאת?</h6>
            </CustomPage>
        )
        case 5:
          return <Page5 next={handleNext}/>
        case 6:
          return <Page6 next={handleNext}/>
        case 7:
          return <Page7 next={handleNext}/>
        case 8:
          return <Page8 next={handleNext}/>
        case 9:
          return <EndPage/>
      default : return null;
    }
  }

  if(welcomeToggle)
    return <Welcome/>
  else 
  return ( 
    <div className='App'>
      <div className='app-container'>
        {page < 2 ? <h1 style={{textAlign:'center'}}>{" שלום " + state.student.name}</h1> : null}
        {moutPage ? pageView() : null}
      </div>
      <div className='footer'>
        <span style={{fontSize:'0.8rem',color:'#eee'}}>Copyright © 2020 Guy Damary</span>
      </div>
    </div>
  )

}

export default App;