import ApiClient from './ApiClient';
import settings from '../common/settings';

export class PollingApi {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  questions = () =>
    this.apiClient.get('/questions');

  vote = ({ questionId, choiceId }) =>
    this.apiClient.post(`/questions/${questionId}/choices/${choiceId}`);

  create = ({ question, choices }) =>
    this.apiClient.post('/questions', { question, choices });
}

export const pollingApi = new PollingApi(new ApiClient(settings.apiUrl));
