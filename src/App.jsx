// import './App.css'

import CallCareer from "./Components/Career/callCareer"
import CallCyber from "./Components/Cyber/callCyber"
import CallStack from "./Components/FullSatck/callStack"
import Listing from "./Components/List/list"
import {Route, Routes} from "react-router-dom"
import CallScience from "./Components/Science/callScience"
import Home from "./Page/Home/home"

function App() {

  return (
    <>
      <Listing/>
      <Routes>
        <Route Component={Home} path="/"/>
        <Route Component={Home} path="/all"/>
        <Route Component={CallStack} path="/full"/>
        <Route Component={CallCyber} path="/cyber"/>
        <Route Component={CallCareer} path="/career"/>
        <Route Component={CallScience} path="/science"/>
      </Routes>
    </>
  )
}

export default App
