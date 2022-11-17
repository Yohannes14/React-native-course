
import favoritesReducer from './Favorite';
export const store = configureStore({
    reducer: {
        favoritMeals: favoritesReducer
    }
});