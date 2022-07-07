import React, { useContext } from 'react';
import { GlobalContext } from './context/contextProvider';
function App() {
  const context = useContext(GlobalContext);
  console.log('🚀 ~ file: App.js ~ line 5 ~ App ~ context', context);
  return <h1 className='text-3xl font-bold underline'>Hello world!</h1>;
}

export default App;
