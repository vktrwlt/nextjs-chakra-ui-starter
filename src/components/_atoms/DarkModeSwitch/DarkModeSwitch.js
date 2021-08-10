import { useColorMode, Switch } from '@chakra-ui/react';

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const defaultColorMode = colorMode === 'dark' ? false : true;

  return (
    <Switch
      position='fixed'
      top='1rem'
      right='1rem'
      color='green'
      isChecked={isDark}
      onChange={toggleColorMode}
      defaultChecked={defaultColorMode}
    />
  );
};
