import React, { useState } from 'react';
import '../pages/css/Italy.css';
import CityGallery from '../components/CityGallery';


function Italy() {
  const [selectedCity, setSelectedCity] = useState('');

  const cityData = {
    Rome: {
      text: "I visited Rome for my first overnight weekend trip Feburary 10th and 11th, 2024. Rome is a very historical place and you can feel it the second you get there. We were able to go to Vatican City and tour the Sistine Chapel. The artwork there is very beautiful and shocking. Our first night we did a cooking class where they taught us how to make carbonara and 3 different types of italian spritz. Day 2 we visited the Collesuim. It was shocking. I really enjoyed going around and learning about all the history.",
      images: [
        require('../images/italy/coll.JPG'),
        require('../images/italy/vatican.png'),
        require('../images/italy/cook.JPG')
      ]
    },
    Milan: {
      text: "Milan is the fashion capital of Italy, known for its stunning architecture and shopping.",
      images: ["https://picsum.photos/160/160?random=3", "https://picsum.photos/160/160?random=4"]
    },
    Naples: {
      text: "Naples is famous for its pizza, rich culture, and views of Mount Vesuvius.",
      images: ["https://picsum.photos/160/160?random=5", "https://picsum.photos/160/160?random=6"]
    },
    Venice: {
      text: "Venice is a unique floating city with charming canals and gondolas.",
      images: ["https://picsum.photos/160/160?random=7", "https://picsum.photos/160/160?random=8"]
    },
    Amalfi: {
      text: "The beaches in Amalfi are some of the most beautiful in the world.",
      images: ["https://picsum.photos/160/160?random=9", "https://picsum.photos/160/160?random=10"]
    },
    "Lake Como": {
      text: "Lake Como is a picturesque lake surrounded by mountains and villas.",
      images: ["https://picsum.photos/160/160?random=11", "https://picsum.photos/160/160?random=12"]
    },
    Montepulciano: {
      text: "Montepulciano is a stunning hilltop town known for its wine and medieval charm.",
      images: ["https://picsum.photos/160/160?random=13", "https://picsum.photos/160/160?random=14"]
    }
  };

  return (
    <main id="italy-page">
      <div className="italy-container">
        <section className="columns three italy-top">
          <nav id="cities">
            <ul>
              {Object.keys(cityData).map((city) => (
                <li key={city}>
                  <button
                    className={selectedCity === city ? 'active' : ''}
                    onClick={() => setSelectedCity(city)}
                  >
                    {city}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

            {selectedCity && (
                <CityGallery city={selectedCity} data={cityData[selectedCity]} />
            )}

        </section>

        <section id="italy-map">
          <iframe
            title="Map of Italy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12367655.229886828!2d2.1005533791262603!3d40.81814263269979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d4fe82448dd203%3A0xe22cf55c24635e6f!2sItaly!5e0!3m2!1sen!2sus!4v1742742013099!5m2!1sen!2sus"
            width="300"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </div>
    </main>
  );
}

export default Italy;
