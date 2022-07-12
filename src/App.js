import { Route, Routes } from 'react-router-dom';
import './App.css';
import Categories from './pages/Categories';
import Navbar from './components/Navbar';
import BooksList from './components/BooksList';
import NotMatch from './pages/NotMatch';

function App() {
  return (
    <div className="App">
      <header className="panel-bg">
        <Navbar />
        <Routes>
          <Route path="/books" element={<BooksList />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="*" element={<NotMatch />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
