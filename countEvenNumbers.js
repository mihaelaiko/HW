function countEvenNumbers(arr){
    let evenNums =[];
    for(let i = 0; i<arr.length; i++){
        if (arr[i]%2===0){
            evenNums.push(arr[i]);
        }
       console.log(evenNums.length)
    }
}

countEvenNumbers([1,4,2,3,5]);