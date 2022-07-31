import { ethers } from "hardhat";

async function main() {
  const Domains = await ethers.getContractFactory("Domains");
  const domains = await Domains.deploy("kal");

  await domains.deployed();

  console.log(`Contract deployed to ${domains.address}`);

  let txn = await domains.register("retro", { value : ethers.utils.parseEther('0.1') });
  await txn.wait();

  txn = await domains.setRecord("retro","https://playvalorant.com")
  await txn.wait()

  const address = await domains.getAddress("banana");
  console.log("Owner of domain banana:", address);

  const balance = await ethers.provider.getBalance(domains.address);
  console.log("Contract balance:", ethers.utils.formatEther(balance));

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
