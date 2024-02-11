import React, { KeyboardEvent, useEffect, useState } from 'react';
import styles from './Select.module.css';

type ItemType = {
  title: string;
  value: any;
};

type SelectPropsType = {
  value: any;
  items: ItemType[];
  onChange: (value: any) => void;
};

// export const Select = (props: SelectPropsType) => {
//   const [collapsed, setCollapsed] = useState<boolean>(false);
//   const [selectedOption, setSelectedOption] = useState<string | null>(null);

//   const collapsedClickHandler = () => {
//     setCollapsed(!collapsed);
//   };

//   const optionClickHandler = (value: string) => {
//     setSelectedOption(value);
//     setCollapsed(false);
//   };

//   return (
//     <div>
//       <div onClick={collapsedClickHandler}>{selectedOption ? selectedOption : 'Choose...'}</div>
//       {collapsed && (
//         <div>
//           {props.items.map((item: ItemType) => (
//             <div key={item.value} onClick={() => optionClickHandler(item.title)}>
//               {item.title}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

export const Select = (props: SelectPropsType) => {
  const [active, setActive] = useState(false);
  const [hoveredElementValue, setHoveredElementValue] = useState(props.value);

  const selectedItem = props.items.find((item) => item.value === props.value);
  const hoveredItem = props.items.find((item) => item.value === hoveredElementValue);

  useEffect(() => {
    setHoveredElementValue(props.value);
  }, [props.value]);

  const toggleItems = () => setActive(!active);

  const onItemClick = (value: any) => {
    props.onChange(value);
    toggleItems();
  };

  const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      for (let i = 0; i < props.items.length; i++) {
        if (props.items[i].value === hoveredElementValue) {
          const pretendentElement = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1];
          if (pretendentElement) {
            props.onChange(pretendentElement.value);
            return;
          }
        }
      }
      if (!selectedItem) {
        props.onChange(props.items[0].value);
      }
    }
    if (e.key === 'Enter' || e.key === 'Escape') {
      setActive(false);
    }
  };

  return (
    <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0}>
      <span className={styles.main} onClick={toggleItems}>
        {selectedItem && selectedItem.title}
      </span>
      {active && (
        <div className={styles.items}>
          {props.items.map((i) => (
            <div
              onMouseEnter={() => {
                setHoveredElementValue(i.value);
              }}
              key={i.value}
              onClick={() => onItemClick(i.value)}
              className={styles.item + ' ' + (hoveredItem === i ? styles.selected : '')}>
              {i.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
