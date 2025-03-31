import React, { useEffect, useState } from 'react';
import '../pages/css/Euro.css';
import BudaItem from '../components/BudaItem';

import img1 from '../images/budapest/IMG_5234.jpg';
import img2 from '../images/budapest/IMG_5239.jpg';
import img3 from '../images/budapest/IMG_5250.jpg';
import { useNavigate } from 'react-router-dom';

function Budapest() {
  const [budaData, setBudaData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBuda = async () => {
      try {
        const res = await fetch('https://mollyfm12.github.io/csce242/json/budapest.json');
        const data = await res.json();
        setBudaData(data);
      } catch (error) {
        console.error('Error fetching JSON:', error);
      }
    };
    fetchBuda();
  }, []);

  return (
    <main>
      <button id="back-button" onClick={() => navigate('/euro')}>
        Back
      </button>

      <div id="budapest-page">
        <section id="budapest-section">
          <p id="budapest-p">
            Budapest was the first city outside of Italy I traveled to. I visited March 1st through March 3rd...
            We had a really long travel day getting there. We took an overnight train, but we accidentally booked
            3 change of trains, so it was a very tiring travel journey. The first train was very cool: it looked like
            something out of Hogwarts. By the time we got there, we checked into our Airbnb and got breakfast. We went
            to a cafe and it had very American breakfast options. I got an avocado toast rendition and a cappuchino.
          </p>

          <div id="buda-section">
            {budaData.map((item, index) => (
              <BudaItem key={index} item={item} />
            ))}
          </div>
        </section>

        <div id="image-stack">
          <img src={img1} className="image-to-stack" alt="Budapest 1" />
          <img src={img2} className="image-to-stack" alt="Budapest 2" />
          <img src={img3} className="image-to-stack" alt="Budapest 3" />
        </div>
      </div>
    </main>
  );
}

export default Budapest;
