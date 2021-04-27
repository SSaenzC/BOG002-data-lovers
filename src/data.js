// estas funciones son de ejemplo


/*export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};*/

export const filtrarNombre = (name, pokemons) => {
  return pokemons.filter(pokemon => pokemon.name.includes(name));
}

export const filtrarTipo = (opcionTipo, pokemons) => {
  return pokemons.filter (pokemon => pokemon.type.includes(opcionTipo))
}

function compararAparicion (firstItem, secondItem){
  return secondItem["spawn-chance"] - firstItem["spawn-chance"];
}
export const organizarAparicion = (pokemons) =>{
  return pokemons.sort (compararAparicion);
}

export const filtrarDebilidad = (debilidad, pokemons) => {
  return pokemons.filter(pokemon => pokemon.weaknesses.includes(debilidad));
}

//sortData(data, sortBy, sortOrder)
