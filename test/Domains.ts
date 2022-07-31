import hre from "hardhat";
import { expect } from 'chai';

describe("Domains contract", function () {
    it("Register a domain", async function () {
        const [owner, randomPerson] = await hre.ethers.getSigners();

        const Domains = await hre.ethers.getContractFactory("Domains");
        const tld = "kal";
        const domains = await Domains.deploy(tld);
        await domains.deployed();

        const amount = hre.ethers.utils.parseEther('0.01')
        const txn = await domains.register("retro", { value: amount });
        await txn.wait();

        expect(await domains.getAddress("retro")).to.equal(owner.address);

    });
});
