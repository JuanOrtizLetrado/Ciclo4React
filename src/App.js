
import './App.css';
import Index from './pages/Index';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contacto from './pages/Contacto';
import IndexA from './pages/admin/Index';
import Admin from './pages/admin/admin';
import Layout from './layout/Layout';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Index/>}/>
      <Route  path="/contacto" element={<Contacto/>}/>

      <Route path="/admin" element={<Layout/>}>
      <Route  path="" element={<IndexA/>}/>
      <Route  path="usuario" element={<Admin/>}/>
      </Route>

    </Routes>
    </BrowserRouter>
      
  );
}

export default App;
