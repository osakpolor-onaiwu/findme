import React from "react";

export default function About() {
  return (
    <main className="about ">
      <section className="row contain">
        <div id="about" className="col s12 m6 l6 center">
          <h5 className="center">OUR MISSON</h5>
          <p>
            Ex duis mollit cupidatat minim velit est eiusmod ea. Sunt ea aute
            adipisicing cillum eiusmod minim reprehenderit anim duis Lorem est
            do.
          </p>
        </div>

        <div id="about-img" className="col s12 m6 l6 ">
          <img className="about-img-1" src="./new-connet.jpg" alt="connect" />
          <img className="about-img-2" src="./touch.jpg" alt="touch" />
        </div>
      </section>
      <section className="row middle-section ">
        <div className="col s12 m6 center">
          <h3>
            <strong>500</strong>
          </h3>
          <h6>Service Provider</h6>
        </div>
        <div className="col s12 m6 center">
          <h3>
            <strong>500</strong>
          </h3>
          <h6>Clients</h6>
        </div>
      </section>

      <section className="row third-section ">
        <div id="vision" className="col s12 m6 l6 ">
          <img
            className="about-img-vision-1"
            src="./new-connet.jpg"
            alt="touch"
          />
        </div>
        <div id="vision-text" className="col s12 m6 l6 center">
          <h5 className="center">OUR VISION</h5>
          <p>
            Ex duis mollit cupidatat minim velit est eiusmod ea. Sunt ea aute
            adipisicing cillum eiusmod minim reprehenderit anim duis Lorem est
            do.
          </p>
        </div>
      </section>

      <h5 className="center">OUR TEAM</h5>

      <section className="row bottom-section">
        <div>
          <img className="team-member" src="./touch.jpg" alt="team member" />;
          <h6>Victory</h6>
        </div>
        <div>
          <img className="team-member" src="./osas.jpg" alt="team member" />;
          <h6>Osakpolor</h6>
        </div>
        <div>
          <img className="team-member" src="./touch.jpg" alt="team member" />;
          <h6>Moses</h6>
        </div>
        <div>
          <img className="team-member" src="./touch.jpg" alt="team member" />;
          <h6>Hilary</h6>
        </div>
      </section>
    </main>
  );
}
