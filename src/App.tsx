import { BrowserRouter, Routes, Route } from "react-router-dom"
import Projects from "./pages/Projects"
import Uni from "./pages/Uni"
import Departments from "./pages/Departments"
import Navbar from "./components/common/Navbar"
import Footer from "./components/common/Footer"
import { LanguageProvider } from "./context/LanguageContext"
import AOSInit from "./components/AOSInit"


function App() {
  return (
    <>
      <AOSInit />
      <LanguageProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Projects />} />
            <Route path="/uni" element={<Uni />} />
            <Route path="/deps" element={<Departments />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </LanguageProvider>
    </>
  )
}

export default App;