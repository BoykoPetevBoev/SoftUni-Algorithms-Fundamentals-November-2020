function cinema(names, places) {

    const template = Array(names.length).fill('');

    for (let ticket of places) {
        const [name, place] = ticket.split(' - ');
        template[place - 1] = name;
    }
    const peoples = names.filter(name => !template.includes(name));
    recursion(0);

    function recursion(index) {
        if (index >= peoples.length) {
            printResult(peoples);
            return;
        }
        for (let i = index; i < peoples.length; i++) {
            split(index, i);
            recursion(index + 1);
            split(index, i);
        }
    }
    function split(first, second){
        const temp = peoples[first];
        peoples[first] = peoples[second];
        peoples[second] = temp;
    }
    function printResult(peoples) {
        const result = template.slice(0);
        let index = 0;

        for(let i = 0; i < result.length; i++){
            if(!result[i]){
                result[i] = peoples[index];
                index += 1;
            }
        }
        console.log(result.join(' '));
    }
}

cinema(
    ['Peter', 'Amy', 'George', 'Rick'],
    ['Amy - 1', 'Rick - 4']
)

cinema(
    ['Garry', 'Liam', 'Teddy', 'Anna', 'Buddy', 'Simon'],
    ['Buddy - 3', 'Liam - 5', 'Simon - 1']
)