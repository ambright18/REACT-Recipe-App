import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-item";

const Home = () => {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading) return <div>Loading... Please wait.</div>;

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem item={item} />)
      ) : (
        <idv>
          <p className="lg:text 4xl text-xl text-center text-black font-extrabold">
            Nothing to show. Please search something
          </p>
        </idv>
      )}
    </div>
  );
};

export default Home;
