import { useState, useEffect } from 'react';
import React, { Suspense, lazy } from 'react';
//import { artworks } from '../data/data.jsx';
import ArtCard from './ArtCard';
import { fetchArtworks } from '../sanity/artworkServices.js';

export default function Work() {

  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    fetchArtworks().then((data) => {
      setArtworks(data);
    });
  }, []);

    return (
      <section className="work__section">
        <div className="work__container">
          <div className="grid">
          <Suspense fallback={<div>Loading...</div>}>
            {artworks.sort((a, b) => a.id - b.id).map(({ _id, id, name, imageUrl, watermarkImageUrl, title }) => (
              <div className="grid__item" key={_id}>
                <ArtCard 
                  image={imageUrl}
                  imagewatermark={watermarkImageUrl}
                  name={name}
                  title={title}
                  id={id} 
                />    
              </div>
            ))}
             </Suspense>
          </div>
        </div>
      </section>
    );
  }
