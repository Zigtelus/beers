

type Argu = {
  image_url?: string;
  name?: string;
  tagline?: string;
  description?: string;
  abv?: number;
  food_pairing?: string[];
}

type Props = {
  firstClass?: string;
  secondClass?: string;
  thirdClass?: string;
}


function product (argu: Argu) {

  return ({firstClass, secondClass, thirdClass}: Props): JSX.Element => {
    
    return <>
      <div className={firstClass}>
        <div className={secondClass}>
          <img src={argu.image_url} alt="beer" />
        </div>

        <div className={thirdClass}>
          {argu.name && <span>{argu.name}</span>}
          {argu.tagline && <span>{argu.tagline}</span>}
          {argu.abv && <span>{argu.abv}</span>}
          {argu.food_pairing && <span>{argu.food_pairing}</span>}
          {argu.description && <p>{argu.description}</p>}
        </div>
      </div>
    </>
  }

}


export default product;