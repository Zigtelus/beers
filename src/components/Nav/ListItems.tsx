import { useEffect } from "react";
import { beersFiveAction } from "../../redux/beersFive/beersFive.action";
import { useAppDispatch, useAppSelector } from "../../redux/redux";



type Props = {
  isNameBeer: string;
};



function ListItems({isNameBeer}: Props): JSX.Element {


  const dispatch = useAppDispatch();
  const beersFive = useAppSelector(state => state.beersFiveReducer.beers);
  

  useEffect(()=> {
    isNameBeer && dispatch(beersFiveAction());
  }, [isNameBeer]);

  
  if (!isNameBeer) return <></>;
  
  
  return <ul>
    {
      beersFive.length ? beersFive
      .filter((item, index) => index < 6)
      .map((item, index) => {
        return index < 5 ?
        <li key={item.id}>{item.name}</li> :
        <li key={item.id}>есть еще, кликакай на "поиск"</li> 
      }) :
      <>ничего не найдено</>
    }
  </ul>
};



export default ListItems;