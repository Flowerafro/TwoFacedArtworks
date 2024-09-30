import React from 'react';
import { about } from '../data/data.jsx';

export default function About(){
    return (
        <>
        <section className="about__section">
            <div className="about__container">
                        {about.map(({id, name, role, place, image, alt, mail, IG}) => (
                            <div className="about__box" key={id}>
                                <div className="title__container">
                                    <div className="title__box">
                                        <h2>{name}</h2>
                                        <h3>{role}</h3>
                                        <p>{place}</p>
                                    </div>
                                    <hr />
                                    <div className="title__box">
                                        <h2>Find me:</h2>
                                        <a href={mail} target="_blank">@e-mail</a>
                                        <a href={IG} target="_blank">@twofacedartwork</a>
                                    </div>
                                </div>
                                
                                <div className="about__img">
                                    <img src={image} alt={alt} />
                                </div>
                            </div>
                        ))}
            </div>

        </section>
     
        </>
    )
}

