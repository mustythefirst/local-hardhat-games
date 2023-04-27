// add the game address here and update the contract name if necessary
const gameAddr = "0x7a2088a1bFc9d81c55368AE168C2C02570cB814F";
const contractName = "Game2";

async function main() {
    // attach to the game
    const game = await hre.ethers.getContractAt(contractName, gameAddr);

    // do whatever you need to do to win the game here:
    const tx1 = await game.setX(40);
    await tx1.wait();
    
    console.log(tx1);

    const tx2 = await game.setY(10);
    await tx2.wait();

    console.log(tx2);

    // did you win? Check the transaction receipt!
    // if you did, it will be in both the logs and events array
    const tx = await game.win();
    const receipt = await tx.wait();
    console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
