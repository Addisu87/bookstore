import { Route, Routes } from 'react-router-dom';
import './App.css';
import Categories from './pages/Categories';
import Navbar from './components/Navbar';
import NotMatch from './pages/NotMatch';
import Books from './components/Books';

function App() {
  return (
    <div className="App">
      <header className="panel-bg">
        <Navbar />
        <Routes>
          <Route path="/books" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="*" element={<NotMatch />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
