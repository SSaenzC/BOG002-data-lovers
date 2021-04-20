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
  return pokemons.filter (pokemon => pokemon.type.includes(opcionTipo));

 /* if(opcionTipo == 0){
    const tipoGrass = Pokemons.filter (pokemon => pokemon.type.includes("grass"));
    return tipoGrass
  }  
  if(opcionTipo == 1){
    const tipoPoison = Pokemons.filter (pokemon => pokemon.type == "poison");
    return tipoPoison
  }  */
}


