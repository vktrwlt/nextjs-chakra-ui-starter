const path = require('path')

const toPath = _path => path.join(process.cwd(), _path)

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
  ],
  webpackFinal: config => {
    config.resolve.alias['@emotion/core'] = toPath(
      'node_modules/@emotion/react'
    )
    config.resolve.alias['emotion-theming'] = toPath(
      'node_modules/@emotion/react'
    )
    config.resolve.alias['~/components'] = toPath('src/components')

    config.resolve.modules.push(`${process.cwd()}/src`)

    return config
  },
}
