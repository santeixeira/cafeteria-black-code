import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/about';
import Cardapio from './pages/cardapio';
import Home from './pages/home';
import Standard from './pages/standard';
import { Footer, Navbar } from 'src/components';

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Standard />}>
          <Route index element={<Home />} />
          <Route path="cardapio" element={<Cardapio />} />
          <Route path="sobre" element={<About />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
