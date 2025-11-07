function christmasTrees(numChristmasTrees, heightsArr){
    let increasing = 0;
    let decreasing = 0;
    for(i = 0; i < numChristmasTrees; i++){
        if(heightsArr[i] < heightsArr[i+1]){
            increasing++;        
        }
    }
    return increasing;
}
console.log(christmasTrees(4, [1,3,4,2]));