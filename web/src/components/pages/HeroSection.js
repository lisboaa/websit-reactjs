import React from 'react';

import { Button } from './Button';
import { Link } from 'react-router-dom';

import imagem from '../../assets/images/svg-1.svg';
import './HeroSection.css';

function HeroSection({
    lightBg, topLine, lightText, lightTextDesc, headline, description,
    buttonLabel, img, alt, imgStart
}) {
    return(
        <>
            <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
                <div className='container'>

                    <div className='col'>
                        <div className='home__hero-text-wrapper'>
                            <div className='top-line'>
                                {topLine}
                            </div>
                            <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                            <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>
                                {description}
                                <Link to='/sign-up'>
                                    <Button buttonSize='btn--wide' buttonColor='blue'>
                                        {buttonLabel}
                                    </Button>
                                </Link>
                            </p>
                        </div>
                    </div>

                    <div className='col'>
                        <div className='home__hero-img-wrapper'>
                            <img src={imagem} alt={alt} className='home__hero-img'/>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default HeroSection;