import React from 'react';
import "./App.css"
import { Suspense } from 'react';
import AnimationCanvas from './components/AnimationCanvas';

// sets all shapes to wireframes if true
let wireframes = false;

// suspense component allows a fallback while it loads
const App = () => {  
    return(
    <div className="anim">       
      <Suspense fallback={<div>Loading...</div>}>
        <AnimationCanvas width={15} height={15} wireframes={wireframes}>
        </AnimationCanvas>
       </Suspense>
      </div>
      )
  
}

export default App; 
