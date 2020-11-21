import { useState } from 'react';
import './App.css';
import Drawer from './components/Drawer/Drawer';
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
function App() {
  const [toggle, setToggle] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('home');
  const toggleDrawer = (open) => {
    setToggle(open);
  }
  const onMenuClick = () => {
    setToggle(!toggle);
  }
  const onMenuSelect = (menu) => {
    setSelectedMenu(menu)
    setToggle(false);
  }
  return (
    <div className="App">
      <Nav onMenuClick={onMenuClick}/>
      <Drawer toggle={toggle}
      toggleDrawer={(open) => toggleDrawer(open)}
      onMenuSelect={onMenuSelect}
      />
      {
        selectedMenu === 'home' &&
        <Home />
      }
      {
        selectedMenu === 'about' &&
        <About />
      }    
      <Footer/> 
    </div>
  );
}

export default App;
