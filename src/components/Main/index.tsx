import { Route, Routes } from "react-router-dom";
import { routes } from "../../routes";
import Items from "./Items";
import Card from "./Card";
import s from './Main.module.scss';


function Main(): JSX.Element {
  


  return <main className={s.main}>

    <Routes>
      <Route path={'/'} element={ <>тут будет отображаться пиво</>} />
      <Route path={'/beers'} element={ <>тут будет отображаться пиво</>} />
      <Route path={'/beers' + routes.beer} element={ <Items />} />
      <Route path={'/beers' + routes.beer + routes.beerId} element={ <Card /> } />
      <Route path="*" element={ <>error</> } />
    </Routes>

  </main>
};



export default Main;