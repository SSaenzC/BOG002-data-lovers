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
}


export const organizarEncounter = (arrayEnconter, pokemons) =>{
  return pokemons.sort (arrayEnconter);
}
 
// export const arrayTop = (encounter, pokemons) => {
//   return pokemons.map (pokemons => pokemon.encounter== encounter);
// }
 
//  personajes.map(personajes => {
//     return personajes.encounter
//   })
  //console.log(encounter);
 /* if(opcionTipo == 0){
    const tipoGrass = Pokemons.filter (pokemon => pokemon.type.includes("grass"));
    return tipoGrass
  }  
  if(opcionTipo == 1){
    const tipoPoison = Pokemons.filter (pokemon => pokemon.type == "poison");
    return tipoPoison
  }  */
