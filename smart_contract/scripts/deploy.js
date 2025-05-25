const main = async () => {
  const transactionsFactory = await ethers.getContractFactory("Transactions");
  const transactionsContract = await transactionsFactory.deploy();

  // Await the deployment and get the transaction receipt
  const deployment = await transactionsContract.deploymentTransaction();
  const receipt = await deployment.wait();

  console.log("Transactions address: ", transactionsContract.target);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();