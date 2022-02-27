

import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import Home from './components/Home'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

 const App = () => {
  const pageSize = 9;
const [progress, setProgress] = useState(0)

  // apiKey = "6f6a67f6d9dc4eb79b02f6c9f3f91faf"
  // apiKey = "6d1c904f85a641d191fa676d575a3c62"
 const apiKey = process.env.REACT_APP_NEWS_API
// REACT_APP_NEWS_API="6f6a67f6d9dc4eb79b02f6c9f3f91faf"

 
 
    return (
     <>
       <BrowserRouter>
       <Navbar/>   
           
       <LoadingBar
        color='#f11946'
        progress={progress}
      />
       <Routes>
            <Route path="/home"  element={<Home/>} />
            <Route path="/business"  element={<News setProgress={setProgress} apiKey={apiKey}  key="business" pageSize={pageSize} country="in" category="business"/>} />
            <Route path="/entertainment"  element={<News setProgress={setProgress} apiKey={apiKey}  key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>} />
            <Route path="/general" element={<News setProgress={setProgress} apiKey={apiKey}   key="general" pageSize={pageSize} country="in" category="general"/>} />
            <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey}  key="health" pageSize={pageSize} country="in" category="health"/>} />
            <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey}  key="science" pageSize={pageSize} country="in" category="science"/>} />
            <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey}  key="sports" pageSize={pageSize} country="in" category="sports"/>} />
            <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey}  key="technology" pageSize={pageSize} country="in" category="technology"/>} />            
        </Routes>
       </BrowserRouter>
       
     </>
    )
  }


export default App

