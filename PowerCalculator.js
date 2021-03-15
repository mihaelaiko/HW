function power(base, exponent){
    let res = 1;
    for(let i =1; i<=exponent; i++){
      res = base*Math.pow(base, i-1)
    };
    return(res);
  }
  console.log(power(2, 10));
  