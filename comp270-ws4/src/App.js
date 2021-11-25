import React, { useRef, Component, useState } from 'react';
import "./App.css"
import { Suspense, useMemo, useCallback } from 'react';
import AnimationCanvas from './components/AnimationCanvas';
import UI from './components/UI/UI.js'
import Lines from './components/Lines.js'

let width = 0;
const App = () => {  
    return(
      // <div className="outerBody" >2
      //   <UI />
      //   <div id="numberTime">10</div>  
      //   <script>          
          
      //   </script>
    <div className="anim">      
        <Suspense fallback={<div>Loading...</div>}>

          <AnimationCanvas width={15} height={15} >
          </AnimationCanvas>
       </Suspense>        
    {/* </div>       */}
      </div>  )
  
}

export default App; 
