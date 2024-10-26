'use client'
import React, { ReactNode } from 'react';
import { StyledHeader } from './StyledHeader.styled';


interface HeaderProps {
    className?: string;  // Optional className prop
}

const Header: React.FC<HeaderProps> = ({ className }) => {
    return (
        <StyledHeader className={className}>

            <h1> Header alanı</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/dashboard">dashboard</a></li>
                    <li><a href="/politics">politics</a></li>
                </ul>
            </nav>

        </StyledHeader>
    );
};

export default Header;