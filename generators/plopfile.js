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
        name: 'componentTemplate',
        message: 'Component Template',
        default: 'none',
        choices: [
          { name: 'With Props', value: 'props' },
          { name: 'No Props', value: 'styled' },
        ],
      },
    ],
    actions: data => {
      let actions = [
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.stories.jsx',
          templateFile: 'templates/stories.js.hbs',
        },
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/index.js',
          templateFile: 'templates/ComponentIndex.js.hbs',
        },
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.test.jsx',
          templateFile: 'templates/test.js.hbs',
        },
      ];

      if (data.componentTemplate === 'props') {
        actions = actions.concat([
          {
            type: 'add',
            path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.jsx',
            templateFile: 'templates/ComponentWithProps.js.hbs',
          },
        ]);
      }

      if (data.componentTemplate === 'noProps') {
        actions = actions.concat([
          {
            type: 'add',
            path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.jsx',
            templateFile: 'templates/Component.js.hbs',
          },
        ]);
      }

      // Return the array of actions to take.
      return actions;
    },
  });
};
