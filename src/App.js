import React from 'react';
import { pollingApi } from './api/PollingApi';

export default () => (
  <div />
);

pollingApi.questions().then(data => console.log(data));
