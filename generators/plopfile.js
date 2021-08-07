module.exports = plop => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
      {
        type: 'list',
        name: 'componentType',
        message: 'Type of component',
        choices: ['_atoms', '_molecules', '_organisms', '_pages', '_templates'],
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{componentType}}/{{pascalCase name}}/{{pascalCase name}}.js',
        templateFile: 'templates/Component.js.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{componentType}}/{{pascalCase name}}/{{pascalCase name}}.stories.js',
        templateFile: 'templates/stories.js.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{componentType}}/{{pascalCase name}}/{{pascalCase name}}.test.js',
        templateFile: 'templates/test.js.hbs',
      },
    ],
  })
}
