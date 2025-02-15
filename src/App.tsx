import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/app.scss";
import { Register, Login } from "@/pages";
import { Layout } from "@/layouts";

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/auth/*" element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
