import { useRef } from "react";
import "./App.css";
import About from "./component/about";
import Footer from "./component/footer/Footer";
import Home from "./component/Home";
import Learn from "./component/learn/Learn";

function App() {
  const aboutScroll = useRef(null);
  const learnScroll = useRef(null);
  const footerScroll = useRef(null);
  const onaboutClick = () =>
    aboutScroll.current.scrollIntoView({ behavior: "smooth" });

  const onLearnClick = () =>
    learnScroll.current.scrollIntoView({ behavior: "smooth" });
  const onFooterClick = () =>
    footerScroll.current.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="container">
      <div className="nav-wrapper">
        <div className="nav-logo">
          <h1>N-Learn</h1>
        </div>
        <div className="nav-options">
          <button onClick={onaboutClick}>About</button>
          <button onClick={onLearnClick}>Learn</button>
          <button onClick={onFooterClick}>Contact Info</button>
        </div>
      </div>
      <div className="sections">
        <Home about={onaboutClick} learn={onLearnClick} />
        <div ref={aboutScroll}>
          <About />
        </div>
        <div ref={learnScroll}>
          <Learn />
        </div>
        <div ref={footerScroll}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
