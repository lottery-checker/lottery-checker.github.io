import { useEffect } from 'react';
import './App.css';
import Drawer from './components/Drawer/Drawer';
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import { actionTypes } from './reducer';
import { useStateValue } from './provider';
import { fetchData } from './api/fetchData';
function App() {
  const [{ selectedMenu, times }, dispatch] = useStateValue();
  useEffect(() => {
    const subscription = fetchData()
    .subscribe(({ error, data }) => {
      dispatch({
        type: actionTypes.SET_TIMES,
        payload: { error, data: error ? [] : data },
      })
    });
    return () => subscription.unsubscribe();
}, [dispatch]);
  return (
    <div className="App">
      <Nav/>
      <Drawer />
      {JSON.stringify(times)}
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
