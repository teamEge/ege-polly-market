import React from "react";
import { HomeStyled } from "./pageStyles/home.styled";
import Card from "@/components/Card/StyledCard";

const HomePage: React.FC = () => {
  return (
    <HomeStyled className="home">
      <Card
        leftLogoName="Trump"
        leftLogo="/images/pres-trump.webp"
        leftRate="65%"
        rightLogoName="Harris"
        rightLogo="/images/pres-kamala.webp"
        rightRate="35%"
      />
    </HomeStyled>
  );
};

export default HomePage;
