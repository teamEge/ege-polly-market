"use client";
import React, { ReactNode } from "react";
import { StyledHeader } from "./StyledHeader.styled";
import { StyledButton } from "../Button/StyledButton.styled";
import { QqOutlined } from "@ant-design/icons";

interface HeaderProps {
  logoName?: string;
}

const Header: React.FC<HeaderProps> = ({ logoName }) => {
  return (
    <StyledHeader>
      <div className="logo">
        <QqOutlined /> {logoName}{" "}
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/dashboard">dashboard</a>
          </li>
          <li>
            <a href="/politics">politics</a>
          </li>
        </ul>
      </nav>
      <StyledButton> Login </StyledButton>
    </StyledHeader>
  );
};

export default Header;
