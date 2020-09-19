import React from 'react';

import { Link } from 'react-router-dom';

import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';

import { Button } from './Button';

import './Precing.css';

function Precing() {
    return(
        <IconContext.Provider value={{color: '#ffff', size: 64}}>
            <div className='precing__section'>
                <div className='precing__wrapper'>
                    <h1 className='precing__heading'>Precing</h1>
                    <div className='precing__container'>
                        <Link to='/sign-up' className='precing__container-card'>
                            <div className='precing__container-cardInfo'>
                                <div className='icon'>
                                    <FaFire/>
                                </div>
                                <h3>Starter</h3>
                                <h4>$8.99</h4>
                                <p>per month</p>
                                <ul className='precing__container-features'>
                                    <li>100 Transactions</li>
                                    <li>2% Cash Back</li>
                                    <li>$10,00 Limit</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='primary'>
                                    Choose Plan
                                </Button>
                            </div>
                        </Link>

                        <Link to='/sign-up' className='precing__container-card'>
                            <div className='precing__container-cardInfo'>
                                <div className='icon'>
                                    <BsXDiamondFill/>
                                </div>
                                <h3>Gold</h3>
                                <h4>$29.99</h4>
                                <p>per month</p>
                                <ul className='precing__container-features'>
                                    <li>100 Transactions</li>
                                    <li>3.5% Cash Back</li>
                                    <li>$100,00 Limit</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='blue'>
                                    Choose Plan
                                </Button>
                            </div>
                        </Link>

                        <Link to='/sign-up' className='precing__container-card'>
                            <div className='precing__container-cardInfo'>
                                <div className='icon'>
                                    <GiCrystalize/>
                                </div>
                                <h3>Diamond</h3>
                                <h4>$99.99</h4>
                                <p>per month</p>
                                <ul className='precing__container-features'>
                                    <li>Unlimited Transactions</li>
                                    <li>5% Cash Back</li>
                                    <li>Unlimited Speed</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='primary'>
                                    Choose Plan
                                </Button>
                            </div>
                        </Link>


                    </div>
                </div>
            </div>
        </IconContext.Provider>
    )
}

export default Precing;