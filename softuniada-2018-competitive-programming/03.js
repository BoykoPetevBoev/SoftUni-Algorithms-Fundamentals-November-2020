function main([num]) {
    const numbers = num.toString().split('');

    const firstNumber = Number(numbers[0] + numbers[2]);
    const secondNumber = Number(numbers[1] + numbers[3]);

    const ceiling = firstNumber + secondNumber;

    const startingNumber =  Number(secondNumber + '' + firstNumber);

    const dividingOn12 = [];
    const dividingOn15 = [];
    

    const canBeDividedOn12 = (num) => {
        const result = num / 12;
        if(Math.floor(result) === result){
            dividingOn12.push(num)
        }
    }
    const canBeDividedOn15 = (num) => {
        const result = num / 15;
        if(Math.floor(result) === result){
            dividingOn15.push(num)
        }
    }

    let firstNumberGenerator = firstNumber;
    let secondNumberGenerator = secondNumber;
    // console.log(firstNumberGenerator, ceiling);

    while(firstNumberGenerator <= ceiling){

        while(secondNumberGenerator <= ceiling){
            const result = Number(firstNumberGenerator + '' + secondNumberGenerator)
            canBeDividedOn12(result);
            canBeDividedOn15(result);

            secondNumberGenerator++;
        }
        secondNumberGenerator = secondNumber;
        firstNumberGenerator++;
    }

    console.log(`Dividing on 12: ${dividingOn12.join(' ')}`);
    console.log(`Dividing on 15: ${dividingOn15.join(' ')}`);
    console.log(dividingOn12.length === dividingOn15.length ? '!!!BINGO!!!' : 'NO BINGO!');
}

main([1213]);
main([1214]);
