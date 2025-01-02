
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';
 import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import Packagepage from './components/Packagepage';
import Destination from './components/Destination';
import MaldivesPackage from './components/Packages/maldivesAssetes/MaldivesPackage';
import Paris from './components/Packages/Paris package/Paris';
import Switzerland from './components/Packages/Switzerland/Switzerland';
import USA from './components/Packages/USA/USA';
import BookNow from './components/BookNow';
import Packagebooking from './components/PackageBooking';
import India from './components/Packages/India/India';
import Banner from './components/Banner';
import Successful from './components/Successful';








function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <Routes>
     {/* <Route path='/'element={<Navbar/>}/> */}
     <Route path='/'element={<Home/>  }/>
     <Route path='/destine'element={<Destination/>  }/>
     <Route path='/login'element={<Login/>  }/>
     <Route path='/package1'element={<Packagepage/>  }/>
     <Route path='/home'element={<Home/>}/>
     <Route path='/contact'element={<Contact/>}/>
     <Route path='/about'element={<About/>}/>
     <Route path='/booknow'element={<BookNow/>}/>
     <Route path='/booking'element={<Packagebooking/>}/>

 {/*  package      */}
 <Route path='/maldives'element={<MaldivesPackage/>}/>
 <Route path='/paris'element={<Paris/>}/>
 <Route path='/switz'element={<Switzerland/>}/>
 <Route path='/usa'element={<USA/>}/>
 <Route path='/india'element={<India/>}/>
 <Route path='/success'element={<Successful/>}/>
 <Route path='/ban'element={<Banner/>}/>
     </Routes>
     <Footer/> 
     </BrowserRouter>
    </div>
  );
}

export default App;
