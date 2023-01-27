import React from "react";
// import NavBar from "./NavBar";

function Header(){
    return(
        <header className="App-header">
            <h1>PIXEL-PEDIA</h1>
            <h4>The Gaming Encyclopedia</h4>
            {/* <NavBar /> */}
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >Learn React</a>
        </header>
    );
}

export default Header;