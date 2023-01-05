import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import {ForgotPassword, Login} from "./pages/login"
function App() {
  return (
      <Router>
          <Routes>
              <Route path={"/login"} element={<Login/>}/>
              <Route path={"/forgotPassword"} element={<ForgotPassword/>}/>
              <Route path={"/signup"} element={<ForgotPassword/>}/>
              <Route path={"*"} element={<Login/>}/>
          </Routes>
      </Router>
    )
}

export default App;
