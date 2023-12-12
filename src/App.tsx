/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



interface Count {
  countTotal: number;
}

const initialCount: Count = {
  countTotal: 0
}


const palindromCheck = (word: string) => {
  // const length = String(word).split('').reverse().join('')
  const temp = word;
  const length = word.length
  for (let index = 0; index < length; index++) {
    const normalChar = temp.charAt(index);
    const reverseChar = temp.charAt(length - (index + 1) );

    if(normalChar === reverseChar){
      console.log('@@@ PALINDROM');
    } else {
      console.log('@@@ NOT PALINDROM');
    }
  }
}

const App = (props: any) => {
  const [count, setCount] = useState(initialCount)
  palindromCheck("1katak1");
  return (
    <>
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
    <h1>Vite + React</h1>
    <div className="card">
      <button onClick={() => setCount({
        countTotal: count.countTotal + 1
      })}>
        count is {count.countTotal}
      </button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
    <p className="read-the-docs">
      Click on the Vite and React logos to learn more
    </p>
  </>
  )
}

export default App
