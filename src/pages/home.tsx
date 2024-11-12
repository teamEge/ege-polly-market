import React, { useEffect, useState } from "react";
import { HomeStyled } from "./pageStyles/home.styled";
import Card from "@/components/Card/StyledCard";
import BetContractService from "../app/api/service";

const HomePage: React.FC = () => {
  const [matches, setMatches] = useState();

  useEffect(() => {
    const betService = new BetContractService();
    const matches = betService.getMatches();
    console.log(matches)
  }, []);

    
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
