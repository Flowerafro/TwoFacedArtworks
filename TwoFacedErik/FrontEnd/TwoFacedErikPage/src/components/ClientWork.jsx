import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { clients } from '../data/data.jsx';

export default function ClientWork() {


    const { slug } = useParams();
    console.log(slug);

    const clientIndex = useMemo(() => {
        return clients.findIndex(client => client.name.toLowerCase().replace(/ /g, '') === slug);
      }, [slug]);

      if (clientIndex === -1) {
        return <p>Client not found</p>;
      }
      const client = clients[clientIndex];
   
    return (
        <>
        <section className="client__section" >
            <div className="client__container" >
                <img src={client.image} alt={`${client.name} work`} effect='blur' width="200px" height="auto"/>
                <div className="client__info">
                    <p >"{client.name}"</p>
                    <p >"{client.time}"</p>
                    <p >"{client.description}"</p>
                    <a href={client.url}>Check em out</a>
                </div>
            </div> 
        </section>
      </>
    )
}