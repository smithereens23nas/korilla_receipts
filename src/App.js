import React, { useState } from 'react';
import './App.css';
import receipts from './store/data';
import Forms from './components/forms';
import Receipt from './components/receipt';

function App() {
    const [receipt, setReceipt] = useState(receipts);


    
    
  return (
    <div className="">
    <Forms
    receipt = { receipt }
    setReceipt = { setReceipt }
    />
    <Receipt
    receipt = { receipt }
    />

    </div>
  );
}

export default App;
