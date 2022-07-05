import { IRestuarant } from "./IRestuarant";

const RecipeComponent = (props: { restuarant: IRestuarant }) => {
  const { restuarant } = props;
  return (
    <div className="recipe">
      <div className="title">
        <img src={restuarant.thumbnail || 'http://localhost:3000/placeholder.jpg'} alt={restuarant.title} />
        <p>{restuarant.title}</p>
      </div>
      {restuarant.ingredients &&
        <ul>
          {restuarant.ingredients.split(',').map(ingredient => <li>{ingredient}</li>)}
        </ul>
      }
      <a href={restuarant.href} target="_bla">View Recipe</a>
    </div>
  )
};

export default RecipeComponent;