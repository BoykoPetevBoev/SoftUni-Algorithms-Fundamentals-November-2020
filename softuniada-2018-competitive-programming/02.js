function main([ num ]) {
    num = Number(num)

    const width = num * 5;
    const height = num * 2 + 3;

    const result = []

    const createFirstLastRow = () => {
        const row = new Array(width).fill('.');
        const from = width / 2 - num / 2;
        row.splice(from, num, ...new Array(num).fill('*'));
        result.push(row.join(''));
        result.unshift(row.join(''));
    }

    const createFirstSection = () => {
        const row = new Array(width).fill('.');
        const array = [];

        for (let i = 1; i <= num / 2; i++) {
            const firstSymbols = num + i * 4;
            const firstSymbolsIndex = width / 2 - firstSymbols / 2;
            row.splice(firstSymbolsIndex, firstSymbols, ...new Array(firstSymbols).fill('*'));

            const secondSymbols = num + i * 2;
            const secondSymbolsIndex = width / 2 - secondSymbols / 2;
            row.splice(secondSymbolsIndex, secondSymbols, ...new Array(secondSymbols).fill('+'));

            array.push(row.join(''));
        }
        result.push(...array.reverse());
        result.unshift(...array.reverse());
    }

    const createSecondSection = () => {
        const array = []
        
        for (let i = 0; i < num / 2; i++) {
            const firstSymbols = width - num - (i * 2 );
            const firstSymbolsIndex = num / 2 + i;
            const row = new Array(width).fill('.');
            row.splice(firstSymbolsIndex, firstSymbols, ...new Array(firstSymbols).fill('*'));

            const secondSymbols = firstSymbols - 4;
            const secondSymbolsIndex = width / 2 - secondSymbols / 2;
            row.splice(secondSymbolsIndex, secondSymbols, ...new Array(secondSymbols).fill('='));

            array.unshift(row.join(''));
        }
        result.push(...array.reverse());
        result.unshift(...array.reverse());
    }

    const createMainRow = () => {
        const row = new Array(width).fill('.');

        const firstSymbols = width - num;
        const firstSymbolsIndex = num / 2;
        row.splice(firstSymbolsIndex, firstSymbols, ...new Array(firstSymbols).fill('*'));

        const secondSymbol = width - num - 4;
        const secondSymbolsIndex = num / 2 + 2;
        row.splice(secondSymbolsIndex, secondSymbol, ...new Array(secondSymbol).fill('~'));

        const text = ['H', 'A', 'P', 'P', 'Y', ' ', 'E', 'A', 'S', 'T', 'E', 'R'];
        const textSymbols = text.length;
        const textSymbolsIndex = width / 2 - textSymbols / 2;
        row.splice(textSymbolsIndex, textSymbols, ...text)
        result.push(row.join(''));
    }

    createMainRow()
    createSecondSection();
    createFirstSection();

    createFirstLastRow();

    console.log(result.join('\n'));
}

main([6])
main([8])