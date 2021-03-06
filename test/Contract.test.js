const { assert, web3 } = require("hardhat");
const Contract = artifacts.require("Contract");

contract("Contract", ([owner, ...accounts]) => {
  let contract;

  beforeEach(async () => {
    contract = await Contract.new();
    await contract.initialize();
  });

  it("deploys a contract", () => {
    assert.ok(contract.address);
  });

  it("initializes a contract", async () => {
    assert.equal("Test contract upgradeables", await contract.name());
  });
});
