import React from "react";

function About() {
  return (
    //  <--About page details-->
    <div className="container-fluid py-5" id="about">
      <h2 className="d-flex justify-content-center about-title my-5">About</h2>
      &nbsp; &nbsp;
      <div className="row mx-2 details-me">
        <div className="col-lg-6 offset-lg-0 ">
          <h1 className="fw-white" style={{ color: "white" }}>
            Vishnu Priya S
          </h1>
          <h5 className="color-blue mb-3">Full Stack developer</h5>
          <p className="" style={{ color: "white" }}>
            I have a deep passion for full stack development.Through practice
            and personal projects I honed my skills as a programmer.I can easily
            adapt to new things and always ready to take on a challenge
          </p>
          <ul className="theme-list">
            <li>
              <b className="color-green">From:</b> Hosur, Tamilnadu.
            </li>
            <li>
              <b className="color-green">Lives In:</b> Hosur, Tamilnadu.
            </li>
            <li className="color-green">
              <b>Age:</b> <span style={{ color: "white" }}>24</span>
            </li>
            <li>
              <b className="color-green">Gender:</b> Female
            </li>
          </ul>
        </div>
      </div>
      {/* <--Education details-->  */}
      <div className="container pt-5">
        <div className="row ">
          <div className="col-md-6 color-white">
            <h2 className="fw-normal">Education</h2>
            <ul className="timeline mt-4 pr-md-5">
              <li>
                <div className="title">2015-18</div>
                <div className="details">
                  <h5 className="color-blue">Bachelor of Commerce (Honours)</h5>
                  <small className="">Alliance University,Bangalore</small>
                </div>
              </li>
              &nbsp;
              <li>
                <div className="title">2015</div>
                <div className="details">
                  <h5 className="color-blue">Higher Secondary (+2)</h5>
                  <small className="">SSV School,TamilNadu</small>
                </div>
              </li>
            </ul>
          </div>

          {/* <--Experience details-->  */}
          <div
            className="col-md-6 wow fadeInRight color-white"
            data-wow-delay="200ms"
          >
            <h2 className="fw-normal">Experience</h2>
            <ul className="timeline mt-4 pr-md-5">
              <li>
                <div className="title">2020-21</div>
                <div className="details">
                  <h5 className="color-blue">Accountant</h5>
                  <small className=" ">
                    Advaith International Academy,Hosur,TamilNadu
                  </small>
                </div>
              </li>
              &nbsp;
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
