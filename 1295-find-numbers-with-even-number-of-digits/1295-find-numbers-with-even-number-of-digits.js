/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let res=0;
    nums.forEach((el)=>{
    
        if(el.toString().split('').length%2==0){
            res++
        }
        
        
    })
    return res;
};
findNumbers([12,345,2,6,7896])
