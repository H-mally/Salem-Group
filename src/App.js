
import Navbar from "./Navbar"
import Registration from "./pages/Registration"
import Dashboard from "./pages/Dashboard"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </>
  )
}
export default App