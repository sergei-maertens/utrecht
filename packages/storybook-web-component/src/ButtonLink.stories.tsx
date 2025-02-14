/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/button-link/README.md?raw';
import tokensDefinition from '@utrecht/components/button-link/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { UtrechtButtonLink } from '@utrecht/web-component-library-react';
import React from 'react';
import { PropsWithChildren } from 'react';
import { designTokenStory } from './design-token-story';

interface ButtonLinkStoryProps {
  appearance?: string;
  disabled?: boolean;
  external?: boolean;
  href: string;
  placeholder?: boolean;
}

const ButtonLinkStory = ({
  appearance,
  children,
  href,
  external,
  placeholder,
}: PropsWithChildren<ButtonLinkStoryProps>) => (
  <UtrechtButtonLink
    appearance={appearance}
    external={external || undefined}
    href={href}
    placeholder={placeholder || undefined}
  >
    {children}
  </UtrechtButtonLink>
);

const meta = {
  title: 'Web Component/Button link',
  id: 'web-component-button-link',
  component: ButtonLinkStory,
  argTypes: {
    appearance: {
      description: 'Appearance',
      control: { type: 'select' },
      options: ['', 'button', 'primary-action-button', 'secondary-action-button', 'subtle-button'],
    },
    children: {
      description: 'Button text',
      control: 'text',
    },
    disabled: {
      description: 'Disabled',
      control: 'boolean',
    },
    external: {
      description: 'External',
      control: 'boolean',
    },
    href: {
      description: 'Target URL',
      control: 'text',
    },
    placeholder: {
      description: 'Placeholder',
      control: 'boolean',
    },
  },
  args: {
    disabled: false,
    external: false,
    children: '',
    placeholder: false,
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-button',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof ButtonLinkStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Read more...',
    href: 'https://example.com/',
  },
};

export const PrimaryAction: Story = {
  args: {
    appearance: 'primary-action-button',
    children: 'Read more...',
    href: 'https://example.com/',
  },
  name: 'Primary action',
};

export const SecondaryAction: Story = {
  args: {
    appearance: 'secondary-action-button',
    children: 'Read more...',
    href: 'https://example.com/',
  },
  name: 'Secondary action button',
};

export const SubtleButton: Story = {
  args: {
    appearance: 'subtle-button',
    children: 'Read more...',
    href: 'https://example.com/',
  },
  name: 'Subtle button',
};

export const External: Story = {
  args: {
    external: true,
    href: 'https://example.com/sign-up/',
    children: 'Sign up',
  },
};

export const Placeholder: Story = {
  args: {
    placeholder: true,
    href: 'https://example.com/premium/',
    children: 'Premium feature (locked)',
  },
};

export const DesignTokens = designTokenStory(meta);
