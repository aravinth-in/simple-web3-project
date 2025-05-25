import React from 'react'; // Import React
import ReactDOM from 'react-dom/client'; // Import createRoot

import App from "./App";
import { TransactionsProvider } from "./context/TransactionContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root

root.render( // Use root.render
    <React.StrictMode>
        <TransactionsProvider>
            <App />
        </TransactionsProvider>
    </React.StrictMode>
);