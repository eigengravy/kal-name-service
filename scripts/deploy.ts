import { ethers } from "hardhat";

async function main() {
  const Domains = await ethers.getContractFactory("Domains");
  const domains = await Domains.deploy("kal");

  await domains.deployed();

  console.log(`Contract deployed to ${domains.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
