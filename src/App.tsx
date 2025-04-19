import { BrowserRouter, Routes, Route } from "react-router-dom"
import Projects from "./pages/Projects"
import Uni from "./pages/Uni"
import Departments from "./pages/Departments"
import Navbar from "./components/common/Navbar"
import Footer from "./components/common/Footer"


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/uni" element={<Uni />} />
          <Route path="/deps" element={<Departments />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;