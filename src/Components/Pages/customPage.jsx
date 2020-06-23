import React from 'react';
import { 
  Button 
} from '@material-ui/core';
import './page.css';



function CustomPage({next,children}) {

  return (
      <div className='page-container'>
        {children}
        <div className='action-page'>  
          <Button variant='contained' onClick={()=>next()}>הבא</Button>
        </div>
      </div>
    )
  }

  export default CustomPage;