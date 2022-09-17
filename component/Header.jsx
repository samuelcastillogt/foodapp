import React from 'react';
import Link from "next/link"
import {GiSittingDog} from "react-icons/gi"
const Header = () => {
    return (
        <header>
          <p className='text-2xl'><GiSittingDog /></p>
        </header>
    );
};

export default Header;