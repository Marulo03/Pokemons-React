import React, { useState, useEffect } from "react";
import CardList from "./CardList";
import axios from 'axios';
import SearchBox from "./SearchBox";



function App() {
    const [pokemons, setPokemons] = useState([]);
    const [searchfield, setSearchfield] = useState('');
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/?limit=120&offset=0');
    // const [nextUrl, setNextUrl] = useState();
    // const [prevUrl, setPrevUrl] = useState()

    const pokeFun= async()=> {
        setLoading(true)
        const res = await axios.get(url);
        // console.log(res.data.results)
        // setNextUrl(res.data.next);
        // setPrevUrl(res.data.previous);
        getPokemon(res.data.results);
        // setLoading(false)
        // console.log(pokemons)
    }
    const getPokemon=async(res)=>{
        res.map(async(item)=> {
            const result=await axios.get(item.url)
            //  console.log(result.data)
            setPokemons(state=> {
                state=[...state,result.data]
                state.sort((a, b) => a.id>b.id?1: -1)
                return state;
            })
        })
    }

    

    useEffect(() => {
        pokeFun();
    
       }, [url])

 
        
    

    const onSearchChange = (event) => {setSearchfield(event.target.value)}
        


    
    const filteredPokemons = Object.values(pokemons).filter(pokemon => {
      return pokemon.name.toLowerCase().includes(searchfield.toLowerCase());
    
    })
        
    return(
        <div className="tc">
            <h1 className="f1">Pokemons</h1>
            <SearchBox searchChange={onSearchChange}/>
            <CardList pokemons={filteredPokemons}/>
        </div>
    );
}

    
       


export default App;