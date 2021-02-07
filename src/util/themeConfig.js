import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config';

export const themeConfig = resolveConfig(tailwindConfig);
