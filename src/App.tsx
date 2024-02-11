import React from 'react';
import './App.css';
import { UncontrolledInput } from './components/input.stories';

function App() {
  // let [onOffStatus, setOnOffStatus] = useState<boolean>(false);
  // let [accordionCollapsed, setAccordionCollapsed] = useState(false);

  return (
    <div className="App">
      {/* <OnOff status={onOffStatus} onClick={setOnOffStatus} /> */}
      {/* <UncontrolledOnOff onClick={setOnOffStatus} /> {onOffStatus.toString()} */}

      {/* <Accordion
        titleValue={'Menu'}
        collapsed={accordionCollapsed}
        onChange={() => {
          setAccordionCollapsed(!accordionCollapsed);
        }}
      /> */}
      {/* <UncontrolledInput /> */}
    </div>
  );
}

export default App;
