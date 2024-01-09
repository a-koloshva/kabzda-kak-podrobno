import React from 'react';

type PropsType = {
  status: boolean;
  onClick: (value: boolean) => void;
};

export const OnOff = (props: PropsType) => {
  const onStyle = {
    width: '30px',
    height: '20px',
    border: '1px solid red',
    display: 'inline-block',
    marginLeft: '2px',
    padding: '2px',
    backgroundColor: props.status ? 'green' : 'white',
  };

  const offStyle = {
    width: '30px',
    height: '20px',
    border: '1px solid red',
    display: 'inline-block',
    marginLeft: '2px',
    padding: '2px',
    backgroundColor: props.status ? 'white' : 'red',
  };

  const indicatorStyle = {
    width: '10px',
    height: '10px',
    borderRadius: '5px',
    border: '1px solid red',
    display: 'inline-block',
    marginLeft: '5px',
    backgroundColor: props.status ? 'green' : 'red',
  };

  return (
    <div>
      <div
        style={onStyle}
        onClick={() => {
          props.onClick(true);
        }}>
        On
      </div>
      <div
        style={offStyle}
        onClick={() => {
          props.onClick(false);
        }}>
        Off
      </div>
      <div style={indicatorStyle}></div>
    </div>
  );
};
