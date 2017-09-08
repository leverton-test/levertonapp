export const keyMirror = (object, transformKey = (key => key)) =>
  Object.keys(object).reduce((result, key) => {
    result[key] = transformKey(key);
    return result;
  }, {});

export const createActionTypes = (scope, actionTypes) =>
  keyMirror(actionTypes, key => `${scope}/${key}`);
