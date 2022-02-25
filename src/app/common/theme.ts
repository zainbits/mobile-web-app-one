import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const customTheme = extendTheme({ config });

// This is to change any theme colour
customTheme.colors.whatsapp[200] = '#00ff8f';
customTheme.shadows.outline = '0 0 0 3px #00ff8f';

export default customTheme;