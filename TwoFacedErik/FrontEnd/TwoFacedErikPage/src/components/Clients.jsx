import React from 'react';
import { clients } from '../data/data.jsx';
import ClientCard from './ClientCard';

export default function Clients() {
    return (
      <section className="work__section">
        <div className="work__header">
          <h3>This is some of the commissioned works for clients. <br></br> Have a look!</h3>
        </div>
        <div className="work__container">
          <div className="grid">
            {clients.map(({ id, name, image, url, time, description}) => (
              <div className="grid__item" key={id}>
                <ClientCard 
                  image={image}
                  name={name}
                  url={url}
                  id={id} 
                  time={time}
                  description={description}
                />    
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
