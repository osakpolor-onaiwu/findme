import React from "react";
import { Link } from "react-router-dom";

export default function Carousel() {
  return (
    <main className="contain home-about">
      <section className="row ">
        <div id="homeabout" className="col s12 m12 l5 center">
          <h3 className="center">About us</h3>
          <p>
            Ex duis mollit cupidatat minim velit est eiusmod ea. Sunt ea aute
            adipisicing cillum eiusmod minim reprehenderit anim duis Lorem est
            do.
          </p>

          <button className="center">
            <Link to="/about" className="white-text">
              Learn More
            </Link>
          </button>
        </div>

        <div id="home-about-img" className="col s12 m6 l7 hide-on-med-and-down">
          <img className="home-about-img-1" src="./connect.jpg" alt="connect" />
          <img className="home-about-img-2" src="./touch.jpg" alt="touch" />
        </div>
      </section>
    </main>
  );
}
