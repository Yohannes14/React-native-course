import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) =>{},
    removeFavorite: (id) => {}
});

function FavoritesContextProvider({children}) {
    const [favoriteMealIds, setFavoritemealIds] = useState([]);
    
    function addFavorite(id){
      setFavoritemealIds((prevFavIds) => [...prevFavIds, id]);
    }
    function removeFavorite(id) {
        setFavoritemealIds((prevFavIds) => 
        prevFavIds.filter(mealId => mealId !== id)
        );

    }

    const value ={
        ids: favoriteMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    };

    return <FavoritesContext.Provider value ={value}>
            {children}
       </FavoritesContext.Provider>
}
export default FavoritesContextProvider;