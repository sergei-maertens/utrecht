/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */
import clsx from 'clsx';

export const defaultArgs = {
  viewport: false,
};

export const Backdrop = ({ viewport = false }) =>
  `<div class="${clsx('utrecht-backdrop', viewport && 'utrecht-backdrop--viewport')}"></div>`;

export const checkerboard = (story) =>
  `<div style="
      --checkerboard-color-1: #000000;
      --checkerboard-color-2: #ffffff;
      --checkerboard-size: 16px;
      background-color: var(--checkerboard-color-2);
      background-image: linear-gradient(45deg, var(--checkerboard-color-1) 25%, transparent 25%, transparent 75%, var(--checkerboard-color-1) 75%,var(--checkerboard-color-1)), linear-gradient(45deg, var(--checkerboard-color-1) 25%, transparent 25%, transparent 75%, var(--checkerboard-color-1) 75%, var(--checkerboard-color-1));
      background-position: 0 0, var(--checkerboard-size) var(--checkerboard-size);
      background-size: calc(var(--checkerboard-size) * 2) calc(var(--checkerboard-size) * 2);
      height: 100%;
      min-height: calc(40 * var(--checkerboard-size));
      min-width: calc(40 * var(--checkerboard-size));
      position: relative;
      width: 100%;
">${story()}</div>`;
