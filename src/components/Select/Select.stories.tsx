import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { Select } from './Select';

export default {
  title: 'Select',
  // component: OnOff,
};

export const SelectChanging = () => {
  const [value, setValue] = useState('2');

  const items = [
    { title: 'bmw', value: '1' },
    { title: 'audi', value: '2' },
    { title: 'opel', value: '3' },
  ];

  const onClickAction = action(`Value changed`);

  return <Select items={items} value={value} onChange={setValue} />;
};
