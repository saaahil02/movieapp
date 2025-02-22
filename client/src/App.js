import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login  from './pages/Login';
import Register from './pages/Register';
import { useSelector } from 'react-redux';
import Spinner from './components/Spinner';
import ProtectedRoutes from './components/ProtectedRoutes';
import PublicRoutes from './components/publicRoutes';
import Homepage from './pages/Homepage';
import Intropage from './pages/intropage';
function App() {
  const {loading}=useSelector(state=>state.alerts)
  return (
   <>
   <BrowserRouter>
   {loading ? (
    <Spinner/>
  ):(
   <Routes>
    <Route 
    path='/' 
    element={
      <PublicRoutes>
        <Homepage/>
        </PublicRoutes>
        }/>
    <Route path='/login' 
    element={
    <PublicRoutes><Login/></PublicRoutes>
    }/>

    
    
    <Route path='/register' 
    element={
    <PublicRoutes><Register/></PublicRoutes>
    }/>



<Route path='/intropage' 
    element={
   <Intropage/>
    }/>
   </Routes>)}
   </BrowserRouter>
   </>
  
  )}

export default App;
