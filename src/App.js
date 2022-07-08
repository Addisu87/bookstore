import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import BooksPage from './pages/BooksPage';
import CategoriesPage from './pages/CategoriesPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route path="/" element={<BooksPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
