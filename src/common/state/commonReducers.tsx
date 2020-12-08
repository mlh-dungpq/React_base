import { combineReducers } from "redux";
import pokemonReducer from "../../pokemon/state/pokemonReducer";
import postReducer from "../../post/state/postReducer";
import authReducer from "_services/auth/authReducers";

const RootReducer = combineReducers({
  pokemon: pokemonReducer,
  post: postReducer,
  auth: authReducer,
});

export default RootReducer;
