import './App.css';
import logo from './img/logo.png';
import { recipe } from './lista/recetaList';
import { FaHome } from "react-icons/fa";
import {BrowserRouter, Route, Routes, Link, useParams, useLocation} from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import DetailPage from './pages/detail/DetailPage';
import CategoryPage from './pages/category/CategoryPage';

function App() {

  const RecipeDetailWrapper = () => {
    let { id } = useParams();
    id = parseInt(id, 60);
    return <DetailPage receta={recipe[id - 1]} />;
  };

  const Header = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
      <header className="App-header w-full h-20 shadow-sombra flex items-center justify-between">
        <div className='w-[200px] h-20 flex items-center justify-center'>
          <img src={logo} alt='Logo de Delicias Caseras' className=' w-48 h-[70px] ' />
        </div>
        <div className={`justify-center items-center mr-2 ${isHomePage ? 'hidden' : 'flex'}`}>
          <Link to='/' className='text-2xl transition-all duration-400 hover:text-red-600'> <FaHome /> </Link>
        </div>
      </header>
    );
  };


  return (
    <BrowserRouter>
      <div>
        <Header />
        <main>
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/detail/:id' element={<RecipeDetailWrapper />} />
            <Route exact path='/category/:categoria' element={<CategoryPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
