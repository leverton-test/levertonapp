import ApiError from './ApiError';

export default class ApiClient {
  constructor(apiRoot = '/api') {
    this.apiRoot = apiRoot;
  }

  get = (url) => {
    const params = {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      }),
    };
    return fetch(`${this.apiRoot}${url}`, params)
      .then(this.processResponse);
  }

  processResponse(response) {
    return response.json().then((json) => {
      if (response.status < 200 || response.status >= 400) {
        throw new ApiError(json, response.status);
      }
      return json;
    });
  }

  getRequestHeaders() {

  }
}
