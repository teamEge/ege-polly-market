import React from 'react';
import { HomeStyled } from './pageStyles/home.styled';
import Card from '@/components/Card/StyledCard';

const HomePage: React.FC = () => {
    return (
        <HomeStyled className='home'>
            <Card leftLogoName="Trump" leftLogo="" leftRate="65%" rightLogoName="Harris" rightLogo="" rightRate="35%" />
        </HomeStyled>
    );
};

export default HomePage;