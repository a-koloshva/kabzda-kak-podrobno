import React from 'react';

type ItemType = {
  title: string;
  value: any;
};

type AccordionPropsType = {
  titleValue: string;
  collapsed: boolean;
  onChange: () => void;
  items: ItemType[];
  onClick: (value: any) => void;
};

export const Accordion = (props: AccordionPropsType) => {
  return (
    <div>
      <AccordionTitle title={props.titleValue} onChange={props.onChange} />
      {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick} />}
    </div>
  );
};

type AccordionTitlePropsType = {
  title: string;
  onChange: () => void;
};

const AccordionTitle = (props: AccordionTitlePropsType) => {
  return (
    <div>
      <h3 onClick={props.onChange}>-- {props.title} --</h3>
    </div>
  );
};

type AccordionBodyPropsType = {
  items: ItemType[];
  onClick: (value: any) => void;
};

const AccordionBody = (props: AccordionBodyPropsType) => {
  return (
    <div>
      <ul>
        {props.items.map((item, index) => {
          return <li onClick={() => props.onClick(item.value)}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
};
