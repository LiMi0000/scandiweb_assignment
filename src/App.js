import './App.css';
import Products from './components/Products';
import Header from './components/Header';
import Women from './components/Women';
import Men from './components/Men';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Kids from './components/Kids';
import Cart from './components/Cart';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Products />} exact />
          <Route path="/Women.js" element={<Women />} />
          <Route path="/Men.js" element={<Men />} />
          <Route path="/Kids.js" element={<Kids />} />
          <Route path="/Cart.js" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
