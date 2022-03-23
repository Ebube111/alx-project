import React from "react";
import "./about.css";
import pirate from "../../images/pirate.gif";

const About = () => {
  return (
    <div id="about" className="about-container">
      {/** ABOUT SECTION PAGE */}
      <div className="about-image">
        <img src={pirate} alt="" />
      </div>
      <div className="about-text">
        <h1>About us</h1>
        <div className="about-span">
          <span>
            At N-learn, we make it easier to find resources on learning NFTs,
            Blockchain and so much more.
          </span>
        </div>
        <ul className="list">
          <li>We teach people about NFTS, what they are, how to invest.</li>
          <li>Also people looking to go into the blockchain space.</li>
          <li>
            We also teach the Defi, and CeFi networks and how important they are{" "}
          </li>
          <li>We also teach about tokenomics</li>
          <li>How and where to invest</li>
          <li>What does it mean to Mint Nfts</li>
          <li>Whats the difference between fungible and non fungible tokens</li>
          <li>Resources on how to start learning blockchain development</li>
          <li>We share all Resources and so much more...</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
