import React from 'react';
import { HomeStyled } from './home.styled';

const HomePage: React.FC = () => {
    return (
        <HomeStyled >
            <div className='redBox'>
                <span className='redBox-title'>hehehe</span>
            </div>
        </HomeStyled>
    );
};

export default HomePage;