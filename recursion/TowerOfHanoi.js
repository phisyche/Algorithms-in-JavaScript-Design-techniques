function towerOfHanoi(n, fromRod, toRod, auxRod){

    if( n== 1){
        console.log("Moving disk 1 from " + fromRod+ " to "+ toRod)
    } else {
    towerOfHanoi(n-1, fromRod, auxRod, toRod)
    console.log("Moving the "+n+"th disk from " + fromRod+ " to "+ toRod)
    towerOfHanoi(n-1, auxRod, toRod, fromRod)
    }
}

towerOfHanoi(5, 'X', 'Y', 'Z')