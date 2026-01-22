import React from "react";
import Image from "../assets/Hours/Image.svg";

function Hours() {
  return (
    <section className="security">
      <header>
        <h2>
          Working <br className="desktop" /> Hours
        </h2>
        <p>
          Always open to meaningful conversations and collaborations, with the
          below working hours to connect, exchange ideas, and build safer,
          smarter solutions together as per your convenience.
        </p>
      </header>
      <div className="hours-img">
        <img src={Image} alt="working hours" />
      </div>
    </section>
  );
}

export default Hours;
