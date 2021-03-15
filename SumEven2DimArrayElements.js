function SumEven2DimArrayElements(arr){
    let even = [0][0];
    for(let i=0; i<arr.length; i++){
        for(let z=0; z<arr[i].length; z++){
            if (arr[i][z]%2===0){
                even=arr[i][z];
                sum=even+even;

            }
        }
    }
console.log(sum);
}

SumEven2DimArrayElements([
  [1,2,3],
  [4,5,6]
])