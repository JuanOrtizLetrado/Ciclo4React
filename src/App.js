
import './App.css';
import Index from './pages/Index';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contacto from './pages/Contacto';
import IndexA from './pages/admin/Index';
import Admin from './pages/admin/admin';
import Layout from './layout/Layout';
import Layout2 from './layout/Layout2';
import Usuario from './pages/admin/Usuario';


function App() {
  return (
    <BrowserRouter>
    <Routes>
       
      <Route path="/" element={<Layout2/>}>
      <Route  path="" element={<Index/>}/>
      <Route  path="contacto" element={<Contacto/>}/>
      </Route>
      

      <Route path="/admin" element={<Layout/>}>
      <Route  path="" element={<IndexA/>}/>
      <Route  path="usuario" element={<Admin/>}/>
      <Route  path="usuario/:nombreusuario" element={<Usuario/>}/>
      </Route>

    </Routes>
    </BrowserRouter>
      
  );
}

export default App;
