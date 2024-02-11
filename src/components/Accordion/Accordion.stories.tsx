import React, { ChangeEvent, useRef, useState } from 'react';
import { action } from '@storybook/addon-actions';
import { Accordion } from './Accordion';

export default {
  title: 'accordion',
  component: 'accordion',
};

const onClickAction = action('click to item');

export const ModeChanging = () => {
  const [value, setValue] = useState<boolean>(false);
  const items = [
    { title: 'bmw', value: 1 },
    { title: 'audi', value: 2 },
    { title: 'opel', value: 3 },
  ];

  return (
    <Accordion
      titleValue={'Cars'}
      collapsed={value}
      onChange={() => setValue(!value)}
      items={items}
      onClick={onClickAction}
    />
  );
};
