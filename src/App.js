import { Route, Routes } from 'react-router-dom';
import './App.css';
import Categories from './components/Categories';
import Navbar from './components/Navbar';
import Books from './components/Books';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route path="/books" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
