import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import  ProgressBar  from './components/ProgressBar.jsx'
import Home from './Pages/Home.jsx';
function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path={"/chat"} element={<DashBoard />} /> */}

          <Route path="/tripbuilder" element={<ProgressBar/>} />
          {/* <Route path="/tripbuilder" element={authUser?<Navigate to={"/chat"} replace={true}/> :<Login />} /> */}

          {/* <Route path="/chat" element={authUser?<DashBoard/>:<Navigate to="/login" replace={true}/> } />

          <Route path="/error" element={<Error404 />} /> */}
          

          {/* <Route path="/register" element={authUser?<Navigate to={"/chat"} replace={true}/> :<Register />} /> */}
        </Routes>
    </>
  )
}

export default App
