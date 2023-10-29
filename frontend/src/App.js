//import ListModalEdit from './Components/ListModalEdit';
//import ListDetailt from "./Components/ListDetail";

import { BrowserRouter, Routes, Route } from "react-router-dom"

//COMPONENTS
import NavBar from "./Components/NavBar" ;

//ROUTES
import Home from "./Routes/home"
import List from "./Routes/list"

//CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


function App() {
  return (    
    <BrowserRouter>
      <NavBar/>
      <div className='m-4'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/list" element={<List/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
