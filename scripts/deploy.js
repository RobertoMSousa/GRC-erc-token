const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const accountBalance = await deployer.provider.getBalance(deployer.address);
  console.log("🚀  roberto --  ~ main ~ accountBalance:", accountBalance)
  
  console.log("Account balance:", ethers.formatUnits(accountBalance));
  // console.log("Account balance:", (await ethers.utils.formatEther(accountBalance)));

  const Token = await ethers.getContractFactory("GalacticCredits");
  const token = await Token.deploy();
  console.log("🚀  roberto --  ~ main ~ token:", token)

  console.log("Token address:", token.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});