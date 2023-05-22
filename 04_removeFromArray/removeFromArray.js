const removeFromArray = function(arr,...number) {
   const newArray = []

   arr.forEach( (item)=> {
      if(!number.includes(item))
      {
         newArray.push(item)
      }
   });
   return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
