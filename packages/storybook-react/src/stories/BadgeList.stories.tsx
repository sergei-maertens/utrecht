import { Meta, StoryObj } from '@storybook/react';
import { BadgeList, DataBadge } from '@utrecht/component-library-react/src/css-module/index';
import readme from '@utrecht/components/badge-list/README.md?raw';
import tokensDefinition from '@utrecht/components/badge-list/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Badge list',
  id: 'react-badge-list',
  component: BadgeList,
  args: {
    children: [<DataBadge>Badge A</DataBadge>, <DataBadge>Badge B</DataBadge>, <DataBadge>Badge C</DataBadge>],
  },
  argTypes: {},
  parameters: {
    tokensPrefix: 'utrecht-badge-list',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof BadgeList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);
