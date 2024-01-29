import { action } from '@storybook/addon-actions';

import { Accordion } from './Accordion';
import { useState } from 'react';

export default {
  title: 'Accordion',
  component: Accordion,
};

const items = [
  { title: 'milk', value: '1' },
  { title: 'water', value: '2' },
  { title: 'cheese', value: '3' },
];

const callback = action('onChange');
const onClickCallback = action('onCkick Item');

export const CollapsedAccordion = () => {
  return (
    <Accordion
      titleValue={'CollapsedAccordion'}
      collapsed={true}
      onChange={callback}
      items={items}
      onClick={onClickCallback}
    />
  );
};

export const OpenedAccordion = () => {
  return (
    <Accordion
      titleValue={'OpenedAccordion'}
      collapsed={false}
      onChange={callback}
      items={items}
      onClick={onClickCallback}
    />
  );
};

export const DefaultAccordion = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Accordion
      titleValue={'OpenedAccordion'}
      collapsed={collapsed}
      onChange={() => setCollapsed(!collapsed)}
      items={items}
      onClick={onClickCallback}
    />
  );
};
