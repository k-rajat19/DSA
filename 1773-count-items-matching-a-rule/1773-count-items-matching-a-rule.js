/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let res=0
    items.forEach((el)=>
                  {
                  
        if(ruleKey==="color"){
            if(el[1]==ruleValue){
                res++
            }
        }
          if(ruleKey==="type"){
             if(el[0]==ruleValue){
                res++
            }
        }
          if(ruleKey==="name"){
         if(el[2]==ruleValue){
                res++
            }   
        }
    
         }     )
                 return res;
    
};

 countMatches([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], "color","silver")