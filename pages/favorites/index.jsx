import RecipeItem from "../../components/recipe-item";
import { GlobalContext } from "../../context";
import { useContext } from "react";

const Favorites = () => {
   const { favoritesList } = useContext(GlobalContext);
 
   return (
     <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
       {favoritesList && favoritesList.length > 0 ? (
         favoritesList.map((item) => <RecipeItem item={item} />)
       ) : (
         <idv>
           <p className="lg:text 4xl text-xl text-center text-black font-extrabold">
             Nothing is addded in favorites.
           </p>
         </idv>
       )}
     </div>
   );
  
}

export default Favorites;