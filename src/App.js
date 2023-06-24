
import './App.scss';
import MyHeader from './components/header/header.component';
import Main from './components/content/mainPage/main.content.component'
import Footer from './components/footer/footer.component'
import {Routes, Route} from 'react-router-dom' 
import CarList from './components/content/carlist/carlist.component';
function App() {
  return (
    
    <div className="App">
      <MyHeader/>
      <Routes>
        
        <Route path='/Search' element={<CarList />}/>
        <Route path='/' element={<Main />}/>
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
