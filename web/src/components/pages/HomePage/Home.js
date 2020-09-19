import React from 'react';

import HeroSection from '../HeroSection'
import Precing from '../Precing';
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour  } from './Data'

function Home() {
    return (
        <>
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjThree} />
            <HeroSection {...homeObjTwo} />
            <HeroSection {...homeObjFour} />
            <Precing/>
        </>
    )
}

export default Home;