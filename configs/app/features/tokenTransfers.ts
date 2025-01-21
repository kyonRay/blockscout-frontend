import type { Feature } from './types';

import { getEnvValue } from '../utils';

const title = 'Token transfers';

const config: Feature<{ isEnabled: true }> = (() => {
  if (getEnvValue('NEXT_PUBLIC_TOKEN_TRANSFERS_ENABLED') === 'true') {
    return Object.freeze({
      title,
      isEnabled: true,
    });
  }

  return Object.freeze({
    title,
    isEnabled: false,
  });
})();

export default config;
