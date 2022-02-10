import { useState } from 'react'
import './App.css';

import Counter from './components/Counter';
import Counter2 from './components/Counter2';
import Counter3 from './components/Counter3';

function App() {

  const [mode1, setMode1] = useState(0)

  const [mode2, setMode2] = useState(0)

  const [mode3, setMode3] = useState(0)

  return (
    <div className="container">
      <section>
        <h4>Class Component</h4>
        <div className="panel">
          <button disabled={mode1 === 1 ? true : false} onClick={() => setMode1(1)} className={mode1 === 1 ? "disabled" : "button"}>{ mode1 === 2 ? "Resume" : "Start" }</button>
          <button disabled={mode1 === 1 ? false : true} onClick={() => setMode1(2)} className={mode1 === 1 ? "button" : "disabled"}>Pause</button>
          <button disabled={mode1 > 0 ? false : true} onClick={() => setMode1(0)} className={mode1 > 0 ? "button" : "disabled"}>Stop</button>
          <div className="count">
            <Counter initialValue={0} start={mode1} />
          </div>
        </div>
      </section>
      <section>
        <h4>Function Component</h4>
        <div className="panel">
          <button disabled={mode2 === 1 ? true : false} onClick={() => setMode2(1)} className={mode2 === 1 ? "disabled" : "button"}>{ mode2 === 2 ? "Resume" : "Start" }</button>
          <button disabled={mode2 === 1 ? false : true} onClick={() => setMode2(2)} className={mode2 === 1 ? "button" : "disabled"}>Pause</button>
          <button disabled={mode2 > 0 ? false : true} onClick={() => setMode2(0)} className={mode2 > 0 ? "button" : "disabled"}>Stop</button>
          <div className="count">
            <Counter2 initialValue={0} start={mode2} />
          </div>
        </div>
      </section>
      <section>
        <h4>Custom Hook</h4>
        <div className="panel">
          <button disabled={mode3 === 1 ? true : false} onClick={() => setMode3(1)} className={mode3 === 1 ? "disabled" : "button"}>{ mode3 === 2 ? "Resume" : "Start" }</button>
          <button disabled={mode3 === 1 ? false : true} onClick={() => setMode3(2)} className={mode3 === 1 ? "button" : "disabled"}>Pause</button>
          <button disabled={mode3 > 0 ? false : true} onClick={() => setMode3(0)} className={mode3 > 0 ? "button" : "disabled"}>Stop</button>
          <div className="count">
            <Counter3 initialValue={0} start={mode3} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
