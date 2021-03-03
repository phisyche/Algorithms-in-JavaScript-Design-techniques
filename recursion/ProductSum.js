function productSum(list, depth){
    let sum = 0;

    list.forEach(element => {
        if(Array.isArray(element))
        sum += productSum(element, depth + 1); 
        else
        sum += element;
    });

    return sum * depth;
}

const list = [4, 10, [12, 43], 16, [[20, 17], 2], 86];

console.log(productSum(list, 1));