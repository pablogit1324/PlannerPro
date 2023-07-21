import React from 'react';
import ReactDOM from 'react-dom/client';
import "./Components_Layout_SCSS/main.scss"
import MyComponent from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <MyComponent />
    </React.StrictMode>
);