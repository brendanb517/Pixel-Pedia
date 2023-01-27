import React, { useState, } from "react";

function GameForm(){
    const [formData, setFormData] = useState({});
    const [gameName, setGameName] = useState("");
    function handleNameChange(event){
        setGameName(event.target.value);
    }

    const [gameImage, setGameImage] = useState("");
    function handleImageChange(event){
        setGameImage(event.target.value);
    }

    const [gameDev, setGameDev] = useState("");
    function handleDevChange(event){
        setGameDev(event.target.value);
    }
    const [gameRating, setGameRating] = useState("");
    function handleRatingChange(event){
        setGameRating(event.target.value);
    }

    const [gamePlatform, setGamePlatform] = useState("");
    function handlePlatformChange(event){
        setGamePlatform(event.target.value);
    }

    function handleSubmission(event){
        event.preventDefault();
        setFormData({
            title: gameName,
            image: gameImage,
            developer: gameDev,
            rating: gameRating,
            platforms: gamePlatform
        })
        fetch("http://localhost:3000/games",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(formData)})
        }

    return (
        <form name="game-form" onSubmit={handleSubmission}>
            <label htmlFor="name"></label>
            <input type="text" id="name" value={gameName} onChange={handleNameChange}/>
            <label htmlFor="image"></label>
            <input type="text" id="image" value={gameImage} onChange={handleImageChange}/>
            <label htmlFor="developer"></label>
            <input type="text" id="developer" value={gameDev} onChange={handleDevChange}/>
            <label htmlFor= "rating"></label>
            <input type="text" id="rating" value={gameRating} onChange={handleRatingChange}/>
            <label htmlFor="platform"></label>
            <input type="text" id="platform" value={gamePlatform} onChange={handlePlatformChange}/>
            <input type="submit" />
        </form>
    );
}

export default GameForm;