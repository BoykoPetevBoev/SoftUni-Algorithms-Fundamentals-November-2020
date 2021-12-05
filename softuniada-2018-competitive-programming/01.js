function main([classifyNumber, favouriteNumber]) {
    const outputs = [
        "boring",
        "awesome",
        "super awesome",
        "super special awesome"
    ]
    let outputIndex = 0;

    const isOdd = () => {
        if (classifyNumber % 2 !== 0)
            outputIndex++
    };
    const isNegative = () => {
        if (classifyNumber < 0)
            outputIndex++
    };
    const canBeDivided = () => {
        if ((classifyNumber / favouriteNumber) % 1 === 0)
            outputIndex++
    };

    isOdd();
    isNegative();
    canBeDivided();

    const result = outputs[outputIndex];

    console.log(result);
}

main([13, 7]);
main([-27, 9]);