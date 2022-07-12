import { Route, Routes } from 'react-router-dom';
import './App.css';
import Categories from './components/Categories';
import Navbar from './components/Navbar';
import BooksList from './components/BooksList';

function App() {
  return (
    <div className="App">
      <header className="panel-bg">
        <Navbar />
        <Routes>
          <Route path="/books" element={<BooksList />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
