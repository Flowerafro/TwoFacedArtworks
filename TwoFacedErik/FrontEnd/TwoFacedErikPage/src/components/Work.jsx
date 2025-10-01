import React, { Suspense } from 'react';
import { artworks } from '../data/data.jsx';
import ArtCard from './ArtCard';

export default function Work() {

  return (
    <section className="work__section">
      <div className="work__container">
        <div className="grid">
          <Suspense fallback={<div>Loading...</div>}>
            {artworks.sort((a, b) => a.id - b.id).map(({ id, name, image, watermark, title }) => (
              <div className="grid__item" key={id}>
                <ArtCard
                  image={image}
                  imagewatermark={watermark}
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
