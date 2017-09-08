export const keyMirror = (object, transformKey = (key => key)) =>
  Object.keys(object).reduce((result, key) => {
    result[key] = transformKey(key);
    return result;
  }, {});

export const createActionTypes = (scope, actionTypes) =>
  keyMirror(actionTypes, key => `${scope}/${key}`);

export const extractId = (url) => {
  const parts = url.split('/');
  return +parts[parts.length - 1];
};

export const replaceAtIndex = (array, index, item) => (
  [...array.slice(0, index), item, ...array.slice(index + 1)]
);
