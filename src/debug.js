const myEvery = (arr, callback) => {
  for (const value of arr) {
    if (!callback(value)) return false;
  }
  return true;
};

const sortUsersBy = (users, sortingFunction) => {
  return [...users].sort(sortingFunction);
};

const logEachName = (names) => {
  names.forEach((element, index, array) => console.log(element, index, array));
};

const logEachUserBio = (users) => {
  users.forEach(user => console.log(user.bio));
};

module.exports = {
  myEvery,
  sortUsersBy,
  logEachName,
  logEachUserBio,
};
