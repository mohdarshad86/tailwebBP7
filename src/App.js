// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ErrorPage from './Pages/errorPage'
import SignUp from './Pages/signup';
import Login from './Pages/login';
import AddStudent from './Pages/addStudent';
// import Student from './Pages/studentPage'
import UpdateStudent from './Pages/updateStdudent';


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
            <Route path='addStudent' element={<AddStudent />} />
            <Route path='updateStdudent/:id' element={<UpdateStudent />} />
            <Route path='*' element={<ErrorPage />} />

          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
