import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonGroup } from '@utrecht/component-library-react/src/css-module/index';
import readme from '@utrecht/components/button-group/README.md?raw';
import tokensDefinition from '@utrecht/components/button-group/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Button group',
  id: 'react-button-group',
  component: ButtonGroup,
  args: {
    children: (
      <>
        <Button appearance="primary-action-button">Save and continue</Button>
        <Button appearance="secondary-action-button">Back</Button>
      </>
    ),
  },
  argTypes: {},
  parameters: {
    tokensPrefix: 'utrecht-button-group',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);
