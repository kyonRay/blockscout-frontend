import type { Feature } from './types';

import { getEnvValue } from '../utils';

const title = 'Internal txns';

const config: Feature<{ isEnabled: true }> = (() => {
  if (getEnvValue('NEXT_PUBLIC_HAS_INTERNAL_TXNS') === 'true') {
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
