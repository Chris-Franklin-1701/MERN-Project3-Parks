import React from "react";

const PortfolioPage = () => {
    return (
        <div className="overlay">
            <div className="Portfolio" style={{textAlign: "center", alignItems: "center", display: "flex", flexDirection: "column", backgroundImage: `url("https://www.stefanbaumann.com/wp-content/uploads/2014/07/Crater-Lake.jpg")`, backgroundRepeat: "no-repeat", backgroundSize: "cover",}}>
                <h1 style={{textAlign: "center", alignItems: "center",padding: "75px 25px 65px 25px"}}>Please visit our team's portfolios:</h1>
                    <a href="https://alexcwik.github.io/my_portfolio/" target="blank" style={{padding: "25px", fontSize: "3.5rem", color: "darkblue"}}>Alex Cwiklinski</a>
                    <a href="https://christopherfranklin.dev" target="blank" style={{padding: "25px", fontSize: "3.5rem", color: "darkblue"}}>Christopher Franklin</a>
                    <a href="https://seancraig.me" target="blank" style={{padding: "25px", fontSize: "3.5rem", color: "darkblue"}}>Sean Craig</a>
                    <a href="https://stewsabatino.github.io//" target="blank" style={{padding: "25px", fontSize: "3.5rem", color: "darkblue"}}>Stew Sabatino</a>
            </div>
        </div>
    )


};


export default PortfolioPage;