import { NavLink } from "react-router-dom";
import product from "../../../hoks/product";
import { useAppSelector } from "../../../redux/redux";
import { routes } from "../../../routes";
import s from './Item.module.scss';



function Items(): JSX.Element {


  const selector = useAppSelector(state => state.beersReducer);
  const {beers, loading} = selector;


  if (!beers[1]) return <>Введите что-то в поиск</>


  const description = (str: string)=> {
    return str.length > 140 ? 
    str.slice(0, 140) + '...' :
    str;
  };
  


  return <div className={s.items}>

    { 
      beers.map(item => {
        const Product = product({image_url: item.image_url, name: item.name, description: description(item.description)})
        
        return <NavLink
          key={item.id}
          to={'/beers' + routes.beer + '/' + item.id}
          className={s.item}
        >
          
          <Product firstClass={s.container} secondClass={s.picture} />
        </NavLink>
      })
    }

  </div>
};



export default Items;