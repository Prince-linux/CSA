import { CONFIG } from '../config-global';

export const endpoints = {
  registration: {
    submit: `${CONFIG.serverUrl}api/register/`,
    get: `${CONFIG.serverUrl}api/register/`,
  }
};
