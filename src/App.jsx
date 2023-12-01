import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Favs from "./Routes/favs";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";


function App() {
  return (
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/favs" element={<Favs/>}/>
          <Route path="/detail/:id" element={<Detail/>}/>
          <Route path="/contacto" element={<Contact/>}/>
          <Route path="/dentista/:id" element={<Detail/>}/>
          <Route path="*" element={<h1>Page not found</h1>}/>
        </Routes>
        <Footer/>
      </div>
  );
}

export default App;
