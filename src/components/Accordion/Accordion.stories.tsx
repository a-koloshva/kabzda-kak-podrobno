import { action } from '@storybook/addon-actions';

import { Accordion } from './Accordion';
import { useState } from 'react';

export default {
  component: Accordion,
};

const onChangeHandler = action('onChange');

export const CollapsedAccordion = () => {
  return (
    <Accordion titleValue={'CollapsedAccordion'} collapsed={true} onChange={onChangeHandler} />
  );
};

export const OpenedAccordion = () => {
  return <Accordion titleValue={'OpenedAccordion'} collapsed={false} onChange={() => {}} />;
};

export const DefaultAccordion = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Accordion
      titleValue={'OpenedAccordion'}
      collapsed={collapsed}
      onChange={() => setCollapsed(!collapsed)}
    />
  );
};
