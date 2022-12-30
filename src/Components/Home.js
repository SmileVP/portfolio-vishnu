import React from "react";
import Resume from "../Asset/cv/Vishnupriya Resume.pdf";

function Home() {
  return (
    // <--Home page details-->
    <div className="d-flex justify-content-center " id="home">
      <div className="caption-header">
        <div className="home-hd">Welcome!</div>
        <h2>
          I'm <span className="name-hd">Vishnu</span> Priya S
        </h2>
        <h4 className="stack-hd">Full stack developer</h4>
        <a href={Resume} download="Resume">
          <button type="button" className="btn btn-danger btn-lg btn-block">
            Download Cv
          </button>
        </a>
      </div>
    </div>
  );
}

export default Home;
