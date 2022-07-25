import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useTimeout from "../../hoks/useTimeout";
import { beersAction } from "../../redux/beers/beers.action";
import { dataBeers } from "../../redux/creatApi";
import { useAppDispatch, useAppSelector } from "../../redux/redux";
import { routes } from "../../routes";
import ListItems from "./ListItems";
import s from './Nav.module.scss';




function Search(): JSX.Element {


  const inputSearch = useRef<HTMLInputElement | null>(null);
  const [isNameBeer, setNameBeer] = useState<string>('');
  const [isErrorMessage, setErrorMessage] = useState<boolean>(false);
  const beersFive = useAppSelector(state => state.beersFiveReducer.beers);


  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const timeout = useTimeout(700);

  
  dataBeers.name && localStorage.setItem('beersName', dataBeers.name);


  const searchHandler = ()=> {
    const value = inputSearch.current ? inputSearch.current.value : '';
    dataBeers.beersFive = value;
    setNameBeer(value);
    setErrorMessage(false);
  };


  const showBearHandler = ()=> {

    if (beersFive.length) {
      inputSearch.current && 
      (dataBeers.name = inputSearch.current.value.trim());

      navigate('/beers' + routes.beer);
      dispatch(beersAction());
    } else {
      setErrorMessage(true);
    };
    
  };



  return <nav className={s.nav}>

    <input 
      type="search"
      placeholder="введите название пива"
      ref={inputSearch}
      onChange={()=> timeout(searchHandler)}
    />


    <ListItems isNameBeer={isNameBeer} />


    <button onClick={showBearHandler} > поиск </button>
    {isErrorMessage && <span className={s.message}>ну не найдено ничего, чего ты тыкаешь?</span>}
      
  </nav>
};



export default Search;