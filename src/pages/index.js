import { ChakraButton } from '~/components/_atoms/ChakraButton/ChakraButton'
import { DarkModeSwitch } from '~/components/_atoms/DarkModeSwitch/DarkModeSwitch'
import Container from '~/components/_templates/Container/Container'

const Index = () => (
  <Container height='100vh'>
    <ChakraButton />
    <DarkModeSwitch />
  </Container>
)

export default Index
