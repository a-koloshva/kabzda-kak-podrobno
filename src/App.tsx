import React, { useState } from 'react';
import './App.css';
import { OnOff } from './components/OnOff/OnOff';
import { UncontrolledOnOff } from './components/OnOff/UncontrolledOnOff';
import { Accordion } from './components/Accordion/Accordion';

function App() {
  // let [onOffStatus, setOnOffStatus] = useState<boolean>(false);
  let [accordionCollapsed, setAccordionCollapsed] = useState(false);

  return (
    <div className="App">
      {/* <OnOff status={onOffStatus} onClick={setOnOffStatus} /> */}
      {/* <UncontrolledOnOff onClick={setOnOffStatus} /> {onOffStatus.toString()} */}

      <Accordion
        titleValue={'Menu'}
        collapsed={accordionCollapsed}
        onChange={() => {
          setAccordionCollapsed(!accordionCollapsed);
        }}
      />
    </div>
  );
}

export default App;
