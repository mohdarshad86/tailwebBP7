// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './Pages/signup';
import Login from './Pages/login';


function App() {
  return (

    <div className="App">

      <BrowserRouter>
        <div className='logo'><h2>Student Management</h2></div>
        <div className='route'>
        <Routes>
            {/* <Route path='/' element={<Home />} /> */}
            
            <Route path='/' element={<Login />} />
            <Route path='signup' element={<SignUp />} />


           
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
