import { useParams } from "react-router-dom";
import product from "../../../hoks/product";
import { useAppSelector } from "../../../redux/redux";
import s from './Card.module.scss';




function Card(): JSX.Element {
  

  const { beerId } = useParams();


  const beers = useAppSelector(state => state.beersReducer.beers);
  const item = beers.filter(item => item.id === Number(beerId))[0];

  if (!item) return <>Введите что-то в поиск</>

  
  const Product = product({...item});
  return <Product firstClass={s.container} secondClass={s.picture} thirdClass={s.description}/>
};



export default Card;