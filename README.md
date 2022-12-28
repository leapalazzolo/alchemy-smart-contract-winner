# Alchemy Smart Contract Winner

## Description

This is the fourth assigment in the **Ethereum Developer Bootcamp** by Alchemy University.

*Your goal is simple! Emit the winner event on this smart contract on the Goerli testnet: https://goerli.etherscan.io/address/0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502#code*

## Solution

Deploy a smart contract [contracts/Proxy.sol](contracts/Proxy.sol) with a function that calls the function **attempt** from this contract https://goerli.etherscan.io/address/0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502#code

### Steps

1. Create a .env file with the variables GOERLI_URL (Goerli node URL) and PRIVATE_KEY (your private key).
2. Install the dependencies ```npm install```
3. Deploy the contract (contracts/Proxy.sol) ```npx hardhat run scripts/deploy.ts --network goerli```. Copy the address contract shown in the output.
4. Add the variable CONTRACT_ADDRESS in the .env file using the address shown in the last step. 
5. Execute the **win** function from the *Proxy* contract that will execute the **attempt** function ```npx hardhat run scripts/win.ts --network goerli```
6. Check the logs of the last transaction of your control, for example, https://goerli.etherscan.io/tx/0x3eec4a27c055dd90e55f73fc838af84cf121276d4f7ac439a5cf9c0ffd816f06. Also, check the internal transactions to find your last transaction https://goerli.etherscan.io/address/0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502#internaltx