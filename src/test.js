
let nums =[2,7,11,15];
let target=9;

var twoSum = function(nums, target) {
    let ar=[];
    for (let i=0;i<(nums.length-1);i++){
        for (let j=i+1; j<nums.length; j++){
            if (nums[i]+nums[j]===target){
                ar.push(i);ar.push(j);break; 
            }
        }
    }
    return ar;
};
twoSum(nums, target);