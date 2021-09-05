import Container from '@/components/Container/Container';
import { DarkModeSwitch } from '@/components/DarkModeSwitch/DarkModeSwitch';
import { Flex, Heading } from '@chakra-ui/react';

const Index = () => (
  <Container height='100vh'>
    <Flex justifyContent='center' alignItems='center' height='100vh'>
      <Heading
        fontSize='48px'
        bgGradient='linear(to-l, #7928CA, #FF0080)'
        bgClip='text'>
        Next.js with Chakra-UI
      </Heading>
    </Flex>

    <DarkModeSwitch />
  </Container>
);

export default Index;
