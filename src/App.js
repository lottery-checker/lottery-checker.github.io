import { useState } from 'react';
import './App.css';
import Drawer from './components/Drawer/Drawer';
import Nav from './components/Nav/Nav';
function App() {
  const [toggle, setToggle] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('home');
  const toggleDrawer = (open) => {
    setToggle(open)
  }
  const onMenuClick = () => {
    setToggle(!toggle)
  }
  return (
    <div className="App">
      <Nav onMenuClick={onMenuClick}/>
      <Drawer toggle={toggle}
      toggleDrawer={(open) => toggleDrawer(open)}
      onMenuSelect={(menu) => setSelectedMenu(menu)}
      />
    </div>
  );
}

export default App;
