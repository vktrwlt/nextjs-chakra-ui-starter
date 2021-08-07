import React from 'react'
import { ChakraButton } from '~/components/_atoms/ChakraButton/ChakraButton'

export default {
  title: '_atoms/ChakraButton',
  component: ChakraButton,
}

const Template = args => <ChakraButton {...args} />

export const Default = Template.bind({})
Default.args = {
  size: 'md',
  colorScheme: 'teal',
  label: 'Button',
}
