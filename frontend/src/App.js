/* import { BrowserRouter, Routes, Route } from "react-router-dom"
import { UserProvider } from "./UserProvider"; */

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
    <NavBar/>
  );
}

export default App;

