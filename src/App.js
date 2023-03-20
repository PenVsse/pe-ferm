import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from './components/NavBar';
import TopNews from './components/TopNews';
import Home from './components/Home';
import SignIn from './components/SignIn';
import Contact from './components/Contact';
import Detail from './components/Detail';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}>
          </Route>
          <Route path='/top-news' element={<TopNews />}></Route>
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/sing-in' element={<SignIn />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>

        </Routes>
      </div>


    </>
  );
}

export default App;
