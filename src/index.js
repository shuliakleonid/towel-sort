
// You should implement your task here.

module.exports = function towelSort (matrix)     {
    if(matrix == undefined){
        return [];
    }
        let arr = []
       for(let i = 0; i < matrix.length; i++){
      if (i % 2 == 0){
           arr.push(matrix[i].sort((a,b) => a-b));
        }else {
         arr.push(matrix[i].sort((a,b) => b-a));
         }
       }return arr.flat();
       }
