import './App.css';
import Count from './Count';
import Display from './Display';
// import ComponentA from './ComponentA';
import React, { createContext, useState } from 'react';
// import ComponentB from './ComponentB';



export const store = createContext();
const App= () => {
  const [data, setData] = useState([
    {
      brandname: "Nokia"
    },
    {
      brandname: "Realme"
    },
    {

      brandname: " MI"
    }

  ]);
  return (
    <store.Provider value={[data, setData]}>
      <div className="App m-5">
        {/* <ComponentA /> */}
        {/* <ComponentB /> */}
        <Count />
        <Display />
        {/* <button onClick={() => setData(data + 1)}>Increment button</button> */}
      </div>
    </store.Provider>

  );
}

export default App;

/*  In React.js, the Context API is a feature that allows you
    to share data across multiple components without passing props explicitly at each level. 
    It provides a way to pass data through the component tree without manually passing props down 
    from parent to child components.
*/