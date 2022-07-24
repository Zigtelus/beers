import { useEffect } from 'react';
import './App.css';
import Main from './components/Main';
import Search from './components/Nav';
import { beersAction } from './redux/beers/beers.action';
import { dataBeers } from './redux/creatApi';
import { useAppDispatch } from './redux/redux';



function App(): JSX.Element {
  


  const dispatch = useAppDispatch();
  

  !dataBeers.name &&
  localStorage.beersName && 
  (dataBeers.name = localStorage.beersName);
  

  useEffect(()=> { 
    dataBeers.name && dispatch(beersAction());
  }, [dataBeers.name]);


  
  return <div  className="App" >

    <Search />
    <Main />

  </div>
};



export default App;
