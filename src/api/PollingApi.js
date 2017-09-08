import ApiClient from './ApiClient';
import settings from '../common/settings';

export class PollingApi {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  questions = () =>
    this.apiClient.get('/questions');
}

export const pollingApi = new PollingApi(new ApiClient(settings.apiUrl));
