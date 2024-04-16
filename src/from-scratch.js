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

const myFind = () => {
};

const myFilter = () => {
};

const sortWords = () => {
};

const sortNumbers = () => {
};

const sortNumbersBetter = () => {
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
