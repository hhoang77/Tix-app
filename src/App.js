import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Film from "./pages/Film/Film";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import DatVe from "./pages/Datve/DatVe";
import BackTop from "./components/BackToTop/BackTop";
import { createBrowserHistory } from "history";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/phim/:id" element={<Film />} />
        <Route path="/datve/:id" element={<DatVe />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <BackTop />
    </BrowserRouter>
  );
}
export const history = createBrowserHistory();

export default App;
