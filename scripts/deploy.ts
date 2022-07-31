import { ethers } from "hardhat";

async function main() {
  const Domains = await ethers.getContractFactory("Domains");
  const domains = await Domains.deploy("kal");

  await domains.deployed();

  console.log(`Contract deployed to ${domains.address}`);

  let txn = await domains.register("retro", { value : ethers.utils.parseEther('0.1') });
  await txn.wait();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
