// estas funciones son de ejemplo


/*export const example = () => {
  return 'example';
};
export const anotherExample = () => {
  return 'OMG';
};*/

export const filtrarNombre = (name, Pokemons) => {
  return Pokemons.filter(Pokemon => Pokemon.name === name);
}

export const filtrarTipo = (tipo, Pokemons) => {
return Pokemons.filter (pokemon => pokemon.type === type);
}

//console.log(filterType);