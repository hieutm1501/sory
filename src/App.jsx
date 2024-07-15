import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { routes } from './routes'
import Home from "./pages/Home/Home";
import Welcom from "./pages/welcom/Welcom";
import Hello from "./pages/hello/Hello";
import Test from "./pages/test/test";
import EndPage from "./pages/End/EndPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" >
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.welcom} element={<Welcom />} />
          <Route path={routes.hello} element={<Hello />} />
          <Route path={routes.end} element={<EndPage />} />
          <Route path={routes.test} element={<Test />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
