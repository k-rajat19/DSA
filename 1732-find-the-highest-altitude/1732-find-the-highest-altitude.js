/**
 * @param {number[]} gain
 * @return {number}
 */

var largestAltitude = function(gain) {
    let altitudeArr=[0]
    for(let i=0;i<gain.length;i++){
        altitudeArr.push(altitudeArr[i]+gain[i])
    }
    // max element in altitudeArr
    let max= altitudeArr[0]
   altitudeArr.forEach((el)=>{
       if(el>max){
           max=el
       }
   }
       
   )
    return max;
    
};

console.log(largestAltitude( [-5,1,5,0,-7]));