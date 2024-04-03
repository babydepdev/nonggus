import { Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import NavbarHeader from "./layouts/NavbarHeader"

function App() {

  return (
    <>
      <NavbarHeader />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  )
}

export default App
