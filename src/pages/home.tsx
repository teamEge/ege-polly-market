import React, { useEffect, useState } from "react";
import { HomeStyled } from "./pageStyles/home.styled";
import Card from "@/components/Card/StyledCard";
import BetContractService from "../app/api/service";
import { BigNumber } from "ethers";

const HomePage: React.FC = () => {

  interface Match {
    homeTeam: string;
    awayTeam: string;
    score: string;
    isFinished: boolean;
    endTime: BigNumber;
  }

  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Loading state to show a loading spinner
  const [error, setError] = useState<string | null>(null); // State to capture any errors

  useEffect(() => {
    // Create an instance of the BetContractService
    const betContractService = new BetContractService();

    // Define an async function to fetch matches
    const fetchMatches = async () => {
      try {
        // Call the getMatches function from BetContractService
        const fetchedMatches = await betContractService.getMatches();
        setMatches(fetchedMatches); // Update the state with the fetched matches
        setLoading(false); // Set loading to false once data is fetched
        console.log({ fetchedMatches })
      } catch (err) {
        setError("Failed to fetch matches"); // Capture any error
        setLoading(false); // Set loading to false even if there was an error
        console.error(err);
      }
    };

    // Call the async function to fetch data
    fetchMatches();
  }, []); // Empty dependency array means this will run only once, when the component mounts



  return (
    <HomeStyled className="home">
      {matches.map((match, index) => (
        <Card
          key={index} // Ensure each item has a unique key
          leftLogoName={match.awayTeam}
          leftLogo="/images/pres-trump.webp" // You can replace with actual team logos
          leftRate="65%" // You can dynamically calculate or fetch the rates
          rightLogoName={match.homeTeam}
          rightLogo="/images/pres-kamala.webp" // You can replace with actual team logos
          rightRate="35%" // You can dynamically calculate or fetch the rates
        />
      ))}
    </HomeStyled>
  );
};

export default HomePage;
