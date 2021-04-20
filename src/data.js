// estas funciones son de ejemplo


/*export const example = () => {
  return 'example';
};
export const anotherExample = () => {
  return 'OMG';
};*/

export const filtrarNombre = (name, Pokemons) => {
  return Pokemons.filter(Pokemon => Pokemon.name.includes(name));
}

export const filtrarTipo = (opcionTipo, Pokemons) => {
  if(opcionTipo == 0){
    const tipoGrass = Pokemons.filter (pokemon => pokemon.type == "grass");
    return tipoGrass
  }  
  if(opcionTipo == 1){
    const tipoPoison = Pokemons.filter (pokemon => pokemon.type == "poison");
    return tipoPoison
  }  
}





/*export const ordenarAlfabeticamente = (prev, next) => {
if (prev.name > next.name){
  return 1;
}
if (prev.name < next.name){
  return
}


}*/

