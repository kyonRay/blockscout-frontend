import type { Feature } from './types';

import { getEnvValue } from '../utils';

const title = 'Verify Contract';

const config: Feature<{ isEnabled: true }> = (() => {
  if (getEnvValue('NEXT_PUBLIC_CONTRACT_VERIFICATION_ENABLED') === 'true') {
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
