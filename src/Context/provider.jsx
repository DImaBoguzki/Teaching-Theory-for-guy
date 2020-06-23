import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  let [state, setState] = useState({
    qustions:[
      {
        que:'איזה ארגונים לדעתכם הרוויחו הכי הרבה בתקופת הקורונה?',
        ans:""
      },
      {
        que:'האם לדעתך דקל וקנין עונה למושג ארגון ? האם הוא סוג של ארגון?',
        ans:""
      },
      {
        que:'מי הם קבוצת האנשים הקיימים בארגון דקל וקנין',
        ans:""
      },
      {
          que:'מה לדעתך המטרה בארגון דקל וקנין?',
          ans:""
      },
      {
          que:'לאיזה תיאום קיים בארגון דקל וקנין?',
          ans:""
      },
      {
          que:'אילו משאבים קימיים בארגון דקל וקנין?',
          ans:""
      },
      {
          que:<div>
            <h4 style={{padding:1,margin:1,textAlign:'center'}}>איזה מגזר שייך הארגון של המותג דקל וקנין?</h4>
            <h5 style={{padding:1,margin:1,textAlign:'center'}}>מגזר ראשון? שני? שלישי?</h5>
            <p style={{padding:1,margin:1,textAlign:'center' ,fontSize:10}}>מגזר ראשון- ארגונים מהמגזר הציבורי</p>
            <p style={{padding:1,margin:1,textAlign:'center',fontSize:10}}>מגזר שני- ארגונים מהמגזר הפרטי</p>
            <p style={{padding:1,margin:1,textAlign:'center',fontSize:10}}>מגזר שלישי- מלכ"רים </p>
          </div>,
          ans:""
      },
      {
        que:'מה מספר הצופים המינימלי הדרוש בכדי שנועה קירל לא תפסיד מההופעה?',
        ans:''
      },
      {
        que:'מה המחיר החדש שנועה קירל תיגבה בעבור כרטיס להופעה שלה על מנת שלא תפסיד?',
        ans:''
      },
      {
        que:'כמה צעצועים צריכה למכור חברת הידד על מנת להגיע לאיזון?',
        ans:''
      },
      {
        que:'כמה צעצוצים צריכה עכשיו חברת הידד למכור?',
        ans:''
      }
    ],
    student:{
      name:'',
      email:''
    }
  }
  );
  const setAns = (index, ans) => {
    const newArr = [...state.qustions]
    newArr[index].ans=ans;
    setState(prevState => ({
      ...prevState,
      qustions: newArr
    }));
  }
  const setStudent = (student) => {
    setState(prevState => ({
      ...prevState,
      student: student
    }));
  }
  return (
    <AppContext.Provider value={{ state, setAns, setStudent }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };