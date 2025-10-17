import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Register from "./pages/register"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Account from "./pages/Account"
import { useState } from "react"
export default function App() {
  const [users, setUsers] = useState([]);       // stores all registered users
  const [currentUser, setCurrentUser] = useState(null); // logged in user

  return (
     <Router>
   <div className="flex  justify-center  h-screen w-screen ">
    <div className="flex flex-col h-screen w-[375px] bg-gray-100 border border-neutral-300">
   
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login users={users} setCurrentUser={setCurrentUser}/>}></Route>
        <Route path="/register" element={<Register users={users} setUsers={setUsers}/>}></Route>
         <Route path="/account" element={<Account user={currentUser} setCurrentUser={setCurrentUser}/>}></Route>
      </Routes>
</div>
   </div>
   </Router>
  )
}