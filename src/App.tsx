import React, { useState } from 'react';
import './App.css';
import { OnOff } from './components/OnOff/OnOff';
import { UncontrolledOnOff } from './components/OnOff/UncontrolledOnOff';

function App() {
  let [onOffStatus, setOnOffStatus] = useState<boolean>(false);

  return (
    <div className="App">
      {/* <OnOff status={onOffStatus} onClick={setOnOffStatus} /> */}
      <UncontrolledOnOff onClick={setOnOffStatus} /> {onOffStatus.toString()}
    </div>
  );
}

export default App;
