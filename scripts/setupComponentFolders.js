/* eslint-disable no-console */

const setupComponentFolders = {};

const fs = require('fs-extra');
const path = require('path');
const { promisify } = require('util');
const template = require('lodash/fp/template');

setupComponentFolders.writeFile = promisify(fs.writeFile);
setupComponentFolders.readFile = promisify(fs.readFile);

setupComponentFolders.createComponent = async (name, destination) => {
  console.log(`Creating the ${name} component at ${destination}`);

  const srcPath = 'scripts/templates/component';
  const dstPath = path.join(destination, name);

  fs.copySync(srcPath, dstPath, {
    overwrite: false,
    errorOnExist: true,
  });

  await setupComponentFolders.renderTemplates(name, destination);

  console.log('Component successfuly created at', dstPath);
};

setupComponentFolders.renderTemplates = async (name, destination) => {
  const componentBasePath = path.join(destination, name);
  const templatePath = path.join(componentBasePath, 'index.js');
  const componentFileTemplate = [
    "import React from 'react';\n\n",
    "import { propTypes, defaultProps } from './types';\n\n",
    `const ${name} = () => <div />;\n\n`,
    `${name}.propTypes = propTypes;\n\n`,
    `${name}.defaultProps = defaultProps;\n\n`,
    `export default ${name};\n`,
  ].join('');

  await setupComponentFolders.writeFile(
    path.join(componentBasePath, `${name}.jsx`),
    componentFileTemplate,
    { encoding: 'utf8' },
  );

  const componentTestFileTemplate = [
    "import React from 'react';\n",
    "import { shallow } from 'enzyme';\n\n",
    `import ${name} from '../${name}';\n\n`,
    'const defaultProps = {};\n\n',
    // the file write will include indentation,
    // so we need to make sure that the string is at 0 indentation
    // eslint-disable-next-line indent
`describe('The ${name} instance', () => {
  describe('When rendered with default props', () => {
    it('should render without throwing an error', () => {
      const wrapper = shallow(<${name} {...defaultProps} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});\n`,
  ].join('');

  await setupComponentFolders.writeFile(
    path.join(componentBasePath, `__tests__/${name}.test.jsx`),
    componentTestFileTemplate,
    { encoding: 'utf8' },
  );

  await setupComponentFolders.processTemplateFile(templatePath, { name });
};

setupComponentFolders.processTemplateFile = async (file, vars) => {
  const templateContents = await setupComponentFolders.readFile(file, { encoding: 'utf8' });
  const compiled = template(templateContents);
  const output = compiled(vars);

  return setupComponentFolders.writeFile(file, output, { encoding: 'utf8' });
};

module.exports = setupComponentFolders;
