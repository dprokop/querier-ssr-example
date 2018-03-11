import 'normalize.css';
import './storybook-global.css';
import '../../app/index.css';

import { addDecorator, configure } from '@storybook/react';
import React from 'react';

// TODO: move to paths.js
const req = require.context('../../app', true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
