import React from "react";
import img from "../../../header-img/team.png";

const Banner = () => {
  return (
    <section className="banner d-inline-block py-3" id="home">
      <div className="container ">
        <div className="banner-container">
          <div>
            <h1> We are here for your care</h1>
            <p>
              We are always ready to serve you, all our team members are very
              hardworking, they do their best all the time. Come to our website
              for the health care of any of your drones.
            </p>
          </div>
          <div>
            <img className="mt-4" src={img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
