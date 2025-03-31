import React from 'react';
import './css/BudaItem.css';

function BudaItem({ item }) {
  const { name, image, description } = item;
  const imgSrc = image
    ? image.includes('http') ? image : `/images/index-imgs/${image}`
    : null;

  return (
    <section className="buda-item">
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      {imgSrc && <img src={imgSrc} alt={name} />}
    </section>
  );
}

export default BudaItem;
