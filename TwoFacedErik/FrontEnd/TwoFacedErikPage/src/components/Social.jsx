import React from 'react';
import { social } from '../data/data.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Social() {
    return (
       <div className="social__links">
         {social.map(({ id, url, icon }) => (
               <a href={url} key={id} target="_blank" rel="noopener noreferrer" className="links">
                    <FontAwesomeIcon icon={icon}/>
                </a>
            ))}
       </div>
    )
}