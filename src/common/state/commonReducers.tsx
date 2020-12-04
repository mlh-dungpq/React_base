import {combineReducers} from 'redux';
import pokemonReducer from '../../pokemon/state/pokemonReducer';
import postReducer from '../../post/state/postReducer';

const RootReducer = combineReducers({
  pokemon: pokemonReducer,
  post: postReducer
});

export default RootReducer;