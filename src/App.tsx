import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/app.scss";
import { Register, Login } from "@/pages";

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
