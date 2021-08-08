import { Flex, Heading } from '@chakra-ui/react'
import { DarkModeSwitch } from '~/components/_atoms/DarkModeSwitch/DarkModeSwitch'
import Container from '~/components/_templates/Container/Container'

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
)

export default Index
