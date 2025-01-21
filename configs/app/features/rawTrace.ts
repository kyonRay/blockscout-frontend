import type { Feature } from './types';

import { getEnvValue } from '../utils';

const title = 'Raw trace';

const config: Feature<{ isEnabled: true }> = (() => {
  if (getEnvValue('NEXT_PUBLIC_HAS_RAW_TRACE') === 'true') {
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
