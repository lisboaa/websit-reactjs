import React from 'react';

import HeroSection from '../HeroSection'
import Precing from '../Precing';
import { homeObjOne  } from './Data'


function Services() {
    return (
        <>
            <Precing />
            <HeroSection {...homeObjOne} />
        </>
    )
}

export default Services;