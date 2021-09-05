import { ChakraProvider } from '@chakra-ui/react';
import { matchers } from '@emotion/jest';
import { render } from '@testing-library/react';
import theme from '../theme';

// eslint-disable-next-line no-undef
expect.extend(matchers);

export const customRender = children =>
  render(
    <ChakraProvider resetCSS theme={theme}>
      {children}
    </ChakraProvider>
  );

export * from '@testing-library/react';
export { customRender as render };
