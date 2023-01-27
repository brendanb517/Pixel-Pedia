import React from "react";
import GameCard from "./GameCard";

function GamesContainer({ games }){
    return(
        <>
        <ul>
            {games.map(game => {
                return (
                <GameCard
                key={game.title}
                name={game.title}
                image={game.image}
                developer={game.developer}
                rating={game.rating}
                platform={game.platforms.toString()}
                />)
            })}
        </ul>
        </>
    );
}

export default GamesContainer;