import React, { ChangeEvent, useRef, useState } from 'react';
import { action } from '@storybook/addon-actions';

export default {
  title: 'input',
  component: 'input',
};

export const UncontrolledInput = () => <input />;

export const TrackValueUncontrolledInput = () => {
  const [value, setValue] = useState('');

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  return (
    <>
      <input onChange={onChangeHandler} /> -{value}
    </>
  );
};

export const GetValueUncontrolledInputByButtonPress = () => {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickHandler = () => {
    const el = inputRef.current as HTMLInputElement;
    setValue(el.value);
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={onClickHandler}>Save</button> - actual value: {value}
    </>
  );
};

export const ControlledInput = () => {
  const [parentValue, setParentValue] = useState('');
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.value);
  };

  return <input value={parentValue} onChange={onChangeHandler} />;
};

export const ControlledCheckbox = () => {
  const [parentValue, setParentValue] = useState(false);
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.checked);
  };

  return <input type="checkbox" checked={parentValue} onChange={onChangeHandler} />;
};

export const ControlledSelect = () => {
  const [parentValue, setParentValue] = useState<string | undefined>('2');
  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.currentTarget.value);
    setParentValue(e.currentTarget.value);
  };

  return (
    <select value={parentValue} onChange={onChangeHandler}>
      <option>null</option>
      <option value={'1'}>Minsk</option>
      <option value={'2'}>Moscow</option>
      <option value={'3'}>Kiev</option>
    </select>
  );
};

export const СontrolledInputWithFixedValue = () => <input value={'hello world'} />;
