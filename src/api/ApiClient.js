import ApiError from './ApiError';

export default class ApiClient {
  constructor(apiRoot = '/api') {
    this.apiRoot = apiRoot;
  }

  get = (url) => {
    const params = {
      method: 'GET',
      headers: this.getRequestHeaders()
    };
    return fetch(this.getRequestUrl(url), params)
      .then(this.processResponse);
  }

  post = (url, payload) => {
    const params = {
      method: 'POST',
      headers: this.getRequestHeaders(),
      body: JSON.stringify(payload),
    };
    return fetch(this.getRequestUrl(url), params)
      .then(this.processResponse);
  }

  getRequestUrl(path) {
    return `${this.apiRoot}${path}`;
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
    return new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    });
  }
}
