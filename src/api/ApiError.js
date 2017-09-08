export default class ApiError extends Error {
  constructor(json, httpStatus) {
    super();
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, ApiError);
    } else {
      this.stack = (new Error(json)).stack;
    }
    this.name = 'ApiError';
    this.json = json;
    this.httpStatus = httpStatus || 500;
  }
}
