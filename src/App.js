

import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import Home from './components/Home'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
  
} from "react-router-dom";

 const App = () => {
  const pageSize = 9;
const [progress, setProgress] = useState(0)
const apiKey = process.env.REACT_APP_NEWS_API
const [country, setCountry] = useState("in") 

 const togglemode = (cls) =>{
  console.log(cls)
  setCountry(cls)
  // window.location.reload(true);
  // console.log(cls)


 };


    return (
     <>
       <BrowserRouter>
       <Navbar togglemode= {togglemode}/>   
           
       <LoadingBar
        color='#f11946'
        progress={progress}
      />
       <Routes>  
       <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/home"  element={<Home/>} />
            <Route path="/business"  element={<News setProgress={setProgress} apiKey={apiKey}  key="business" pageSize={pageSize} country={country} category="business"/>} />
            <Route path="/entertainment"  element={<News setProgress={setProgress} apiKey={apiKey}  key="entertainment" pageSize={pageSize} country={country} category="entertainment"/>} />
            <Route path="/general" element={<News setProgress={setProgress} apiKey={apiKey}   key="general" pageSize={pageSize} country={country} category="general"/>} />
            <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey}  key="health" pageSize={pageSize} country={country} category="health"/>} />
            <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey}  key="science" pageSize={pageSize} country={country} category="science"/>} />
            <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey}  key="sports" pageSize={pageSize} country={country} category="sports"/>} />
            <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey}  key="technology" pageSize={pageSize} country={country} category="technology"/>} />            
        </Routes>
       </BrowserRouter>
       
     </>
    )
//  const Memoizedtogglemode = React.memo(togglemode) 

  }


export default App

