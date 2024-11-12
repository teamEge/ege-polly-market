import { ethers, BigNumber } from "ethers";

// ABI ve Kontrat Adresi
import BET_CONTRACT_ABI from '../api/abis/BetContractABI.json';
import FOOTBALL_DATA_CONTRACT_ABI from '../api/abis/FootballData.abi.json';

const BET_CONTRACT_ADDRESS = "0x7535f5042040b76aad21b9442b5f9499b9e3bba6";
const FOOTBALL_DATA_CONTRACT_ADDRESS = "0x21391ef65f2768125c94443e51df830ce5021bdc";

// Tahmin türü
enum Prediction {
  HomeWin,
  AwayWin,
  Draw
}

 interface Match {
  homeTeam: string;
  awayTeam: string;
  score: string;
  isFinished: boolean;
  endTime: BigNumber;
}

class BetContractService {
  private provider: ethers.providers.Web3Provider;
  private signer: ethers.Signer;
  private betContract: ethers.Contract;
  private footballDataContract: ethers.Contract;

  constructor() {
    if (typeof window !== 'undefined' && (window as any).ethereum) {
      this.provider = new ethers.providers.Web3Provider((window as any).ethereum);
      this.signer = this.provider.getSigner();
      this.betContract = new ethers.Contract(BET_CONTRACT_ADDRESS, BET_CONTRACT_ABI, this.signer);
      this.footballDataContract = new ethers.Contract(FOOTBALL_DATA_CONTRACT_ADDRESS, FOOTBALL_DATA_CONTRACT_ABI, this.provider);
    } else {
      throw new Error("Ethereum provider (like MetaMask) not found.");
    }
  }

  // Maç bilgilerini almak
  async getMatches(): Promise<Match[]> {
    try {
      const matches: any[] = await this.footballDataContract.getMatches();
      return matches.map((match) => ({
        homeTeam: match.homeTeam,
        awayTeam: match.awayTeam,
        score: match.score,
        isFinished: match.isFinished,
        endTime: match.endTime,
      }));
    } catch (error) {
      console.error("Error fetching matches:", error);
      throw error;
    }
  }

  // Bahis yapmak
  async placeBet(matchIndex: number, prediction: Prediction, betAmount: string): Promise<void> {
    try {
      const tx = await this.betContract.placeBet(matchIndex, prediction, {
        value: ethers.utils.parseEther(betAmount),
      });
      await tx.wait();
      console.log("Bet placed successfully!");
    } catch (error) {
      console.error("Error placing bet:", error);
      throw error;
    }
  }

  // Kullanıcının yaptığı bahisleri almak
  async getUserBet(matchIndex: number, userAddress: string): Promise<{ amount: BigNumber; prediction: Prediction }> {
    try {
      const bet = await this.betContract.matchBets(matchIndex).userBets(userAddress);
      return {
        amount: bet.amount,
        prediction: bet.prediction,
      };
    } catch (error) {
      console.error("Error fetching user bet:", error);
      throw error;
    }
  }

  // Kazanan sonuçları görüntülemek
  async getWinningPool(matchIndex: number): Promise<{ homeWin: BigNumber; awayWin: BigNumber; draw: BigNumber }> {
    try {
      const matchBet = await this.betContract.matchBets(matchIndex);
      return {
        homeWin: matchBet.totalHomeWin,
        awayWin: matchBet.totalAwayWin,
        draw: matchBet.totalDraw,
      };
    } catch (error) {
      console.error("Error fetching winning pool:", error);
      throw error;
    }
  }
}

export default BetContractService;
