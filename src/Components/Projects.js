import React from "react";
import Pokemon from "../Asset/img/pokemon.png";
import weather from "../Asset/img/weather.png";
import Breweries from "../Asset/img/Breweries.png";
import Postalcode from "../Asset/img/Postalcode.png";
import { Button } from "react-bootstrap";
import { CodeUrl } from "./CodeUrl";

function Projects() {
  return (
    //  <--Project details-->
    <div className="projects-d py-1" id="Projects">
      <div className="container-fluid">
        <div className="text-center">
          <div className="project-details">Projects</div>
        </div>
        <div className="row post-grid d-flex justify-content-center ">
          {/* <--Pokemon project details-->  */}
          <div className="col-md-6 col-lg-2  card-box my-5 mx-4">
            <div className="proj-hd">Pokemon</div>
            <div className="d-flex justify-content-center my-5">
              <img src={Pokemon} className="proj-img" alt="" />
            </div>
            <div className="proj-button">
              <a href={CodeUrl.pokemonGit} target={CodeUrl.blank}>
                <Button type="button" variant="outline-success">
                  Source
                </Button>
              </a>
              <a
                href={CodeUrl.pokemonDeploy}
                target={CodeUrl.blank}
                className="m-2"
              >
                <Button type="button" variant="outline-success">
                  Deploy
                </Button>
              </a>
            </div>
          </div>

          {/* <--Weather project details-->  */}
          <div className="col-md-6 col-lg-2 card-box my-5 mx-4">
            <div className="proj-hd">Weather</div>
            <div className="d-flex justify-content-center my-5">
              <img src={weather} className="proj-img" alt="" />
            </div>
            <div className="proj-button">
              <a href={CodeUrl.weatherGit} target={CodeUrl.blank}>
                <Button type="button" variant="outline-success">
                  Source
                </Button>
              </a>
              <a
                href={CodeUrl.weatherDeploy}
                target={CodeUrl.blank}
                className="m-2"
              >
                <Button type="button" variant="outline-success">
                  Deploy
                </Button>
              </a>
            </div>
          </div>

          {/* <--Postal Code project details-->  */}
          <div className="col-md-6 col-lg-2  card-box my-5 mx-4">
            <div className="proj-hd">Postal code</div>
            <div className="d-flex justify-content-center my-5">
              <img src={Postalcode} className="proj-img" alt="" />
            </div>
            <div className="proj-button">
              <a href={CodeUrl.pincodeGit} target={CodeUrl.blank}>
                <Button type="button" variant="outline-success">
                  Source
                </Button>
              </a>
              <a
                href={CodeUrl.pincodeDeploy}
                target={CodeUrl.blank}
                className="m-2"
              >
                <Button type="button" variant="outline-success">
                  Deploy
                </Button>
              </a>
            </div>
          </div>

          {/* <--Breweries project details-->  */}
          <div className="col-md-6 col-lg-2  card-box my-5 mx-4">
            <div className="proj-hd">Breweries</div>
            <div className="d-flex justify-content-center my-5">
              <img src={Breweries} className="proj-img" alt="" />
            </div>
            <div className="proj-button">
              <a href={CodeUrl.breweriesGit} target={CodeUrl.blank}>
                <Button type="button" variant="outline-success">
                  Source
                </Button>
              </a>
              <a
                href={CodeUrl.breweriesDeploy}
                target={CodeUrl.blank}
                className="m-2"
              >
                <Button type="button" variant="outline-success">
                  Deploy
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
