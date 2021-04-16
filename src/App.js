import React from 'react';
import './App.css';
import Child from './Child';
import {TransactionProvider} from './TransactionContext';

function App() {
  return (
    <div className="App">
     <TransactionProvider>
       <Child />
     </TransactionProvider>
    </div>
  );
}

export default App;
