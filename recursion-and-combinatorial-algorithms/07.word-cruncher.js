function wordCruncher(arr, word) {
    const result = [];
    const words = [...new Set(arr)];
    const printResult = () => console.log(result.join(' '));

    recursion(0)
    function recursion(index) {
        const end = word === result.join('');
        const match = word.startsWith(result.join(''));

        if (end) {
            printResult();
            return;
        }
        for (let string of words) {
            if (result.includes(string)) continue;
            result.push(string);
            if (match) recursion(index + 1);
            result.pop();
        }
    }
}

wordCruncher(['text', 'me', 'so', 'do', 'm', 'ran'], 'somerandomtext');
wordCruncher(['Word', 'cruncher', 'cr', 'h', 'unch', 'c', 'r', 'un', 'ch', 'er'], 'Wordcruncher');
wordCruncher(['tu', 'stu', 'p', 'i', 'd', 'pi', 'pid', 's', 'pi'], 'stupid');