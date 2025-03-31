import './css/Home.css';
import duomo from '../images/index-imgs/duomo.jpg';
import main from '../images/index-imgs/main.png';
import capp from '../images/index-imgs/capp.png';
import dumoClose from '../images/index-imgs/dumo-close.png';
import flight from '../images/index-imgs/flight.JPG';
import sunset from '../images/index-imgs/sunset.png';
import streetDuomo from '../images/index-imgs/street-duomo.JPG';

import React from 'react';


function Home() {
  return (
    <main id="content">
      <div id="slideshow">
        <img src={duomo} alt="Duomo" />
        <img src="" className="hidden" alt="" />
        <img src="" className="hidden" alt="" />
      </div>
      <h3>Welcome!</h3>
      <section id="main-content">
        <div className="text-content">
          <p>
              Hi and welcome! Whether you're planning your own study abroad adventure, reminiscing about past
              travels, or just curious about life in another country, you’re in the right place.
          </p>
          <p>
              Studying abroad is more than just going to class in a new place. It’s about discovering different
              cultures, making new memories, and stepping outside your comfort zone. Here, I’ll be sharing personal
              experiences, tips for navigating life in a new country, and insights on everything I was lucky enough
              to experience.
          </p>
          <p>
              I had the incredible opportunity to study in Florence, Italy, a city full of history, art, and amazing
              food. While abroad, I also traveled to nine other countries and explored countless cities, each with
              its own unique experiences. I’ve learned so much along the way, and I can’t wait to share those
              adventures with you!
          </p>
          <p>So grab a coffee, and join me on this journey. Let’s explore the world together!</p>
        </div>
        <div className="image-column">
          <img src={main} alt="Main collage" />
        </div>
      </section>
      <section id="gallery">
        <img src={capp} alt="Capp" className="gallery-image" />
        <img src={dumoClose} alt="Duomo Close" className="gallery-image" />
        <img src={flight} alt="Flight" className="gallery-image" />
        <img src={sunset} alt="Sunset" className="gallery-image" />
        <img src={streetDuomo} alt="Street Duomo" className="gallery-image" />
      </section>
    </main>
  );
}

//can't use class
export default Home; //when export, allows to import into another file to utilize
