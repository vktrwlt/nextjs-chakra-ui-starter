import Container from '~/components/_templates/Container/Container'
import { render, screen } from '~/utils/test-utils'

describe('<Container/ >', () => {
  it('should render with children', () => {
    render(
      <Container>
        <div data-testid='Mock Children' />
      </Container>
    )

    expect(screen.getByTestId('Mock Children')).toBeInTheDocument()
  })
})
