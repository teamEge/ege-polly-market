'use client'
import React from 'react';
import { StyledCard } from './StyledCard.styled';
import { Image } from 'antd';


interface CardProps {
    leftLogoName?: string;
    leftLogo?: string;
    leftRate?: string;
    rightLogoName?: string;
    rightLogo?: string;
    rightRate?: string;
}

const Card: React.FC<CardProps> = ({ leftLogoName, leftLogo, leftRate, rightLogoName, rightLogo, rightRate }) => {
    return (
        <StyledCard>
            <div className='card'>

                <div className='card-left'>
                    <div className='card-left-logo'>
                        <Image
                            width={100}
                            src={leftLogo}
                        />
                        <div className='card-left-logo-name'>{leftLogoName}</div>
                    </div>

                    <div className='card-left-logo-rate'>{leftRate}</div>
                </div>

                <div className='card-right'>
                    <div className='card-right-logo'>
                        <Image
                            width={100}
                            src={rightLogo}
                        />
                        <div className='card-right-logo-name'>{rightLogoName}</div>
                    </div>

                    <div className='card-right-logo-rate'>{rightRate}</div>
                </div>

            </div>
        </StyledCard>
    );
};

export default Card;