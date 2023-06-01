import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import AdminDashboard from './pages/Admin'
import SIgnUp from './pages/SIgnUp'
import { Toaster } from 'react-hot-toast'
import SignIn from './pages/SignIn'
import PvtRoutes from './PrivateRoutes/pvtRoutes'

function App() {

  return (
   <>
   <Toaster/>
    <Router>
    <Routes>
      <Route path='/' element={<SignIn/>}/>
      <Route path='/register' element={<SIgnUp/>}/>
      <Route element={<PvtRoutes/>}>
      <Route path='/home' element={<AdminDashboard/>}/>
      </Route>
    </Routes>
   </Router>
   </>
  )
}

export default App
