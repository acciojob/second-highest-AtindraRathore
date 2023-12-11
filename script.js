function secondHighest(arr){
    let max = 0,secondmax=0;
    for(let i=0;i<arr.length;i++){
        if(max<arr[i]){
          max = arr[i];}
             if(max>arr[i] && secondmax<arr[i]){
              secondmax = arr[i];
    
   
  }
  
}
  return secondmax;
}