function schoolTeams(girls, boys) {

    const result = [];
    const girlsComb = [];
    const boysComb = [];
    
    combinations(boys, boysComb, 0, 0, 2);
    combinations(girls, girlsComb, 0, 0, 3);

    printResult();

    function combinations(arr, list, index, start, length){
        if(index >= length){
            list.push(result.slice(0).join(', '));
            return;
        }
        for(let i = start; i < arr.length; i++){
            result[index] = (arr[i]);
            combinations(arr, list, index + 1, i + 1, length);
        }
    }
    function printResult(){
        for(let girls of girlsComb){
            for(let boys of boysComb){
                console.log(girls, boys);
            }
        }
    }
}

schoolTeams(['Linda', 'Amy', 'Katty'], ['John', 'Bill']);
schoolTeams(['Lisa', 'Yoana', 'Marta', 'Rachel'], ['George', 'Garry', 'Bob']);