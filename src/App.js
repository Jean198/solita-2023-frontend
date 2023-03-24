import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/home/auth/login/Login';
import Register from './pages/home/auth/register/Register';
import Home from './pages/home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
