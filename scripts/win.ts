import { ethers } from "ethers";
import dotenv from 'dotenv';
dotenv.config()

async function main() {

  const contract = require("../artifacts/contracts/Proxy.sol/Proxy.json"); 

  if (!process.env.GOERLI_URL || !process.env.PRIVATE_KEY || !process.env.CONTRACT_ADDRESS){
    throw new Error("Create the .env file with GOERLI_URL, PRIVATE_KEY and CONTRACT_ADDRESS")
  }
  const provider = new ethers.providers.JsonRpcProvider(process.env.GOERLI_URL);

  const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

  const proxyContract = new ethers.Contract(process.env.CONTRACT_ADDRESS, contract.abi, signer);
  
  await proxyContract.win()
  
  console.log("Check if you're a winner https://goerli.etherscan.io/address/" + process.env.CONTRACT_ADDRESS)

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
