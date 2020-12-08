import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {RootStore} from '../store';
import {GetPokemon} from './state/pokemonActions';
import styles from './Pokemon.module.scss';

export default function Pokemon() {
  const dispatch = useDispatch();
  const [pokemonName, setPokemonName] = useState('');

  const pokemonState = useSelector((state: RootStore) => state.pokemon);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setPokemonName(event.target.value);

  const handleSubmit = () => {
    dispatch(GetPokemon(pokemonName));
  }

  return (
    <div className={styles.divPokemon}>
      <input type='text' onChange={handleChange}/>
      <button onClick={handleSubmit}>Search</button>
      {pokemonState.pokemon && (
        <div>
          <img src={pokemonState.pokemon.sprites.front_default} alt='' />
          {pokemonState.pokemon.abilities.map(ability => {
            return <p className={styles.test}>{ability.ability.name}</p>
          })}
        </div>
      )}
    </div>
  )
}
