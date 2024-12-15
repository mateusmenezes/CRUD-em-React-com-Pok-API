import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/index.js';
import Home from './pages/Home/index.js';
import Favoritos from './pages/Favoritos/index.js';


function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/favoritos' element={<Favoritos />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;