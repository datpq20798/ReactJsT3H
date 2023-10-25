import './App.css';
import Login from './components/Login';
import Sidebar from './components/Sidebar'
import MngStudents from './components/MngStudents'
import MngTeachers from './components/MngTeachers'
import MngProfileStudens from './components/MngProfileStudens';
import { Route, Routes } from 'react-router-dom';
import MngAddStudents from './components/MngAddStudents';
import MngCourses from './components/MngCourses';

function App() {
  return (
    <div className="App">
          
          <Routes>
            <Route path='/' element={<Login/>}></Route>
            <Route path='/addstudents' element={<MngAddStudents/>}></Route>
            <Route path='/sidebar' element={<Sidebar/>}></Route>
            <Route path='/mngstudents' element={<MngStudents/>}></Route>
            <Route path='/mngteachers' element={<MngTeachers/>}></Route>
            <Route path='/mngprofileStudens' element={<MngProfileStudens/>}></Route>
          </Routes>

      
    </div>
  );
}

export default App;
