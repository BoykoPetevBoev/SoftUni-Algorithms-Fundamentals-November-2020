function sumOfCoins(arr, target) {

    let coins = 0;
    const result = [];
    const sorted = arr.sort((a, b) => b - a);
    const printResult = () => {
        console.log(`Number of coins to take: ${coins}`);
        result.map(obj => console.log(`${obj.coin} coin(s) with value ${obj.value}`));
    }

    sorted.map(value => {
        if (value > target) return;
        
        const coin = Math.floor(target / value);
        coins += coin;
        target %= value;
        result.push({ coin, value });
    });

    target === 0 ? printResult() : console.log('Error');
}

sumOfCoins([1, 2, 5, 10, 20, 50], 923);
sumOfCoins([3, 7], 11);