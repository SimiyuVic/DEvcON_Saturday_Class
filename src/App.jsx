import Navbar from "./components/Navbar"
import Users from "./components/Users"
import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import ViewBlog from "./pages/ViewBlog"
import AddBlog from "./pages/AddBlog"
import EditBlog from "./pages/EditBlog"

function App() {

  return (
    <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/users" element={<Users />}/>
      <Route path="/blogs/:id" element={<ViewBlog />}/>
      <Route path="/add-blog" element={<AddBlog />}/>
      <Route path="edit-blog/:id" element={<EditBlog />}/>
    </Routes>
    </div>
  )
}

export default App
