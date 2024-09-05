import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import Home from './components/pages/Home';
import Contato from './components/pages/Contato';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';


function App() {
  return (
    
    <Router>
      <Navbar/>


<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/contato" element={<Contato/>}/>
</Routes>

<Footer/>

    </Router>
  
  );
}

export default App;
