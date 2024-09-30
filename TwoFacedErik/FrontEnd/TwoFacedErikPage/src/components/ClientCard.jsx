import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';


export default function ClientCard({ id, name, image, url, time, description}) {

  const slug = React.useMemo(() => name.toLowerCase().replace(/ /g, ''), [name]);
  console.log(slug);

    return (
   <>
    <Link to={`/ClientWork/${slug}`} className="grid__item__link">
        <LazyLoadImage src={image} alt={name} className="grid__item__img"/> 
      </Link>
      <p className="item__name">{name}-{time}</p>
      
   </>
    );
  }