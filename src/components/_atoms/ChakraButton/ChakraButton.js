import { Button } from '@chakra-ui/react'
import PropTypes from 'prop-types'

export const ChakraButton = ({ colorScheme, size, label }) => {
  return (
    <Button colorScheme={colorScheme} size={size}>
      {label}
    </Button>
  )
}

ChakraButton.propTypes = {
  /**
   * What background color to use
   */
  colorScheme: PropTypes.oneOf([
    'blue',
    'cyan',
    'gray',
    'green',
    'orange',
    'pink',
    'purple',
    'red',
    'teal',
    'yellow',
    'whiteAlpha',
    'blackAlpha',
    'linkedin',
    'facebook',
    'messenger',
    'whatsapp',
    'twitter',
    'telegram',
  ]),
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
}

ChakraButton.defaultProps = {
  colorScheme: 'teal',
  size: 'md',
  label: 'Button',
}
