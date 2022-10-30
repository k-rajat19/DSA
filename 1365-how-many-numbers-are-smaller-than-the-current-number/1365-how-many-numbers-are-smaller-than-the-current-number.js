/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let resArr=[]
    for(let i=0;i<nums.length;i++){
        
        let num=0;
        for(let j= 0;j<nums.length;j++){
            
            if(nums[j]<nums[i]){
                num++;
            }
        }
        resArr.push(num)
        
    }
    return resArr;
};

smallerNumbersThanCurrent([4,0,1,1,3])