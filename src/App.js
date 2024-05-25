import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route exact path='/menu' element={<Menu />}/>
            <Route exact path='/about' element={<About />}/>
            <Route exact path='/contact' element={<Contact />}/>
          </Routes>
          <Footer />
      </Router>
    </div>
    );
}

export default App;
