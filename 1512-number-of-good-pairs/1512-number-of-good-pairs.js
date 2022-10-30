/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let resArr=[];
    for(let i=0;i<nums.length;i++){
        for(let j =i+1;j<nums.length;j++){
            if(nums[i]==nums[j]){
                resArr.push(" ");   
            }
        }
    }
    return resArr.length;
};

numIdenticalPairs([1,2,3,1,1,3]
)