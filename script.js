

function secondHighest(arr){
    let max = 0,secondmax=0;
    for(let i=0;i<arr.length;i++){
        if(max<arr[i]){
             console.log("max "+max);
          max = arr[i];}
            
   
  }
 
     for(let i=0;i<arr.length;i++){
        if(max>arr[i] && secondmax<arr[i]){
             console.log("secmax "+secondmax);
          secondmax = arr[i];}
}
  return secondmax;
}