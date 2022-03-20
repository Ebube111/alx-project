import React, { useState } from "react";
import Card from "../card/Card";
import "./learn.css";
import nft from "../../images/nft.gif";
import eth from "../../images/eth.gif";
import defi from "../../images/defi.gif";
import solidity from "../../images/solidity.gif";
import opensea from "../../images/opensea.png";
import arrowRight from "../../images/arrow-righ-circle.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    image: nft,
    title: "NFT",
    subtitle: "Learn more about non fungible tokens",
    href: "https://www.udemy.com/course/introduction-to-nfts-non-fungible-tokens/?utm_source=adwords&utm_medium=udemyads&utm_campaign=DSA_Catchall_la.EN_cc.ROW&utm_content=deal4584&utm_term=_._ag_88010211481_._ad_535397282061_._kw__._de_c_._dm__._pl__._ti_dsa-41250778272_._li_1010298_._pd__._&matchtype=&gclid=CjwKCAjwoduRBhA4EiwACL5RPytNfoF7OyLdp5i-9rvDJAqk0CKTdRO4mJtAmzDnX6j1hDWEFs6CihoCF5sQAvD_BwE",
  },
  {
    image: eth,
    title: "Blockchain",
    subtitle: "Learn more about blockchain",
    href: "https://www.udemy.com/course/build-your-blockchain-az/",
  },

  {
    image: defi,
    title: "DeFi",
    subtitle: "Learn more about Decentralized Finance",
    href: "https://hedera.com/learning/what-is-decentralized-finance?utm_term=decentralised%20finance&utm_campaign=Learning+Center:+DeFi&utm_source=adwords&utm_medium=ppc&hsa_acc=1782665900&hsa_cam=12504257492&hsa_grp=117632711023&hsa_ad=504664969895&hsa_src=g&hsa_tgt=kwd-893147833137&hsa_kw=decentralised%20finance&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjwoduRBhA4EiwACL5RP6EZogiZo6wDQNyHze7TQi5mZlCGuZuaN1cDBRSa-FC-GUMfXHmmkhoC2-IQAvD_BwE",
  },
  {
    image: opensea,
    title: "OpenSea",
    subtitle:
      "explore the Largest NFT marketplace, for minting, buying and selling",
    href: "https://www.opensea.io",
  },
  {
    image: solidity,
    title: "Solidity",
    subtitle: "Learning more about Blockchain Programming from Dapp University",
    href: "https://www.youtube.com/c/DappUniversity",
  },
];

const Learn = () => {
  const [sliderRef, setSliderRef] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const conditions = {
    arrows: false,
    dots: false,
    speed: 1000,
    slidesToShow: 3,
    infinite: data.length > 3,
    autoplay: true,
    slidesToScroll: 1,
    className: "slider",
    afterChange: (current) => setCurrentIndex(current),
    responsive: [
      {
        breakpoint: 1755,
        settings: {
          slidesToShow: 2,
          infinite: data.length > 2,
        },
      },
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 1,
          infinite: data.length > 1,
        },
      },
    ],
  };
  return (
    <div id="learn" className="learn-container">
      <div className="learn-header">
        <h1>Learning /Resources</h1>
      </div>
      <div className="slide-container">
        <Slider ref={setSliderRef} {...conditions}>
          {data.map(({ image, title, subtitle, href }) => (
            <Card image={image} title={title} subtitle={subtitle} href={href} />
          ))}
        </Slider>
        <div className="profile-projects-controllers">
          <div>
            <img
              onClick={sliderRef?.slickPrev}
              style={{ transform: "rotate(180deg)" }}
              src={arrowRight}
              alt="control"
            />
            <p>
              {data.length > 3 ? `${currentIndex + 1}/${data.length}` : "1/1"}
            </p>
            <img
              onClick={sliderRef?.slickNext}
              src={arrowRight}
              alt="control"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
