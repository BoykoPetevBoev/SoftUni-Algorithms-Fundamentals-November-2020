function wordCruncher(arr, word) {
    console.log('- start');
    const result = [];
    const words = [...new Set(arr)];

    recursion(0)
    console.log('- end');
    function recursion(index) {
        if (word === result.join('')) {
            console.log(result.join(' '));
            return;
        }
        for (let i = 0; i < words.length; i++) {
            if (result.includes(words[i])) continue;

            result.push(words[i]);

            if (word.startsWith(result.join(''))) {
                recursion(index + 1);
            }
            result.pop();

        }
    }
}

wordCruncher(['text', 'me', 'so', 'do', 'm', 'ran'], 'somerandomtext')

wordCruncher(['Word', 'cruncher', 'cr', 'h', 'unch', 'c', 'r', 'un', 'ch', 'er'], 'Wordcruncher')

wordCruncher(['tu', 'stu', 'p', 'i', 'd', 'pi', 'pid', 's', 'pi'], 'stupid')