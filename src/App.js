import { useEffect } from 'react';
import './App.css';
import Drawer from './components/Drawer/Drawer';
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import AppLoading from './components/AppLoading/AppLoading';
import { actionTypes } from './reducer';
import { useStateValue } from './provider';
import { fetchData } from './api/fetchData';
function App() {
  const [{ selectedMenu, loading }, dispatch] = useStateValue();
  useEffect(() => {
    const subscription = fetchData()
    .subscribe(({ error, data, loading }) => {
      dispatch({
        type: actionTypes.SET_TIMES,
        payload: { 
          error, 
          data: error ? [] : data,
          loading,
         },
      })
    });
    return () => subscription.unsubscribe();
}, [dispatch]);
  if(loading) return(
    <AppLoading />
  )
  return (
    <div className="App">
      <Nav/>
      <Drawer />
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
