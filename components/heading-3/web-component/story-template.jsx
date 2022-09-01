/*
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import React from 'react';

export const argTypes = {
  textContent: {
    description: 'Set the content of the heading',
    control: 'text',
  },
};

export const defaultArgs = {
  textContent: '',
};

export const exampleArgs = {
  textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog',
};

export const Heading3 = ({ textContent = defaultArgs.textContent }) => (
  <section>
    <utrecht-heading-3>{textContent}</utrecht-heading-3>
  </section>
);

export default Heading3;
