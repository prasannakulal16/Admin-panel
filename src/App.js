import logo from "./logo.svg";
import "./App.css";
import Admin from "./components/admin/Admin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Adduser from "./components/admin/Adduser";
import Edituser from "./components/admin/Edituser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Admin/>} />
          <Route path="/add-user" element={<Adduser/>} />
          <Route path="/edit-user/:id" element={<Edituser/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
