import React from "react";
import './Card.css'

const Card = ({ name, id, types, sprites }) => {
    
    return (
        
        
            <div className="Card">  
            
                <div>
                    <img src={sprites.front_default} alt='' />
                    <h1>{name}</h1>
                    <h1>PodeIndex #{id}</h1>
                    <h1>{types}</h1>
                
                
                

                
                
                
                
                
                
                </div>
            </div>
        
    );
}

export default Card;