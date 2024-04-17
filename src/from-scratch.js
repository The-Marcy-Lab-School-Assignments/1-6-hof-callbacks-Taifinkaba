const myForEach = (arr, callBk) => {
   for(let i = 0; i < arr.length; i++){
    callBk(arr[i]);
   }
};

const myMap = (arr, callBk) => {
  const newArr = [];
  for(let i = 0; i < arr.length; i++){
    newArr.push(callBk(arr[i]));
  }
  return newArr;
};

const myFind = (arr, callBk) => {
  for(let i = 0; i < arr.length; i++){
    if(callBk(arr[i])){
      return arr[i];
    }
  }
  return undefined;
};

const myFilter = (arr, callBk) => {
  const newArr = [];
  for(let i = 0; i < arr.length; i++){
    if(callBk(arr[i])){
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

const sortWords = (arr) => {
  const newArr= arr.slice();
  return newArr.sort();
};

const sortNumbers = (arr) => {
  const newArr= arr.slice();
  return newArr.sort((a,b) => a - b);
};

const sortNumbersBetter = (arr, descend = false) => {
  const newArr= arr.slice();
  if (descend) {
    return newArr.sort((a, b) => b - a);
  } else {
    return newArr.sort((a, b) => a - b); 
  }
};

const sortUsersByOrder = () => {
};

const sortUsersByName = () => {
};

module.exports = {
  myForEach,
  myMap,
  myFind,
  myFilter,

  sortWords,
  sortNumbers,
  sortNumbersBetter,
  sortUsersByOrder,
  sortUsersByName,
};
