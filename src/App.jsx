import './App.css';

import { Route, Routes } from 'react-router-dom';

import AboutUs from './Pages/AboutUs';
import HomePage from './Pages/HomePage';
import NotFound from './Pages/NotFound';
import SignUp from './Pages/SingUp';
import Login from './Pages/Login';
import CourseList from './Pages/Course/CourseList';
import Contact from './Pages/Contact';
import Denied from './Pages/Denied';
import CourseDescription from './Pages/Course/CourseDescription';
import RequierAuth from './Components/Auth/RequireAuth';
import CreateCourse from './Pages/Course/CreateCourse';
import Profile from './Pages/User/Profile';
import EditProfile from './Pages/User/EditProfile';
import Checkout from './Pages/Payment/Checkout';
import CheckoutSuccess from './Pages/Payment/CheckoutSuccess';
import CheckoutFailure from './Pages/Payment/CheckoutFailure';
import Displaylectures from './Pages/Dashboard/Displaylectures';
import AddLecture from './Pages/Dashboard/AddLecture';
import AdminDashboard from './Pages/Dashboard/AdminDashboard';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} > </Route>
        <Route path='/about' element={<AboutUs />} > </Route>

        <Route path='/courses' element={<CourseList />} > </Route>
        <Route path='/description' element={<CourseDescription />} > </Route>
        <Route path='/contact' element={<Contact />} > </Route>
        <Route path='/denied' element={<Denied />} > </Route>

        <Route path='/signup' element={<SignUp />} > </Route>
        <Route path='/login' element={<Login />} > </Route>

        <Route element={<RequierAuth allowedRoles={["ADMIN"]} />}>
          <Route path='/course/create' element={<CreateCourse />} > </Route>
          <Route path='/course/addlecture' element={<AddLecture />} > </Route>
          <Route path='/admin/dashboard' element={<AdminDashboard />} > </Route>
        </Route>

        <Route element={<RequierAuth allowedRoles={["ADMIN", "USER"]} />}>
          <Route path='/user/profile' element={<Profile />} />
          <Route path='/user/editprofile' element={<EditProfile />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/checkoutsuccess' element={<CheckoutSuccess />} />
          <Route path='/checkout/fail' element={<CheckoutFailure />} />
          <Route path='/course/displaylectures' element={<Displaylectures />} />
        </Route>

        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </>
  )
}

export default App