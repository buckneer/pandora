import { BrowserRouter, Routes, Route } from "react-router-dom"
import Projects from "./pages/Projects"
import Uni from "./pages/Uni"
import Departments from "./pages/Departments"


function App() {


	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Projects />} />
					<Route path="/uni" element={<Uni />} />
					<Route path="/deps" element={<Departments />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
