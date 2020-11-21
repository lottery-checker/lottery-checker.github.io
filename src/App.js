import './App.css';
import Drawer from './components/Drawer/Drawer';
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import { useStateValue } from './provider'
import TestComponent from './components/TestComponent/TestComponent';
function App() {
  const [{ selectedMenu }] = useStateValue();
  return (
    <div className="App">
      <Nav/>
      <Drawer />
      <TestComponent />
      {
        selectedMenu === 'home' &&
        <Home />
      }
      {
        selectedMenu === 'about' &&
        <About />
      }
    </div>
  );
}

export default App;
