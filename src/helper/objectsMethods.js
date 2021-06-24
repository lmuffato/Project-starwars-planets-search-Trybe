const getObjectWithoutTheKey = (object, key) => {
  const objectKeys = Object.keys(object);
  const objectWithoutTheKey = objectKeys.reduce((acc, cur) => {
    if (cur === key) return acc;
    acc[cur] = object[cur];
    return acc;
  }, {});
  return objectWithoutTheKey;
};

export default getObjectWithoutTheKey;
