
import './App.css';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Error from './components/Error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="*" element={<Error/>}/>
        </Route>  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
