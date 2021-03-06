import { ChakraProvider } from '@chakra-ui/react';

import theme from '@/theme';

export const withChakraUi = Story => (
  <ChakraProvider resetCSS theme={theme}>
    <Story />
  </ChakraProvider>
);
