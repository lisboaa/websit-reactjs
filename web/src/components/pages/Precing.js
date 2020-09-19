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
                    <h1 className='precing__heading'>Planos</h1>
                    <div className='precing__container'>
                        <Link to='/sign-up' className='precing__container-card'>
                            <div className='precing__container-cardInfo'>
                                <div className='icon'>
                                    <FaFire/>
                                </div>
                                <h3>Starter</h3>
                                <h4>R$8.99</h4>
                                <p>por mês</p>
                                <ul className='precing__container-features'>
                                    <li>100 Transações</li>
                                    <li>2% Cash Back</li>
                                    <li>R$10,00 Limit</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='primary'>
                                    Comprar
                                </Button>
                            </div>
                        </Link>

                        <Link to='/sign-up' className='precing__container-card'>
                            <div className='precing__container-cardInfo'>
                                <div className='icon'>
                                    <BsXDiamondFill/>
                                </div>
                                <h3>Gold</h3>
                                <h4>R$29.99</h4>
                                <p>por mês</p>
                                <ul className='precing__container-features'>
                                    <li>100 Transações</li>
                                    <li>3.5% Cash Back</li>
                                    <li>R$100,00 Limite</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='blue'>
                                    Comprar
                                </Button>
                            </div>
                        </Link>

                        <Link to='/sign-up' className='precing__container-card'>
                            <div className='precing__container-cardInfo'>
                                <div className='icon'>
                                    <GiCrystalize/>
                                </div>
                                <h3>Diamond</h3>
                                <h4>R$99.99</h4>
                                <p>por mês</p>
                                <ul className='precing__container-features'>
                                    <li>Transações ilimitadas</li>
                                    <li>5% Cash Back</li>
                                    <li>Velocidade ilimitada</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='primary'>
                                    Comprar
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