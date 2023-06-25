
import './App.scss';
import MyHeader from './components/header/header.component';
import Main from './components/content/mainPage/main.content.component'
import Footer from './components/footer/footer.component'
import {Routes, Route} from 'react-router-dom' 
import CarList from './components/content/carlist/carlist.component';
import CarCardPage from './components/content/carCardPage/carCardPage.component';
function App() {
  return (
    
    <div className="App">
      <MyHeader/>
      <Routes>
        
        <Route path='/Search' element={<CarList />}/>
        <Route path='/CarCard' element={<CarCardPage />}/>
        <Route path='/' element={<Main />}/>
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
