import { Route, Routes, Navigate } from "react-router-dom";
import Home from './components/SecuredPage'
import Login from './components/Login'
import Register from "./components/Register";

function App() {
  const user = localStorage.getItem("token");

  return (
    <>
<Routes>
    {user && <Route path='/' exact element={<Home/>} />} 
    <Route path='/signup' exact element={<Register/>} />
    <Route path='/login' exact element={<Login/>} />
    <Route path='/' exact element={<Navigate replace to="/login" />} />
   </Routes>
    </>
  )
}

export default App
