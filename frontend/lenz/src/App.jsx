import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./routes/Login/Login";
import Perfil from './routes/Perfil/Perfil';

import "./styles/base.css"
import Feed from './routes/Feed/Feed';
import PerfilEdit from './routes/PerfilEdit/PerfilEdit';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<Layout />}>
          <Route path="/profile" element={<Perfil />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/edit" element={<PerfilEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App