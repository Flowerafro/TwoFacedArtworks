import React, {useState, useEffect} from 'react';
import Logo from './Logo';
import Nav from './Nav';
import Social from './Social';

export default function Header() {

    return (
       <>
       
        <div className="logo__container">
            <Logo />
        </div>
        <div className="nav__bar">
            <Nav />
            <Social />
        </div>       
       </>
    );
}
