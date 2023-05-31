import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import AdminDashboard from './pages/Admin'

function App() {

  return (
   <>
    <Router>
    <Routes>
      <Route path='/' element={<AdminDashboard/>}/>
    </Routes>
   </Router>
   </>
  )
}

export default App
