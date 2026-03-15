import Navbar from "./components/Navbar"
import Users from "./components/Users"
import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import ViewBlog from "./pages/ViewBlog"

function App() {

  return (
    <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/users" element={<Users />}/>
      <Route path="/blogs/:id" element={<ViewBlog />}/>
    </Routes>
    </div>
  )
}

export default App
