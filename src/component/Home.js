import React from "react";
import "./home.css";
import nft from "../images/nft.gif";
import nftt from "../images/nftt.gif";
import hero from "../images/hero.gif";
import pirate from "../images/pirate.gif";

const Home = ({ learn, about }) => {
  return (
    <div>
      <div className="home-container">
        <div className="home-left-grid">
          {/** DISPLAYING DIFFERENT NFT GIFS */}
          <div className="home-left">
            <img className="home-image" src={nft} alt="" />
            <img className="home-image" src={nftt} alt="" />
            <img className="home-image" src={hero} alt="" />
            <img className="home-image" src={pirate} alt="" />
          </div>
        </div>
        <div className="home-right">
          <h1>N-Learn</h1>
          <span>
            A safe space to learn more about NFTs, blockchain, tokenomics, DeFi
            and crypto world
          </span>
          <div className="home-button">
            <button onClick={() => about()}>About</button>
            <button onClick={() => learn()}>Learn</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
