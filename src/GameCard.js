import React from "react";

function GameCard({ name, image, developer, rating, platform }){
    function handleClick(event){
        event.preventDefault();
    }

    return(
        <li >
            <img src={image} alt={name} onClick={handleClick}/>
            <h3>{name}</h3>
            <p>Developer: {developer}</p>
            <p>Rating: {rating}</p>
            <p>Platforms: {platform.toString()}</p>
        </li>
    );
}

export default GameCard;