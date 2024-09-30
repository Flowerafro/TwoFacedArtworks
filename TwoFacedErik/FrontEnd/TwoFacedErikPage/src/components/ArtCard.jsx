import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';


const ArtCard = React.memo(function ArtCard({ image, name, title, year, id, watermarkImage }) {
  const slug = React.useMemo(() => name.toLowerCase().replace(/ /g, ''), [name]);

  return (
    <>
      <Link to={`/ArtWork/${slug}`} className="grid__item__link">
        <LazyLoadImage src={image} alt={name} className="grid__item__img" />
      </Link>
      <p className="item__name">{title}{year}</p>
    </>
  );
});

export default ArtCard;