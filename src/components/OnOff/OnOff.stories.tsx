import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { OnOff } from './OnOff';

export default {
  title: 'OnOff Stories',
  component: OnOff,
};

export const OnMode = () => <OnOff status={true} onClick={action('click')} />;
export const OffMode = () => <OnOff status={false} onClick={action('click')} />;

export const ModeChanging = () => {
  let [value, setValue] = useState<boolean>(true);
  return <OnOff status={value} onClick={setValue} />;
};
