// Importing the ethers library from Hardhat
const { ethers } = require("hardhat");

async function main() {
  // Airdrop parameters
  const tokenAddress = "0x5886788d08a0658A32D26bfAbD8C9e603534a91D"; // Replace with your token address
  const recipients = [
    // Add recipient addresses here
    "0xFA8FF1Aed628119E20b80634dA1db8ab495C1934",
    "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
  ];
  const amount = ethers.parseUnits("1", 18); // 10 tokens for each recipient (adjust as needed)

  // Getting the signer account
  const [deployer] = await ethers.getSigners();
  console.log(`Deployer address: ${deployer.address}`);

  // Creating a contract instance
  const Token = await ethers.getContractFactory("GalacticCredits"); // Replace with your token contract name
  const token = Token.attach(tokenAddress);

  // Performing the airdrop
  for (const recipient of recipients) {
    console.log(`Airdropping to ${recipient}`);
    const tx = await token.connect(deployer).transfer(recipient, amount);
    await tx.wait();
    console.log(`Airdropped ${ethers.formatUnits(amount, 18)} tokens to ${recipient}`);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
