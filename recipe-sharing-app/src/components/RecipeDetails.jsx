import { useRecipeStore } from '../store/recipeStore';
import { useParams, Link } from 'react-router-dom';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams(); // Get recipe ID from route
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(id))
  );

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />

      <br />
      <Link to="/">Back to Recipes</Link>
    </div>
  );
};

export default RecipeDetails;
