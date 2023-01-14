import React from "react";
import Card from "./Card";

const CardList = ({ pokemons }) => {

    
    return (
        <div>
            {
                pokemons.map((pokemon, poke_id) => {
                    return (
                        <Card
                            key={poke_id}   
                            name={pokemons[poke_id].name}
                            id={pokemons[poke_id].id}
                            sprites={pokemons[poke_id].sprites}
                            types={pokemons[poke_id].types.map(poke => {
                                return <span>{poke.type.name}</span>
                            })}
                            
                            
                            
                            
                             
                            
                        />

                    );
                })
            }
        </div>
    );
}
    
        
export default CardList;